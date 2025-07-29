
import ContentRenderer from "../../Components/content-renderer"
import WhatsAppWidget from "../../Components/whatsapp-widget"
import { contactData } from "../../assets/data"

// Simulate async data fetching
async function getContactData() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 600))
  return contactData
}

export default async function ContactPage() {
  const contact = await getContactData()

  return (
    <div className="min-h-screen bg-white">

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6 max-w-6xl mx-auto">
          <span>Home</span>
          <span className="mx-2">{">"}</span>
          <span className="text-gray-900">Contact Us</span>
        </nav>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <ContentRenderer content={contact.content} />
          </article>

          {/* Quick Action Buttons */}
          <div className="mt-12 bg-green-50 rounded-lg p-6 md:p-8 border border-green-200">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Contact</h3>
              <p className="text-gray-700 mb-6">Ready to book? Contact us directly for instant confirmation</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/923000466682"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md font-semibold transition-colors inline-flex items-center justify-center"
                >
                  📱 WhatsApp: 03000466682
                </a>
                <a
                  href="https://wa.me/923335767387"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md font-semibold transition-colors inline-flex items-center justify-center"
                >
                  📱 WhatsApp: 03335767387
                </a>
              </div>
            </div>
          </div>

          {/* Additional Info */}
    
        </div>
      </main>

      <WhatsAppWidget />
    </div>
  )
}

// Generate metadata for SEO
async function generateMetadata() {
  const contact = await getContactData()

  return {
    title: `${contact.title}`,
    description: contact.description,
    keywords: "contact guest house, Islamabad accommodation contact, F7 guest house booking, hotel contact",
  }
}
