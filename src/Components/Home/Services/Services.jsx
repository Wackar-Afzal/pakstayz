
import RoomCard from "@/components/RoomCard/RoomCard";
import WhatsAppWidget from "@/Components/whatsapp-widget";
import { rooms } from "@/assets/data";

export default function HomePage() {
  return (
    <div className="min-h-screen  max-w-6xl mx-auto">
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 ml-4">Guest House In F-7 Islamabad</h1>
      <main className="container mx-auto px-4 py-8">
        {/* Mobile layout */}
        <div className="md:hidden">
          <div className="space-y-4">
            {rooms.map((room, index) => (
              <RoomCard key={room.id} room={room} variant="featured" />
            ))}
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} variant="featured" />
            ))}
          </div>
        </div>
      </main>

      <WhatsAppWidget />
    </div>
  );
}
