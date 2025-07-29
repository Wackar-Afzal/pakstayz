"use client"

import { Button } from "@mui/material"
import { Phone } from "lucide-react"



export default function BookingSection({ room }) {
  const handleWhatsAppBooking = () => {
    const message = encodeURIComponent(
      `Hi, I'm interested in booking the "${room.name}" room.\nRoom Price: ${room.price}`,
    )
    const phone = "923008933591"
    const url = `https://wa.me/${phone}?text=${message}`
    window.open(url, "_blank")
  }

  const handlePhoneCall = () => {
    window.open("tel:03000466682", "_self")
  }

  return (
    <div className="mt-12 bg-green-50 rounded-lg p-6 md:p-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Book This Room?</h3>
        <p className="text-gray-700 mb-6">Contact us now to check availability and make your reservation</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={handleWhatsAppBooking} className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
            Book via WhatsApp
          </Button>
          <Button
            onClick={handlePhoneCall}
            variant="outline"
            className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 bg-transparent"
          >
            <Phone className="w-4 h-4 mr-2" />
            Call Now: 03000466682
          </Button>
        </div>
      </div>
    </div>
  )
}
