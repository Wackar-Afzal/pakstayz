"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppWidget() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("How can I help you?")
    const phone = "923008933591"
    const url = `https://wa.me/${phone}?text=${message}`
    window.open(url, "_blank")
  }

  return (
    <div
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 left-4 z-50 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full cursor-pointer shadow-lg flex items-center space-x-2 transition-colors"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="text-sm font-medium">How can I help you?</span>
    </div>
  )
}
