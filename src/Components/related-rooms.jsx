import Link from "next/link"
import Image from "next/image"
import { Button } from "@mui/material"
import { rooms } from "../assets/data"

export default function RelatedRooms({ currentRoomId }) {
  const relatedRooms = rooms.filter((room) => room.id !== currentRoomId).slice(0, 3)

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Other Available Rooms</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedRooms.map((room) => (
          <div
            key={room.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48">
              <Image src={`/${room.img}`} alt={room.name} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h4 className="font-semibold mb-2 line-clamp-2">{room.name}</h4>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{room.description}</p>
              <Link href={`/rooms/${room.id}`}>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  View Details
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
