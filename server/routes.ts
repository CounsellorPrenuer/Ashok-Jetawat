import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema, insertBookingSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import Razorpay from "razorpay";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Lead capture endpoint
  app.post("/api/leads", async (req, res) => {
    try {
      const validatedData = insertLeadSchema.parse(req.body);
      const lead = await storage.createLead(validatedData);
      res.status(201).json(lead);
    } catch (error: any) {
      if (error.name === "ZodError") {
        return res.status(400).json({ 
          error: fromZodError(error).toString() 
        });
      }
      console.error("Error creating lead:", error);
      res.status(500).json({ error: "Failed to create lead" });
    }
  });

  // Get all leads (admin endpoint)
  app.get("/api/leads", async (req, res) => {
    try {
      const leads = await storage.getAllLeads();
      res.json(leads);
    } catch (error) {
      console.error("Error fetching leads:", error);
      res.status(500).json({ error: "Failed to fetch leads" });
    }
  });

  // Create booking endpoint with Razorpay order
  app.post("/api/bookings", async (req, res) => {
    try {
      const validatedData = insertBookingSchema.parse(req.body);
      
      // Create Razorpay order
      const razorpayKeyId = process.env.RAZORPAY_KEY_ID;
      const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET;
      
      if (!razorpayKeyId || !razorpayKeySecret) {
        return res.status(500).json({ 
          error: "Payment gateway not configured. Please contact support." 
        });
      }
      
      const razorpay = new Razorpay({
        key_id: razorpayKeyId,
        key_secret: razorpayKeySecret,
      });
      
      const order = await razorpay.orders.create({
        amount: parseInt(validatedData.amount) * 100, // amount in paise
        currency: "INR",
        receipt: `booking_${Date.now()}`,
      });
      
      // Create booking with Razorpay order ID
      const booking = await storage.createBooking(validatedData);
      const updatedBooking = await storage.updateBookingPayment(
        booking.id,
        order.id,
        "",
        "pending"
      );
      
      res.status(201).json(updatedBooking);
    } catch (error: any) {
      if (error.name === "ZodError") {
        return res.status(400).json({ 
          error: fromZodError(error).toString() 
        });
      }
      console.error("Error creating booking:", error);
      res.status(500).json({ error: "Failed to create booking" });
    }
  });

  // Get booking by ID
  app.get("/api/bookings/:id", async (req, res) => {
    try {
      const booking = await storage.getBooking(req.params.id);
      if (!booking) {
        return res.status(404).json({ error: "Booking not found" });
      }
      res.json(booking);
    } catch (error) {
      console.error("Error fetching booking:", error);
      res.status(500).json({ error: "Failed to fetch booking" });
    }
  });

  // Update booking payment status with signature verification
  app.patch("/api/bookings/:id/payment", async (req, res) => {
    try {
      const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
      
      if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
        return res.status(400).json({ 
          error: "Missing payment verification data" 
        });
      }

      // Get the existing booking first
      const existingBooking = await storage.getBooking(req.params.id);
      if (!existingBooking) {
        return res.status(404).json({ error: "Booking not found" });
      }

      // Verify that the order ID matches the booking
      if (existingBooking.razorpayOrderId !== razorpay_order_id) {
        console.error("Order ID mismatch: booking order", existingBooking.razorpayOrderId, "vs payment order", razorpay_order_id);
        return res.status(400).json({ 
          error: "Payment does not belong to this booking" 
        });
      }

      // Verify Razorpay signature
      const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET;
      if (!razorpayKeySecret) {
        console.error("Razorpay key secret not configured");
        return res.status(500).json({ 
          error: "Payment verification not configured" 
        });
      }

      const crypto = await import("crypto");
      const expectedSignature = crypto
        .createHmac("sha256", razorpayKeySecret)
        .update(`${razorpay_order_id}|${razorpay_payment_id}`)
        .digest("hex");

      if (expectedSignature !== razorpay_signature) {
        console.error("Payment signature verification failed for booking", req.params.id);
        return res.status(400).json({ 
          error: "Payment signature verification failed" 
        });
      }

      // Signature and order verified, update booking
      const booking = await storage.updateBookingPayment(
        req.params.id,
        razorpay_order_id,
        razorpay_payment_id,
        "completed"
      );
      
      if (!booking) {
        return res.status(500).json({ error: "Failed to update booking" });
      }
      
      res.json(booking);
    } catch (error: any) {
      console.error("Error updating booking payment:", error);
      res.status(500).json({ 
        error: "Failed to update booking payment",
        details: process.env.NODE_ENV === "development" ? error.message : undefined
      });
    }
  });

  // Get all bookings (admin endpoint)
  app.get("/api/bookings", async (req, res) => {
    try {
      const bookings = await storage.getAllBookings();
      res.json(bookings);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      res.status(500).json({ error: "Failed to fetch bookings" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
