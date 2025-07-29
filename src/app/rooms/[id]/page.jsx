import { notFound } from "next/navigation"
import ContentRenderer from "@/Components/content-renderer"
import WhatsAppWidget from "@/components/whatsapp-widget"
import BookingSection from "@/Components/booking-section"
import RelatedRooms from "@/Components/related-rooms"
import { rooms } from "@/assets/data"



// Simulate async data fetching
async function getRoomById(id) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const roomId = Number.parseInt(id)
  if (isNaN(roomId)) {
    return null
  }

  return rooms.find((room) => room.id === roomId) || null
}

export default async function RoomPage({ params }) {
  const room = await getRoomById(params.id)

  if (!room) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">


      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <span>Home</span>
          <span className="mx-2">{">"}</span>
          <span>Rooms</span>
          <span className="mx-2">{">"}</span>
          <span className="text-gray-900">{room.name}</span>
        </nav>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          <ContentRenderer content={room.content} />
        </article>

        {/* Booking Section */}
        <BookingSection room={room} />

        {/* Related Rooms */}
        <RelatedRooms currentRoomId={room.id} />
      </main>

      <WhatsAppWidget />
    </div>
  )
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const room = await getRoomById(params.id)

  if (!room) {
    return {
      title: "Room Not Found",
    }
  }

  return {
    title: `${room.name} | Guest House Islamabad`,
    description: room.description,
  }
}

// Generate static params for static generation (optional)
export async function generateStaticParams() {
  return rooms.map((room) => ({
    id: room.id.toString(),
  }))
}
