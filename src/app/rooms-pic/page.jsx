
import WhatsAppWidget from "../../Components/whatsapp-widget"
import { roomsGalleryData } from "../../assets/data"
import Image from "next/image"

// Simulate async data fetching
async function getRoomsGalleryData() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800))
  return roomsGalleryData
}

export default async function RoomsGalleryPage() {
  const gallery = await getRoomsGalleryData()

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <span>Home</span>
          <span className="mx-2">{">"}</span>
          <span className="text-gray-900">Rooms Pictures</span>
        </nav>
        {/* <ImageGallery images ={gallery.images}/> */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {gallery.images.map((image) => (
                  <div
                    key={image.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                  
                  >
                    <div className="relative h-48">
                      <Image
                        src={`/${image.src}`}
                        alt={image.alt}
                        fill
                        className="object-cover hover:scale-105 transition-transform"
                      />
                    </div>

                  </div>
                ))}
              </div>
        {/* Content */}
        {/* <article className="prose prose-lg max-w-none mb-12">
          <ContentRenderer content={gallery.content} />
        </article> */}
      </main>

      <WhatsAppWidget />
    </div>
  )
}

// Generate metadata for SEO
 async function generateMetadata() {
  const gallery = await getRoomsGalleryData()

  return {
    title: `${gallery.title}`,
    description: gallery.description,
    keywords: "guest house rooms, Islamabad accommodation photos, F7 rooms pictures, hotel gallery",
  }
}
