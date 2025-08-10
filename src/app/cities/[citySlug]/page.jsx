import CityDetail from "../../../Components/CityDetail/CityDetail";
import WhatsAppWidget from "../../../Components/whatsapp-widget";
import { getCityBySlug } from "../../../assets/data";

export default function CityPage({ params }) {
  const city = getCityBySlug(params.citySlug);

  if (!city) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">City Not Found</h1>
          <a href="/cities" className="text-orange-500 hover:text-orange-600">
            Back to Cities
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white max-w-6xl mx-auto">
      <main className="container mx-auto px-4 py-8">
        <CityDetail citySlug={params.citySlug} />
      </main>
      <WhatsAppWidget />
    </div>
  );
}

export async function generateMetadata({ params }) {
  const city = getCityBySlug(params.citySlug);

  if (!city) {
    return {
      title: "City Not Found",
    };
  }

  return {
    title: `${city.name} - Guest Houses & Rooms | PakStayz`,
    description: `Explore guest houses and rooms in ${city.name}. Find comfortable accommodations with modern amenities and excellent service.`,
  };
}

export async function generateStaticParams() {
  // This would be dynamic based on your cities data
  return [
    { citySlug: "islamabad" },
    // Add more cities as they become active
  ];
} 