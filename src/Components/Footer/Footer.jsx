"use client"
import { MapPin, Phone, Mail, Facebook } from "lucide-react";
import {footerData} from "../../assets/data"; // adjust path if needed

export default function Footer() {
  const {
    location,
    phone,
    email,
    facebook,
    whatsappLink,
    footerNote,
    copyright
  } = footerData;

  return (
    <footer className="bg-gradient-to-b from-[#73b5c6] to-[#73b5c6] py-10 pb-[4rem] md:pb-18 text-black max-w-6xl mx-auto">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="space-y-6"
        >
          <div className="flex justify-between items-center gap-2">
            <h2 className="text-2xl font-bold">Get In Touch</h2>
            <div
              className="flex flex-col items-end justify-between"
            >
              <div className="flex gap-4">
                <a
                  target="_blank"
                  href={facebook.link}
                  className="bg-white p-2 rounded-xl"
                >
                  <Facebook className="text-[#73b5c6]" size={25} />
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {/* Location */}
            <div className="flex items-center gap-4">
              <a
                href={location.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4"
              >
                <div className="bg-white/40 p-3 rounded-xl">
                  <MapPin className="text-[#73b5c6]" size={20} />
                </div>
                <p>{location.name}</p>
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <a href={`tel:${phone.tel}`} className="flex items-center gap-4">
                <div className="bg-white/40 p-3 rounded-xl">
                  <Phone className="text-[#73b5c6]" size={20} />
                </div>
                <p>{phone.number}</p>
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <a href={`mailto:${email}`} className="flex items-center gap-4">
                <div className="bg-white/40 p-3 rounded-xl">
                  <Mail className="text-[#73b5c6]" size={20} />
                </div>
                <p>{email}</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-black">
        <p>{footerNote}</p>
        <p className="mt-4">{copyright}</p>
      </div>

      <a
        href={whatsappLink}
        className="fixed m-4 bottom-0 right-0 w-14 z-2"
        target="_blank"
      >
        <img
          src="https://cdn.shopify.com/s/files/1/0551/4333/3974/files/2_5f5a781a-c7a8-4f51-80f3-e9614bd156e2.png?v=1672383590"
          alt="WhatsApp"
        />
      </a>
    </footer>
  );
}
