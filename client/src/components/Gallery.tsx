import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import galleryImage1 from "@assets/stock_images/professional_corpora_b2054b8f.jpg";
import galleryImage2 from "@assets/stock_images/professional_corpora_f0eabfdc.jpg";
import galleryImage3 from "@assets/stock_images/professional_corpora_2d412084.jpg";
import { X } from "lucide-react";

const images = [
  { src: galleryImage1, alt: "Corporate training session" },
  { src: galleryImage2, alt: "Seminar presentation" },
  { src: galleryImage3, alt: "Workshop event" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-bold text-4xl lg:text-5xl xl:text-6xl text-foreground mb-4">
            Dr. Jetawat in Action
          </h2>
          <p className="text-xl text-muted-foreground">
            Inspiring audiences and transforming lives across the nation
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {images.map((image, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -8 }}
              className="relative aspect-video rounded-xl overflow-hidden cursor-pointer shadow-lg group"
              onClick={() => setSelectedImage(index)}
              data-testid={`gallery-image-${index}`}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-primary-foreground text-sm font-medium px-4 py-2 bg-primary/90 rounded-lg">
                  Click to view
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="bg-card border border-card-border rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="font-heading font-semibold text-2xl mb-6 text-center">Featured Videos</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div 
              className="aspect-video rounded-xl overflow-hidden bg-muted shadow-lg"
              whileHover={{ scale: 1.02 }}
              data-testid="video-testimonial"
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dTib_iRDEq0"
                title="Student Testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </motion.div>
            <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center text-muted-foreground border border-border" data-testid="video-placeholder">
              <div className="text-center p-6">
                <div className="text-lg font-medium mb-2">More videos coming soon</div>
                <div className="text-sm">Subscribe to our YouTube channel</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div 
            className="fixed inset-0 z-50 bg-background/98 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            data-testid="lightbox"
          >
            <button 
              className="absolute top-4 right-4 text-foreground hover:text-primary transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div 
              className="max-w-6xl w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <img 
                src={images[selectedImage].src} 
                alt={images[selectedImage].alt} 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
