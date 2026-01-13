export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-accent"></div>
              <span className="font-serif text-lg font-semibold">Episode Kuta Bali</span>
            </div>
            <p className="text-sm text-background/80">Your sanctuary of wellness and relaxation in Bali</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-accent transition-colors">
                  Treatments
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-accent transition-colors">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#treatments" className="hover:text-accent transition-colors">
                  Massage
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-accent transition-colors">
                  Facial
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-accent transition-colors">
                  Body Treatments
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-accent transition-colors">
                  Couples Spa
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>+62 361 123 4567</li>
              <li>info@episodekutabali.com</li>
              <li>Seminyak, Bali, Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <p className="text-center text-sm text-background/80">
            © 2026 Episode Kuta Bali. All rights reserved. Crafted with care for your wellness journey.
          </p>
        </div>
      </div>
    </footer>
  )
}
