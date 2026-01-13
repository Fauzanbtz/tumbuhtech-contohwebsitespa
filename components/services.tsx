export default function Services() {
  const services = [
    {
      icon: "💆",
      title: "Massage",
      description: "Traditional Balinese massage therapy",
    },
    {
      icon: "✨",
      title: "Facial",
      description: "Rejuvenating facial treatments",
    },
    {
      icon: "🧖",
      title: "Body Treatment",
      description: "Full-body wellness rituals",
    },
    {
      icon: "💑",
      title: "Couples Spa",
      description: "Experience relaxation together",
    },
  ]

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">Our Signature Services</h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:bg-muted transition-colors">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="font-serif text-xl text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
