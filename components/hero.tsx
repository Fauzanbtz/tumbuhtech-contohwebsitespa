"use client"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/luxury-spa-treatment-room.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto px-4 sm:px-6">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-6 text-balance">
          Episode Kuta Bali
        </h1>
        <p className="text-lg sm:text-xl text-white/90 mb-10 text-balance">
          Hotel santai di jalan yang ramai ini berjarak 5 km dari Pantai Kuta yang ramai dan Bandara Internasional Ngurah Rai.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-accent text-background rounded-full font-semibold hover:bg-accent/90 transition-colors">
            Book via WhatsApp
          </button>
          <button className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors">
            Reserve Now
          </button>
        </div>
      </div>
    </section>
  )
}
