'use client';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardMedia, Typography, Button, Chip, Box, Divider } from '@mui/material';
import { getGuestHouseBySlug, getCityBySlug } from '../../assets/data';
import RoomCard from '../RoomCard/RoomCard';

export default function GuestHouseDetail({ citySlug, guestHouseSlug }) {
  const router = useRouter();
  const city = getCityBySlug(citySlug);
  const guestHouse = getGuestHouseBySlug(citySlug, guestHouseSlug);

  if (!guestHouse || !city) {
    return (
      <div className="min-h-screen flex items-center justify-center ">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Guest House Not Found</h1>
          <Button onClick={() => router.push(`/cities/${citySlug}`)} variant="contained" className="mr-2">
            Back to {city?.name || 'City'}
          </Button>
          <Button onClick={() => router.push('/cities')} variant="outlined">
            All Cities
          </Button>
        </div>
      </div>
    );
  }

  const handleRoomClick = (roomId) => {
    router.push(`/rooms/${roomId}`);
  };

  const handleBackToCity = () => {
    router.push(`/cities/${citySlug}`);
  };

  return (
    <div className="min-h-screen max-w-6xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-6">
        <button onClick={() => router.push('/cities')} className="hover:text-orange-500">
          Cities
        </button>
        <span className="mx-2">{">"}</span>
        <button onClick={handleBackToCity} className="hover:text-orange-500">
          {city.name}
        </button>
        <span className="mx-2">{">"}</span>
        <span className="text-gray-900">{guestHouse.name}</span>
      </nav>

      {/* Guest House Header */}
      <div className="text-center mb-12">
        <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
          <img
            src={`/${guestHouse.rooms[0]?.img || 'room1.0.jpg'}`}
            alt={guestHouse.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-white text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{guestHouse.name}</h1>
              <p className="text-xl md:text-2xl max-w-2xl mx-auto">{guestHouse.description}</p>
              <div className="flex items-center justify-center mt-4">
                <Chip
                  label={`${guestHouse.rating}★ Rating`}
                  className="bg-green-100 text-green-800 text-lg px-4 py-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Guest House Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Main Info */}
        <div className="lg:col-span-2">
          <Card className="p-6">
            <Typography variant="h4" className="font-bold text-gray-900 mb-4">
              About {guestHouse.name}
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-6">
              {guestHouse.description}
            </Typography>

            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-2xl mr-3">📍</span>
                <div>
                  <Typography variant="body2" className="font-semibold text-gray-700">
                    Address
                  </Typography>
                  <Typography variant="body2" className="text-gray-600">
                    {guestHouse.address}
                  </Typography>
                </div>
              </div>

              <div className="flex items-center">
                <span className="text-2xl mr-3">📞</span>
                <div>
                  <Typography variant="body2" className="font-semibold text-gray-700">
                    Phone
                  </Typography>
                  <Typography variant="body2" className="text-gray-600">
                    {guestHouse.phone}
                  </Typography>
                </div>
              </div>

              <div className="flex items-center">
                <span className="text-2xl mr-3">📧</span>
                <div>
                  <Typography variant="body2" className="font-semibold text-gray-700">
                    Email
                  </Typography>
                  <Typography variant="body2" className="text-gray-600">
                    {guestHouse.email}
                  </Typography>
                </div>
              </div>

              <div className="flex items-center">
                <span className="text-2xl mr-3">🏠</span>
                <div>
                  <Typography variant="body2" className="font-semibold text-gray-700">
                    Rooms Available
                  </Typography>
                  <Typography variant="body2" className="text-gray-600">
                    {guestHouse.rooms.length} rooms
                  </Typography>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Contact & Quick Actions */}
        <div>
          <Card className="p-6 sticky top-4">
            <Typography variant="h5" className="font-bold text-gray-900 mb-4">
              Quick Actions
            </Typography>

            <div className="space-y-3">
              <Button
                variant="contained"
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                onClick={() => {
                  const message = encodeURIComponent(
                    `Hi, I'm interested in booking at "${guestHouse.name}" in ${city.name}.\n\nGuest House: ${guestHouse.name}\nAddress: ${guestHouse.address}\nPhone: ${guestHouse.phone}`
                  );
                  const url = `https://wa.me/${guestHouse.whatsapp}?text=${message}`;
                  window.open(url, "_blank");
                }}
              >
                📱 WhatsApp
              </Button>

              <Button
                variant="outlined"
                className="w-full border-orange-500 text-orange-500 hover:bg-orange-50"
                onClick={() => {
                  window.location.href = `tel:${guestHouse.phone}`;
                }}
              >
                📞 Call Now
              </Button>

              <Button
                variant="outlined"
                className="w-full border-blue-500 text-blue-500 hover:bg-blue-50"
                onClick={() => {
                  window.location.href = `mailto:${guestHouse.email}`;
                }}
              >
                📧 Email
              </Button>
            </div>

            <Divider className="my-4" />

            <Typography variant="h6" className="font-bold text-gray-900 mb-3">
              Location
            </Typography>
            <Typography variant="body2" className="text-gray-600 mb-3">
              {guestHouse.address}
            </Typography>
            <Button
              variant="outlined"
              className="w-full"
              onClick={() => {
                const address = encodeURIComponent(guestHouse.address);
                window.open(`https://www.google.com/maps/search/${address}`, '_blank');
              }}
            >
              🗺️ View on Map
            </Button>
          </Card>
        </div>
      </div>

      {/* Facilities */}
      <div className="mb-12">
        <Typography variant="h3" className="font-bold text-gray-900 mb-8 text-center">
          Facilities & Amenities
        </Typography>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {guestHouse.facilities.map((facility, index) => (
            <Card key={index} className="p-4 text-center hover:shadow-md transition-shadow">
              <Typography variant="body1" className="font-medium text-gray-800">
                {facility}
              </Typography>
            </Card>
          ))}
        </div>
      </div>

      {/* Rooms */}
      <div>
        <Typography variant="h3" className="font-bold text-gray-900 mb-8 text-center">
          Available Rooms
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guestHouse.rooms.map((room) => (
            <RoomCard
              key={room.id}
              room={{
                ...room,
                guestHouse: guestHouse.name,
                city: city.name
              }}
              variant="featured"
            />
          ))}
        </div>
      </div>

      {/* Back to City Button */}
      <div className="text-center mt-12">
        <Button
          variant="outlined"
          onClick={handleBackToCity}
          className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3"
        >
          ← Back to {city.name}
        </Button>
      </div>
    </div>
  );
} 