"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import WhyChooseUs from "@/components/why-choose-us"
import About from "@/components/about"
import Treatments from "@/components/treatments"
import Gallery from "@/components/gallery"
import Testimonials from "@/components/testimonials"

import Contact from "@/components/contact"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="bg-background">
      <Header isScrolled={isScrolled} />
      <Hero />
      <Services />
      <WhyChooseUs />
      <About />
      <Treatments />
      <Gallery />
      <Testimonials />

      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
