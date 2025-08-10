import GuestHouseDetail from "../../../../../Components/GuestHouseDetail/GuestHouseDetail";
import WhatsAppWidget from "../../../../../Components/whatsapp-widget";
import { getGuestHouseBySlug, getCityBySlug } from "../../../../../assets/data";

export default function GuestHousePage({ params }) {
  const city = getCityBySlug(params.citySlug);
  const guestHouse = getGuestHouseBySlug(params.citySlug, params.guestHouseSlug);

  if (!guestHouse || !city) {
    return (
      <div className="min-h-screen flex items-center justify-center max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Guest House Not Found</h1>
          <a href={`/cities/${params.citySlug}`} className="text-orange-500 hover:text-orange-600">
            Back to {city?.name || 'City'}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white max-w-6xl mx-auto">
      <main className="container mx-auto px-4 py-8">
        <GuestHouseDetail 
          citySlug={params.citySlug} 
          guestHouseSlug={params.guestHouseSlug} 
        />
      </main>
      <WhatsAppWidget />
    </div>
  );
}

export async function generateMetadata({ params }) {
  const city = getCityBySlug(params.citySlug);
  const guestHouse = getGuestHouseBySlug(params.citySlug, params.guestHouseSlug);

  if (!guestHouse || !city) {
    return {
      title: "Guest House Not Found",
    };
  }

  return {
    title: `${guestHouse.name} - ${city.name} | PakStayz`,
    description: `${guestHouse.description} Located in ${city.name}. Book your stay today with modern amenities and excellent service.`,
  };
}

export async function generateStaticParams() {
  // This would be dynamic based on your data
  return [
    {
      citySlug: "islamabad",
      guestHouseSlug: "guest-house-japanese-park"
    },
    {
      citySlug: "islamabad",
      guestHouseSlug: "f7-jinnah-super-guest-house"
    },
    {
      citySlug: "islamabad",
      guestHouseSlug: "budget-guest-house-faisal-mosque"
    },
    // Add more as you add more guest houses
  ];
} 