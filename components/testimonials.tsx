export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "USA",
      text: "The most relaxing experience of my life. The therapists are incredibly skilled and the ambiance is absolutely magical.",
      rating: 5,
    },
    {
      name: "Emma Davis",
      country: "UK",
      text: "I visited Episode Kuta Bali three times during my Bali trip. Every visit was exceptional. Truly world-class service!",
      rating: 5,
    },
    {
      name: "Marco Rossi",
      country: "Italy",
      text: "The natural products and traditional techniques made all the difference. My skin has never felt better.",
      rating: 5,
    },
    {
      name: "Lisa Chen",
      country: "Singapore",
      text: "A sanctuary of peace in the heart of Bali. I recommend Episode Kuta Bali to all my friends and family.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">Guest Testimonials</h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background p-6 sm:p-8 rounded-lg border border-border">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-accent text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic leading-relaxed text-sm sm:text-base">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
