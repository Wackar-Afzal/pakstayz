import Cities from "../../Components/Cities/Cities";
import WhatsAppWidget from "../../Components/whatsapp-widget";

export default function CitiesPage() {
  return (
    <div className="min-h-screen bg-white max-w-6xl mx-auto">
      <main className="container mx-auto px-4 py-8">
        <Cities />
      </main>
      <WhatsAppWidget />
    </div>
  );
}

export const metadata = {
  title: "Cities - Guest Houses Across Pakistan | PakStayz",
  description: "Explore guest houses in different cities across Pakistan. Find comfortable accommodations in Islamabad, Lahore, Karachi and more.",
}; 