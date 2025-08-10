
import RoomCard from "../../RoomCard/RoomCard";
import WhatsAppWidget from "../../whatsapp-widget";
import { rooms } from "../../../assets/data";

export default function HomePage() {
  return (
    <div className="min-h-screen  max-w-6xl mx-auto">
            <div className="flex justify-between items-center ml-4 mb-6">
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">Guest House In F-7 Islamabad</h1>
              <a 
                href="/cities" 
                className="text-orange-500 hover:text-orange-600 font-medium text-sm md:text-base"
              >
                Explore More Cities →
              </a>
            </div>
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
