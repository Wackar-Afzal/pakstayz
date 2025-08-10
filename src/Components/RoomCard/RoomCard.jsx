'use client';
import Image from "next/image"
import { Button } from "@mui/material"
import { Card, CardContent } from "@mui/material"

import { useRouter } from 'next/navigation';



export default function RoomCard({ room, variant = "default", className = "" }) {
  const router = useRouter()
  const handleWhatsAppBooking = (room) => {
    const message = encodeURIComponent(
      `Hi, I'm interested in booking the "${room.name}" room.\nRoom Price: ${room.price}`,
    )
    const phone = "923008933591"
    const url = `https://wa.me/${phone}?text=${message}`
    window.open(url, "_blank")
  }

  const handleReadMore = () => {
    const url = `/rooms/${room.id}`
    router.push(url)
  }

  if (variant === "featured") {
    return (
      <Card className={`overflow-hidden ${className} ` }>
        <CardContent className="p-0">
          <div className="relative w-full h-64">
            <Image
              src={`/${room.img}`}
              alt={room.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-3">{room.name}</h3>
            <p className="text-gray-600 mb-4 line-clamp-3">{room.description}</p>
            <Button onClick={handleReadMore} variant="outlined" className="bg-orange-500 hover:bg-orange-600 text-white ">
              Read More
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (variant === "promotional") {
    return (
      <Card className={`overflow-hidden ${className}`}>
        <CardContent className="p-0">
          <div className="bg-gradient-to-r from-cyan-400 to-yellow-400 p-4">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className=" text-white px-2 py-1 rounded text-xs">AVAILABLE</span>
                <h3 className="text-lg font-bold mt-2 text-gray-900">
                  ISLAMABAD
                  <br />
                  GUEST HOUSE
                </h3>
                <p className="text-sm text-gray-700">
                  Call and book our luxurious
                  <br />
                  and comfortable guest house
                  <br />
                  for the lowest rental
                </p>
              </div>
              <div className="relative w-20 h-16">
                <Image src={`/${room.img}`} alt={room.name} fill className="object-cover rounded" />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="bg-yellow-400 px-3 py-1 rounded">
                <span className="font-bold">03000466682</span>
              </div>
              <Button
                onClick={() => handleWhatsAppBooking(room)}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                BOOK NOW
              </Button>
            </div>
          </div>
          <div className="p-4">
            <h4 className="font-bold mb-2">{room.name}</h4>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{room.description}</p>
            <Button
              onClick={handleReadMore}
              variant="outline"
              className="text-orange-500 border-orange-500 hover:bg-orange-50 bg-transparent"
            >
              Read More
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={`overflow-hidden ${className}`}>
      <CardContent className="p-0">
        <div className="relative h-40">
          <Image src={`/${room.img}`} alt={room.name} fill className="object-cover" />
        </div>
        <div className="p-4">
          <h3 className="font-semibold mb-1 line-clamp-1">{room.name}</h3>
          {room.city && room.guestHouse && (
            <p className="text-gray-400 mb-1 text-xs">
              {room.city} • {room.guestHouse}
            </p>
          )}
          <p className="text-gray-500 mb-2 text-sm">{room.price}</p>
          <Button
            onClick={() => handleWhatsAppBooking(room)}
            size="sm"
            className="!bg-blue-500 hover:!bg-blue-700 !text-white w-full"
          >
            Book Now
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
