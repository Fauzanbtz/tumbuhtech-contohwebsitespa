"use client"

import { useState } from "react"
import { X } from "lucide-react"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      src: "/luxury-spa-treatment-room.jpg",
      alt: "Treatment Room",
    },
    {
      src: "/balinese-spa-massage-therapy.jpg",
      alt: "Massage Therapy",
    },
    {
      src: "/spa-relaxation-area-with-candles.jpg",
      alt: "Relaxation Area",
    },
    {
      src: "/natural-spa-products-bali.jpg",
      alt: "Natural Products",
    },
    {
      src: "/aromatherapy-spa-treatment.jpg",
      alt: "Spa Aromatherapy",
    },
    {
      src: "/hot-stone-massage.png",
      alt: "Hot Stone Massage",
    },
  ]

  return (
    <section id="gallery" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">Our Spa Gallery</h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative h-64 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[selectedImage].src || "/placeholder.svg"}
              alt={galleryImages[selectedImage].alt}
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 bg-background rounded-full hover:bg-muted transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
