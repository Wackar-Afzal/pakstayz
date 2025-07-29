import ContentRenderer from "../../Components/content-renderer"
import WhatsAppWidget from "../../Components/whatsapp-widget"
// import BookingCTA from "@/Components/booking-cta"
import { facilitiesData } from "../../assets/data"

// Simulate async data fetching
async function getFacilitiesData() {
  // Simulate network delay
  return facilitiesData
}

export default async function FacilitiesPage() {
  const facilities = await getFacilitiesData()

  return (
    <div className="min-h-screen bg-white">

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6 max-w-6xl mx-auto">
          <span>Home</span>
          <span className="mx-2">{">"}</span>
          <span className="text-gray-900">Facilities</span>
        </nav>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          <ContentRenderer content={facilities.content} />
        </article>

        {/* Call to Action */}
        {/* <BookingCTA /> */}

        {/* Contact Information */}
        <div className="mt-12 bg-gray-50 rounded-lg p-6 md:p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Have Questions About Our Facilities?</h3>
            <p className="text-gray-700 mb-6">
              Our friendly staff is available 24/7 to answer any questions about our amenities and services
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                <p className="text-green-600 font-semibold">03000466682</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">WhatsApp</h4>
                <p className="text-green-600 font-semibold">Available 24/7</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                <p className="text-gray-600">F-7 Islamabad, Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <WhatsAppWidget />
    </div>
  )
}

// Generate metadata for SEO
export async function generateMetadata() {
  const facilities = await getFacilitiesData()

  return {
    title: `${facilities.title} | Guest House Islamabad`,
    description: facilities.description,
    keywords: "guest house facilities, Islamabad accommodation, hotel amenities, F7 guest house",
  }
}
