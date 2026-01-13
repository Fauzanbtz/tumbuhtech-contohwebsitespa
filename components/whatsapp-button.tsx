"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  const openWhatsApp = () => {
    const phoneNumber = "6236112345567" // Replace with actual WhatsApp number
    const message = encodeURIComponent(
      "Hi Episode Kuta Bali, I would like to book a treatment. Can you provide available times?",
    )
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors z-40 flex items-center gap-2 animate-pulse"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="text-sm font-semibold hidden sm:inline">Chat</span>
    </button>
  )
}
