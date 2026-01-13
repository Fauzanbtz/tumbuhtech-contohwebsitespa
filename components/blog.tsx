export default function Blog() {
  const blogPosts = [
    {
      title: "Benefits of Balinese Massage",
      excerpt: "Discover how traditional Balinese massage techniques can transform your wellness journey...",
      date: "January 15, 2024",
      image: "/balinese-massage-benefits.jpg",
    },
    {
      title: "Spa Rituals in Bali",
      excerpt: "Explore the ancient wellness practices that have been perfected over centuries in Bali...",
      date: "January 10, 2024",
      image: "/traditional-bali-spa-rituals.jpg",
    },
    {
      title: "Self-Care & Wellness Tips",
      excerpt: "Simple daily practices to maintain your wellness and inner peace beyond the spa...",
      date: "January 5, 2024",
      image: "/wellness-self-care-tips.jpg",
    },
  ]

  return (
    <section id="blog" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">Wellness Journal</h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-muted rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <p className="text-xs text-muted-foreground mb-3">{post.date}</p>
                <h3 className="font-serif text-lg text-foreground mb-3">{post.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                <button className="text-accent font-medium text-sm hover:text-accent/80 transition-colors">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
