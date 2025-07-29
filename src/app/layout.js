import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import Navbar from "../Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import ToastC from "@/Components/toast/Toast";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata = {
  title: "Pakstayz",
  description: "Welcome to Pakstayz— your trusted destination for affordable, comfortable, and secure room bookings in the heart of the capital city. Perfect for business travelers, families, and tourists seeking a peaceful stay with all essential amenities.",
  keywords: [
    'Guest house in Islamabad',
    'Room booking Islamabad',
    'Pakstayz Guest House ISB',
    'Affordable guest house Islamabad',
    'Family rooms in Islamabad',
    'Best guest house near Blue Area',
    'Islamabad hotel alternative',
    'Private room rental Islamabad',
    'Comfortable guest house in ISB',
    'Capital Guest House near G-8',
    'Secure guest house Islamabad',
    'Guest house with AC and Wi-Fi',
    'Islamabad stay for tourists',
    'Budget rooms in Islamabad',
    'Long-term guest house rental ISB',
    'Daily room booking Islamabad',
    'Corporate guest house Islamabad',
    'The Capital Guest House rooms',
    'Islamabad guest house for families',
    'Short stay guest house Islamabad',
    'Pakstayz'
  ],
  openGraph: {
    title: "Pakstayz",
    description: "Book your stay at Pakstayz — offering comfortable, affordable, and secure accommodations for business and leisure travelers. Located centrally in Islamabad, close to key locations and transport.",
    url: "https://www.facebook.com/Pakstayz",
    type: "website",
    images: [
      {
        url: "https://isb-guest-house.vercel.app/logo.png", // Update if you have a proper logo or banner
        width: 1200,
        height: 630,
        alt: "Pakstayz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pakstayz",
    description: "Comfortable and affordable rooms available in the heart of Islamabad. Book now at The Capital Guest House for a pleasant and secure stay.",
    image: "https://pakstayz/logo.png", // Same image or logo as OG
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <AppRouterCacheProvider>
            <Navbar/>
          {children}
          <Footer/>
          </AppRouterCacheProvider>
          <ToastC/>
      </body>
    </html>
  );
}

