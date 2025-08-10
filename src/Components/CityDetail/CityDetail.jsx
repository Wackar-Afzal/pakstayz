'use client';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardMedia, Typography, Button, Chip, Box, Divider } from '@mui/material';
import { getCityBySlug } from '../../assets/data';
import RoomCard from '../RoomCard/RoomCard';

export default function CityDetail({ citySlug }) {
  const router = useRouter();
  const city = getCityBySlug(citySlug);

  if (!city) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">City Not Found</h1>
          <Button onClick={() => router.push('/cities')} variant="contained">
            Back to Cities
          </Button>
        </div>
      </div>
    );
  }

  const handleGuestHouseClick = (guestHouseSlug) => {
    router.push(`/cities/${citySlug}/guest-houses/${guestHouseSlug}`);
  };

  const handleRoomClick = (roomId) => {
    router.push(`/rooms/${roomId}`);
  };

  return (
    <div className="min-h-screen max-w-6xl mx-auto px-4 py-8">
      {/* City Header */}
      <div className="text-center mb-12">
        <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
          <img
            src={`/${city.image}`}
            alt={city.name}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0  bg-opacity-40 flex items-center justify-center bg-[url(${city.image})] bg-cover bg-center`}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-transparent"></div>

            <div className="text-white text-center absolute">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{city.name}</h1>
              <p className="text-xl md:text-2xl max-w-2xl mx-auto">{city.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* City Stats */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="text-center p-6">
          <Typography variant="h4" className="font-bold text-orange-500 mb-2">
            {city.guestHouses.length}
          </Typography>
          <Typography variant="body1" className="text-gray-600">
            Guest Houses
          </Typography>
        </Card>
        <Card className="text-center p-6">
          <Typography variant="h4" className="font-bold text-orange-500 mb-2">
            {city.guestHouses.reduce((total, gh) => total + gh.rooms.length, 0)}
          </Typography>
          <Typography variant="body1" className="text-gray-600">
            Total Rooms
          </Typography>
        </Card>
        <Card className="text-center p-6">
          <Typography variant="h4" className="font-bold text-orange-500 mb-2">
            {city.guestHouses.reduce((total, gh) => total + gh.rating, 0) / city.guestHouses.length || 0}
          </Typography>
          <Typography variant="body1" className="text-gray-600">
            Average Rating
          </Typography>
        </Card>
      </div> */}

      {/* Guest Houses */}
      <div className="my-12">
        <Typography variant="h3" className="font-bold text-gray-900 my-8 text-center">
          Guest Houses in {city.name}
        </Typography>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
          {city.guestHouses.map((guestHouse) => (
            <Card key={guestHouse.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardMedia
                component="img"
                height="250"
                image={`/${guestHouse.rooms[0]?.img || 'room1.0.jpg'}`}
                alt={guestHouse.name}
                className="object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Typography variant="h5" component="h2" className="font-bold text-gray-900">
                    {guestHouse.name}
                  </Typography>
                  <Chip
                    label={`${guestHouse.rating}★`}
                    className="bg-green-100 text-green-800"
                  />
                </div>

                <Typography variant="body2" color="text.secondary" className="mb-4">
                  {guestHouse.description}
                </Typography>

                <div className="mb-4">
                  <Typography variant="body2" className="text-gray-600 mb-2">
                    📍 {guestHouse.address}
                  </Typography>
                  <Typography variant="body2" className="text-gray-600 mb-2">
                    📞 {guestHouse.phone}
                  </Typography>
                  <Typography variant="body2" className="text-gray-600">
                    🏠 {guestHouse.rooms.length} rooms available
                  </Typography>
                </div>

                <div className="mb-4">
                  <Typography variant="body2" className="font-semibold text-gray-700 mb-2">
                    Facilities:
                  </Typography>
                  <div className="flex flex-wrap gap-2">
                    {guestHouse.facilities.slice(0, 6).map((facility, index) => (
                      <Chip
                        key={index}
                        label={facility}
                        size="small"
                        className="bg-blue-100 text-blue-800"
                      />
                    ))}
                  </div>
                </div>

                <Button
                  variant="contained"
                  onClick={() => handleGuestHouseClick(guestHouse.slug)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white mb-4"
                >
                  View Guest House
                </Button>

                {/* Preview of rooms */}
                <div className="space-y-3">
                  <Typography variant="body2" className="font-semibold text-gray-700">
                    Available Rooms:
                  </Typography>
                  {guestHouse.rooms.slice(0, 3).map((room) => (
                    <div
                      key={room.id}
                      className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                      onClick={() => handleRoomClick(room.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <Typography variant="body2" className="font-medium text-gray-800">
                            {room.name}
                          </Typography>
                          <Typography variant="caption" className="text-gray-600">
                            {room.type} • {room.capacity} guests
                          </Typography>
                        </div>
                        <Typography variant="body2" className="font-semibold text-orange-600">
                          {room.price}
                        </Typography>
                      </div>
                    </div>
                  ))}
                  {guestHouse.rooms.length > 3 && (
                    <Typography variant="body2" className="text-center text-gray-500">
                      +{guestHouse.rooms.length - 3} more rooms
                    </Typography>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* All Rooms in City */}
      <div>
        <Typography variant="h3" className="font-bold text-gray-900 mb-8 text-center">
          All Rooms in {city.name}
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {city.guestHouses.map((guestHouse) =>
            guestHouse.rooms.map((room) => (
              <RoomCard
                key={room.id}
                room={{
                  ...room,
                  guestHouse: guestHouse.name,
                  city: city.name
                }}
                variant="default"
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
} 