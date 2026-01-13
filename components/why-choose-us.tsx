export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Certified Therapists",
      description: "Highly trained professionals with 10+ years of experience",
    },
    {
      title: "Natural Products",
      description: "100% organic, chemical-free products from Bali",
    },
    {
      title: "Private Rooms",
      description: "Intimate treatment spaces for complete relaxation",
    },
    {
      title: "Holistic Wellness",
      description: "Personalized approach to your well-being journey",
    },
  ]

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">Why Choose Episode Kuta Bali</h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-background font-serif text-lg">
                  {index + 1}
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
