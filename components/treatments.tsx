"use client"

import { useState } from "react"

export default function Treatments() {
  const [selectedCategory, setSelectedCategory] = useState("massage")

  const treatments = {
    massage: [
      {
        name: "Balinese Massage",
        duration: "60 mins",
        price: "$60",
        benefits: "Relieves tension, improves circulation",
        image: "/balinese-massage-treatment.jpg",
      },
      {
        name: "Deep Tissue Massage",
        duration: "90 mins",
        price: "$85",
        benefits: "Targets muscle knots, therapeutic healing",
        image: "/deep-tissue-massage.jpg",
      },
      {
        name: "Hot Stone Massage",
        duration: "75 mins",
        price: "$75",
        benefits: "Soothes muscles, promotes relaxation",
        image: "/hot-stone-massage.png",
      },
    ],
    facial: [
      {
        name: "Balinese Facial",
        duration: "60 mins",
        price: "$50",
        benefits: "Rejuvenates skin with natural ingredients",
        image: "/spa-facial-treatment.png",
      },
      {
        name: "Anti-Aging Facial",
        duration: "75 mins",
        price: "$70",
        benefits: "Reduces wrinkles, brightens complexion",
        image: "/anti-aging-facial.jpg",
      },
    ],
    body: [
      {
        name: "Body Scrub & Wrap",
        duration: "90 mins",
        price: "$75",
        benefits: "Exfoliates and moisturizes entire body",
        image: "/body-scrub-spa-treatment.jpg",
      },
      {
        name: "Aromatherapy Treatment",
        duration: "60 mins",
        price: "$55",
        benefits: "Therapeutic scents for ultimate relaxation",
        image: "/aromatherapy-spa-treatment.jpg",
      },
    ],
  }

  const currentTreatments = treatments[selectedCategory as keyof typeof treatments]

  return (
    <section id="treatments" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">Our Treatment Packages</h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(treatments).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category as keyof typeof treatments)}
              className={`px-6 py-2 rounded-full font-medium transition-colors capitalize ${
                selectedCategory === category
                  ? "bg-accent text-background"
                  : "bg-background text-foreground border border-border hover:border-accent"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Treatment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentTreatments.map((treatment, index) => (
            <div key={index} className="bg-background rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-muted overflow-hidden">
                <img
                  src={treatment.image || "/placeholder.svg"}
                  alt={treatment.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-foreground mb-2">{treatment.name}</h3>
                <div className="flex justify-between items-center mb-3 text-sm text-muted-foreground">
                  <span>⏱️ {treatment.duration}</span>
                  <span className="font-semibold text-accent">{treatment.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{treatment.benefits}</p>
                <button className="w-full py-2 bg-accent text-background rounded-full font-medium hover:bg-accent/90 transition-colors text-sm">
                  Book Treatment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
