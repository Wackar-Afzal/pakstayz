'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardMedia, Typography, Button, Chip, Box } from '@mui/material';
import { getActiveCities } from '../../assets/data';

export default function Cities() {
  const router = useRouter();
  const cities = getActiveCities();

  const handleCityClick = (citySlug) => {
    router.push(`/cities/${citySlug}`);
  };

  const handleGuestHouseClick = (citySlug, guestHouseSlug) => {
    router.push(`/cities/${citySlug}/guest-houses/${guestHouseSlug}`);
  };

  return (
    <div className="min-h-screen max-w-6xl mx-auto px-4 py-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Explore Our Guest Houses Across Pakistan
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover comfortable accommodations in the most beautiful cities of Pakistan. 
          Each location offers unique experiences and exceptional hospitality.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

              <Button
                variant="contained"
                onClick={() => handleCityClick(city.slug)}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white mb-3"
              >
                Explore {city.name}
              </Button>

              {city.guestHouses.length > 0 && (
                <div className="space-y-2">
                  <Typography variant="body2" className="font-semibold text-gray-700">
                    Guest Houses:
                  </Typography>
                  {city.guestHouses.map((guestHouse) => (
                    <div
                      key={guestHouse.id}
                      className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                      onClick={() => handleGuestHouseClick(city.slug, guestHouse.slug)}
                    >
                      <Typography variant="body2" className="font-medium text-gray-800">
                        {guestHouse.name}
                      </Typography>
                      <div className="flex items-center justify-between mt-2">
                        <Chip
                          label={`${guestHouse.rating}★`}
                          size="small"
                          className="bg-green-100 text-green-800"
                        />
                        <Typography variant="caption" className="text-gray-600">
                          {guestHouse.rooms.length} rooms
                        </Typography>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 