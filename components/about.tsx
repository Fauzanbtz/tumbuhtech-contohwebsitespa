export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="rounded-lg overflow-hidden h-96 md:h-full min-h-96">
            <img src="/spa-relaxation-area-with-candles.jpg" alt="Episode Kuta Bali Interior" className="w-full h-full object-cover" />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-6">About Episode Kuta Bali</h2>
            <div className="w-12 h-1 bg-accent mb-6"></div>

            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              Kamar penuh warna dilengkapi Wi-Fi gratis, TV layar datar, kulkas mini, serta fasilitas pembuat teh dan kopi. Beberapa kamar memiliki teras atau balkon. Kamar di kelas yang lebih tinggi memiliki kamar tidur tingkat. Suite memiliki area tempat duduk. Room service ditawarkan.
            </p>

            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Sarapan tersedia di kafe terbuka funky yang menyajikan hidangan halal dan Barat. Ada kolam renang lap outdoor di samping bar. Fasilitas lainnya meliputi spa dan gym, serta klub anak-anak.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-2xl">🏊‍♂️</span>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Pool & Bar</h3>
                  <p className="text-sm text-muted-foreground">
                    Kolam renang lap outdoor di samping bar yang menyegarkan.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">🧘‍♀️</span>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Spa & Gym</h3>
                  <p className="text-sm text-muted-foreground">
                    Fasilitas lengkap termasuk spa, gym, dan klub anak-anak.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
