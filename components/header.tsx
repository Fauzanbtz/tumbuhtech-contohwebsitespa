"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

interface HeaderProps {
  isScrolled: boolean
}

export default function Header({ isScrolled }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Treatments", id: "treatments" },
    { label: "Gallery", id: "gallery" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-accent"></div>
          <span className="font-serif text-xl font-semibold text-foreground">Episode Kuta Bali</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollToSection("contact")}
            className="px-6 py-2 bg-accent text-background rounded-full font-medium text-sm hover:bg-accent/90 transition-colors"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-4 py-4 space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-sm font-medium text-foreground hover:text-accent transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full mt-4 px-6 py-2 bg-accent text-background rounded-full font-medium text-sm"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
