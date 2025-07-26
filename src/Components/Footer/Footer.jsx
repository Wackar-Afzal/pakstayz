"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import Auth from "../Auth/Auth";
// import { services } from "@/assets/data";

export default function Footer() {


  // function updateAllServices(services) {
  //   return services.map((service) => {
  //     const baseLink = `/services/${service.slug}`;
  //     service.subcategories = service.subcategories.map((sub) => {
  //       const safeName = sub.name.replace(/\s+/g, '-');
  //       return {
  //         ...sub,
  //         link: `${baseLink}#${safeName}`,
  //         divId: safeName,
  //       };
  //     });
  //     return service;
  //   });
  // }
  
  
  // // Example usage:
  // const updatedService = updateAllServices(services);
  // console.log(updatedService);
  

  return (
    <footer className="bg-gradient-to-b from-[#73b5c6] to-[#73b5c6] py-10 pb-[4rem] md:pb-18 text-black">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="flex justify-between items-center gap-2">
            <h2 className="text-2xl font-bold">Get In Touch</h2>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-end justify-between"
            >
              <div className="flex gap-4">
                {/* <div className="bg-white p-2 rounded-xl">
                  <Facebook className="text-[#73b5c6]" size={25} />
                </div> */}
                <a target="blank" href="https://www.facebook.com/PakStayz?mibextid=wwXIfr&rdid=hmFnxELNghNfd5u5&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18buKKfX9s%2F%3Fmibextid%3DwwXIfr#" className="bg-white p-2 rounded-xl">
                  <Facebook  className="text-[#73b5c6]" size={25} />
                  </a>
              </div>
            </motion.div>
          </div>
          <div className="space-y-4">
  {/* Location */}
  <div className="flex items-center gap-4">
    <a 
      href="https://www.google.com/maps?q=Islamabad,+Pakistan&hl=en&fbclid=IwY2xjawKqTONleHRuA2FlbQIxMABicmlkETFVZ1RzZFk0SFd4c0paY0szAR7RmdLi3CPczCeuciFownEYZazSkrlgE2OmiMD2JWmmpIqZq4alerMHUUOlug_aem_QUITryxA7S_kSGUD701WAg"
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-4"
    >
      <div className="bg-white/40 p-3 rounded-xl">
        <MapPin className="text-[#73b5c6]" size={20} />
      </div>
      <p>
       Islamabad, Pakistan
      </p>
    </a>
  </div>

  {/* Phone */}
  {/* <div className="flex items-center gap-4">
    <a href="tel:00971564633869" className="flex items-center gap-4">
      <div className="bg-white/40 p-3 rounded-xl">
        <Phone className="text-[#73b5c6]" size={20} />
      </div>
      <p>00 971 564633869</p>
    </a>
  </div> */}
  <div className="flex items-center gap-4">
    <a href="tel:923008933591" className="flex items-center gap-4">
      <div className="bg-white/40 p-3 rounded-xl">
        <Phone className="text-[#73b5c6]" size={20} />
      </div>
      <p>+92 300 8933591</p>
    </a>
  </div>

  {/* Email */}
  <div className="flex items-center gap-4">
    <a href="mailto:attiq5583423@gmail.com" className="flex items-center gap-4">
      <div className="bg-white/40 p-3 rounded-xl">
        <Mail className="text-[#73b5c6]" size={20} />
      </div>
      <p>attiq5583423@gmail.com</p>
    </a>
  </div>
</div>

        </motion.div>

        {/* Right Section */}
      </div>
      <div className="mt-10 text-center text-sm text-black">
        <p>Available 24/7</p>
        <p className="mt-4">© 2025  PakStayz
        </p>
      </div>


      <a
        href="https://wa.me/923008933591
"
        className="fixed m-4 bottom-0 right-0 w-14 z-2"
        target="_blank"
      >
        <img src="https://cdn.shopify.com/s/files/1/0551/4333/3974/files/2_5f5a781a-c7a8-4f51-80f3-e9614bd156e2.png?v=1672383590" />
      </a>
{/* 
      <div>
        <Auth/>
      </div> */}



    </footer>
  );
}
