"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Clock, Mail } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">Get in Touch</h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="font-serif text-2xl text-foreground mb-8">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Location</h4>
                  <p className="text-muted-foreground text-sm">Jl. Spa Road No. 123, Seminyak, Bali 80361, Indonesia</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground text-sm">+62 361 123 4567</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground text-sm">info@serenity-spa.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Hours</h4>
                  <p className="text-muted-foreground text-sm">Mon - Sun: 8:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 rounded-lg overflow-hidden h-64">
              <img
                src="/luxury-spa-treatment-room.jpg"
                alt="Spa Location"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Booking Form */}
          <div>
            <h3 className="font-serif text-2xl text-foreground mb-8">Send us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background h-32 resize-none"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent text-background rounded-lg font-semibold hover:bg-accent/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
