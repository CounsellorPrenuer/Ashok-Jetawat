import galleryImage1 from "@assets/stock_images/professional_corpora_b2054b8f.jpg";
import galleryImage2 from "@assets/stock_images/professional_corpora_f0eabfdc.jpg";
import galleryImage3 from "@assets/stock_images/professional_corpora_2d412084.jpg";
import { useState } from "react";

const images = [
  { src: galleryImage1, alt: "Corporate training session" },
  { src: galleryImage2, alt: "Seminar presentation" },
  { src: galleryImage3, alt: "Workshop event" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-4">
            Dr. Jetawat in Action
          </h2>
          <p className="text-xl text-muted-foreground">
            Inspiring audiences and transforming lives across the nation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative aspect-video rounded-lg overflow-hidden cursor-pointer hover-elevate active-elevate-2 transition-all shadow-lg group"
              onClick={() => setSelectedImage(index)}
              data-testid={`gallery-image-${index}`}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        <div className="bg-card border border-card-border rounded-lg p-8">
          <h3 className="font-heading font-semibold text-2xl mb-6 text-center">Featured Videos</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="aspect-video rounded-lg overflow-hidden bg-muted" data-testid="video-testimonial">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dTib_iRDEq0"
                title="Student Testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="aspect-video rounded-lg overflow-hidden bg-muted flex items-center justify-center text-muted-foreground" data-testid="video-placeholder">
              <div className="text-center">
                <div className="text-lg font-medium">More videos coming soon</div>
                <div className="text-sm">Subscribe to our YouTube channel</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          data-testid="lightbox"
        >
          <div className="max-w-6xl w-full">
            <img 
              src={images[selectedImage].src} 
              alt={images[selectedImage].alt} 
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
