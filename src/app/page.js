import { getActiveCities, getAllRooms } from "../assets/data";
import { Card, CardContent, CardMedia, Typography, Button, Chip, Box } from '@mui/material';
import Image from "next/image";
import Link from "next/link";
import WhatsAppWidget from "../Components/whatsapp-widget";

export default function Home() {
  const cities = getActiveCities();
  const allRooms = getAllRooms();

  return (
    <div className="min-h-screen bg-white max-w-6xl mx-auto ">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-800 to-gray-400 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to PakStayz
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Your premier destination for comfortable guest house accommodations across Pakistan's most beautiful cities
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cities/islamabad">
              <Button 
                variant="contained" 
                className="!bg-white !text-orange-600 hover:!bg-gray-100 px-8 py-3 text-lg"
              >
                Explore Islamabad
              </Button>
            </Link>
            <Link href="/cities/lahore">
              <Button 
                variant="outlined" 
                className="!border-white !text-white hover:!bg-white hover:!text-orange-600 px-8 py-3 text-lg"
              >
                Discover Lahore
              </Button>
            </Link>
            <Link href="/cities/karachi">
              <Button 
                variant="outlined" 
                className="!border-white !text-white hover:!bg-white hover:!text-orange-600 px-8 py-3 text-lg"
              >
                Visit Karachi
              </Button>
            </Link>
          </div>
        </div>
      </div>



      {/* Cities Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover comfortable accommodations in the most beautiful cities of Pakistan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cities.map((city) => (
              <Card key={city.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardMedia
                  component="img"
                  height="200"
                  image={`/${city.image}`}
                  alt={city.name}
                  className="object-cover"
                />
                <CardContent className="p-6">
                  <Typography variant="h5" component="h2" className="font-bold mb-3 text-gray-900">
                    {city.name}
                  </Typography>
                  
                  <Typography variant="body2" color="text.secondary" className="mb-4">
                    {city.description}
                  </Typography>

                  <div className="mb-4">
                    <Typography variant="body2" className="text-gray-600 mb-2">
                      Guest Houses: {city.guestHouses.length}
                    </Typography>
                    <Typography variant="body2" className="text-gray-600">
                      Total Rooms: {city.guestHouses.reduce((total, gh) => total + gh.rooms.length, 0)}
                    </Typography>
                  </div>

                  <Link href={`/cities/${city.slug}`}>
                    <Button
                      variant="contained"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                    >
                      Explore {city.name}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Rooms Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Rooms
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience comfort and luxury in our carefully designed accommodations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allRooms.slice(0, 6).map((room) => (
              <Card key={room.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={`/${room.img}`}
                    alt={room.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <Typography variant="h6" component="h3" className="font-bold mb-2 text-gray-900">
                    {room.name}
                  </Typography>
                  
                  {room.city && room.guestHouse && (
                    <Typography variant="body2" className="text-gray-500 mb-2">
                      {room.city.name} • {room.guestHouse.name}
                    </Typography>
                  )}
                  
                  <Typography variant="body2" className="text-gray-600 mb-3 line-clamp-2">
                    {room.description}
                  </Typography>

                  <div className="flex items-center justify-between mb-4">
                    <Typography variant="h6" className="font-bold text-orange-600">
                      {room.price}
                    </Typography>
                    <Chip
                      label={`${room.type}`}
                      size="small"
                      className="bg-orange-100 text-orange-800"
                    />
                  </div>

                  <Link href={`/rooms/${room.id}`}>
                    <Button
                      variant="outlined"
                      className="w-full border-orange-500 text-orange-500 hover:bg-orange-50"
                    >
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/rooms-pic">
              <Button
                variant="contained"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
              >
                View All Rooms
              </Button>
            </Link>
          </div>
        </div>
      </div>

            {/* About PakStayz Section */}
            <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About PakStayz
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are dedicated to providing exceptional guest house experiences across Pakistan's most vibrant cities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Accommodations</h3>
              <p className="text-gray-600">
                Experience comfort and luxury in our carefully selected guest houses with modern amenities and exceptional service.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Prime Locations</h3>
              <p className="text-gray-600">
                Strategically located in the heart of each city, providing easy access to major attractions and business districts.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock customer service ensuring your stay is comfortable and hassle-free from check-in to check-out.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="py-16 bg-gray-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Book Your Stay?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to reserve your comfortable accommodation in any of our cities
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button 
                variant="contained" 
                className="!bg-white !text-orange-600 hover:!bg-gray-100 px-8 py-3 text-lg"
              >
                Contact Us
              </Button>
            </Link>
            <a href="https://wa.me/923008933591" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outlined" 
                className="!border-white !text-white hover:!bg-white hover:!text-orange-600 px-8 py-3 text-lg"
              >
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
      <WhatsAppWidget />
    </div>
  );
}
