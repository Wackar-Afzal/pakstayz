'use client';
import { useState } from 'react';
import { Card, CardContent, Typography, Button, TextField, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMore, Add, City, Home, Bed } from 'lucide-react';

export default function DataManager() {
  const [activeTab, setActiveTab] = useState('cities');

  const renderCityForm = () => (
    <Card className="mb-6 ">
      <CardContent>
        <Typography variant="h6" className="font-bold mb-4 flex items-center">
          <City className="w-5 h-5 mr-2" />
          Add New City
        </Typography>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextField
            label="City Name"
            placeholder="e.g., Lahore"
            fullWidth
            size="small"
          />
          <TextField
            label="City Slug"
            placeholder="e.g., lahore"
            fullWidth
            size="small"
          />
          <TextField
            label="Description"
            placeholder="Brief description of the city"
            fullWidth
            multiline
            rows={2}
            size="small"
          />
          <TextField
            label="Image"
            placeholder="e.g., lahore-bg.jpg"
            fullWidth
            size="small"
          />
        </div>
        
        <Box className="mt-4">
          <Button variant="contained" className="bg-orange-500 hover:bg-orange-600">
            <Add className="w-4 h-4 mr-2" />
            Add City
          </Button>
        </Box>
      </CardContent>
    </Card>
  );

  const renderGuestHouseForm = () => (
    <Card className="mb-6">
      <CardContent>
        <Typography variant="h6" className="font-bold mb-4 flex items-center">
          <Home className="w-5 h-5 mr-2" />
          Add New Guest House
        </Typography>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextField
            label="Guest House Name"
            placeholder="e.g., Luxury Guest House"
            fullWidth
            size="small"
          />
          <TextField
            label="Slug"
            placeholder="e.g., luxury-guest-house"
            fullWidth
            size="small"
          />
          <TextField
            label="City"
            select
            fullWidth
            size="small"
            defaultValue=""
          >
            <option value="">Select City</option>
            <option value="islamabad">Islamabad</option>
            <option value="lahore">Lahore</option>
            <option value="karachi">Karachi</option>
          </TextField>
          <TextField
            label="Address"
            placeholder="e.g., Main Street, City Center"
            fullWidth
            size="small"
          />
          <TextField
            label="Phone"
            placeholder="e.g., 03001234567"
            fullWidth
            size="small"
          />
          <TextField
            label="Email"
            placeholder="e.g., info@guesthouse.com"
            fullWidth
            size="small"
          />
          <TextField
            label="Rating"
            placeholder="e.g., 4.5"
            fullWidth
            size="small"
            type="number"
            inputProps={{ step: 0.1, min: 0, max: 5 }}
          />
          <TextField
            label="Description"
            placeholder="Brief description of the guest house"
            fullWidth
            multiline
            rows={2}
            size="small"
          />
        </div>
        
        <Box className="mt-4">
          <Button variant="contained" className="bg-orange-500 hover:bg-orange-600">
            <Add className="w-4 h-4 mr-2" />
            Add Guest House
          </Button>
        </Box>
      </CardContent>
    </Card>
  );

  const renderRoomForm = () => (
    <Card className="mb-6">
      <CardContent>
        <Typography variant="h6" className="font-bold mb-4 flex items-center">
          <Bed className="w-5 h-5 mr-2" />
          Add New Room
        </Typography>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextField
            label="Room Name"
            placeholder="e.g., Deluxe Suite"
            fullWidth
            size="small"
          />
          <TextField
            label="Slug"
            placeholder="e.g., deluxe-suite"
            fullWidth
            size="small"
          />
          <TextField
            label="Guest House"
            select
            fullWidth
            size="small"
            defaultValue=""
          >
            <option value="">Select Guest House</option>
            <option value="guest-house-japanese-park">Guest House Near Japanese Park</option>
            <option value="f7-jinnah-super-guest-house">F7 Jinnah Super Guest House</option>
            <option value="budget-guest-house-faisal-mosque">Budget Guest House Near Faisal Mosque</option>
          </TextField>
          <TextField
            label="Room Type"
            placeholder="e.g., Standard, Deluxe, Suite"
            fullWidth
            size="small"
          />
          <TextField
            label="Price"
            placeholder="e.g., Contact for Price"
            fullWidth
            size="small"
          />
          <TextField
            label="Capacity"
            placeholder="e.g., 2"
            fullWidth
            size="small"
            type="number"
            inputProps={{ min: 1, max: 10 }}
          />
          <TextField
            label="Main Image"
            placeholder="e.g., room1.0.jpg"
            fullWidth
            size="small"
          />
          <TextField
            label="Description"
            placeholder="Brief description of the room"
            fullWidth
            multiline
            rows={2}
            size="small"
          />
        </div>
        
        <Box className="mt-4">
          <Button variant="contained" className="bg-orange-500 hover:bg-orange-600">
            <Add className="w-4 h-4 mr-2" />
            Add Room
          </Button>
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Data Management Guide</h1>
        <p className="text-gray-600">
          This guide shows you how to add new cities, guest houses, and rooms to your app.
          All data is managed through the <code className="bg-gray-100 px-2 py-1 rounded">src/assets/data.js</code> file.
        </p>
      </div>

      <div className="mb-6">
        <div className="flex space-x-2">
          <Button
            variant={activeTab === 'cities' ? 'contained' : 'outlined'}
            onClick={() => setActiveTab('cities')}
            className={activeTab === 'cities' ? 'bg-orange-500' : ''}
          >
            Cities
          </Button>
          <Button
            variant={activeTab === 'guestHouses' ? 'contained' : 'outlined'}
            onClick={() => setActiveTab('guestHouses')}
            className={activeTab === 'guestHouses' ? 'bg-orange-500' : ''}
          >
            Guest Houses
          </Button>
          <Button
            variant={activeTab === 'rooms' ? 'contained' : 'outlined'}
            onClick={() => setActiveTab('rooms')}
            className={activeTab === 'rooms' ? 'bg-orange-500' : ''}
          >
            Rooms
          </Button>
        </div>
      </div>

      {activeTab === 'cities' && renderCityForm()}
      {activeTab === 'guestHouses' && renderGuestHouseForm()}
      {activeTab === 'rooms' && renderRoomForm()}

      <Card className="mb-6">
        <CardContent>
          <Typography variant="h6" className="font-bold mb-4">
            How to Add New Data
          </Typography>
          
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="subtitle1" className="font-semibold">
                Adding a New City
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="space-y-2 text-sm">
                <p>1. Open <code className="bg-gray-100 px-1 rounded">src/assets/data.js</code></p>
                <p>2. Find the <code className="bg-gray-100 px-1 rounded">cities</code> array</p>
                <p>3. Add a new city object with the required fields:</p>
                <pre className="bg-gray-100 p-3 rounded text-xs overflow-x-auto">
{`{
  id: 4,
  name: "New City Name",
  slug: "new-city-slug",
  description: "City description",
  image: "city-image.jpg",
  isActive: true,
  guestHouses: []
}`}
                </pre>
                <p>4. Set <code className="bg-gray-100 px-1 rounded">isActive: true</code> to make it visible</p>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="subtitle1" className="font-semibold">
                Adding a New Guest House
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="space-y-2 text-sm">
                <p>1. Find the city where you want to add the guest house</p>
                <p>2. Add a new guest house object to the <code className="bg-gray-100 px-1 rounded">guestHouses</code> array:</p>
                <pre className="bg-gray-100 p-3 rounded text-xs overflow-x-auto">
{`{
  id: 4,
  name: "New Guest House Name",
  slug: "new-guest-house-slug",
  description: "Guest house description",
  address: "Full address",
  phone: "Phone number",
  whatsapp: "WhatsApp number",
  email: "email@example.com",
  rating: 4.5,
  isActive: true,
  facilities: ["Facility 1", "Facility 2"],
  rooms: []
}`}
                </pre>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="subtitle1" className="font-semibold">
                Adding a New Room
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="space-y-2 text-sm">
                <p>1. Find the guest house where you want to add the room</p>
                <p>2. Add a new room object to the <code className="bg-gray-100 px-1 rounded">rooms</code> array:</p>
                <pre className="bg-gray-100 p-3 rounded text-xs overflow-x-auto">
{`{
  id: 4,
  name: "Room Name",
  price: "Price or Contact for Price",
  img: "room-image.jpg",
  slug: "room-slug",
  description: "Room description",
  type: "Standard/Deluxe/Suite",
  capacity: 2,
  amenities: ["Amenity 1", "Amenity 2"],
  images: ["image1.jpg", "image2.jpg"],
  content: [/* Content array for detailed page */]
}`}
                </pre>
              </div>
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h6" className="font-bold mb-4">
            Important Notes
          </Typography>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Always use unique IDs for cities, guest houses, and rooms</li>
            <li>• Use descriptive slugs that are URL-friendly (lowercase, hyphens instead of spaces)</li>
            <li>• Set <code className="bg-gray-100 px-1 rounded">isActive: true</code> to make items visible</li>
            <li>• Images should be placed in the <code className="bg-gray-100 px-1 rounded">public</code> folder</li>
            <li>• After making changes, restart your development server</li>
            <li>• The app automatically generates routes based on your data structure</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
} 