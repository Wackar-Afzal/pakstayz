'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { services } from "@/assets/data";
import { Dialog, DialogContent, IconButton, Button } from "@mui/material";
import {X } from "lucide-react";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const handleImageClick = (service) => {
    setSelectedService(service);
  };

  const handleClose = () => {
    setSelectedService(null);
  };

  const handleWhatsAppBooking = (service) => {
    const message = encodeURIComponent(
      `Hi, I'm interested in booking the "${service.name}" room.\nRoom Price: ${service.price ?? ""}`
    );
    const phone = "923008933591"; // e.g. 919123456789
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-6 md:py-12 px-2 md:px-[15%]">
      <h2 className="text-3xl font-bold mb-8">Guest Rooms</h2>

      <div className="flex items-center flex-wrap gap-y-6 gap-2 md:gap-6">
        {services.map((service) => (
          <motion.a
            key={service.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="block w-[48%] md:w-[260px] !rounded-[5rem]"
          >
            <div className="!shadow-lg rounded-none overflow-hidden md:!rounded-2xl">
              <div
                className="relative w-full h-40 cursor-pointer"
                onClick={() => handleImageClick(service)}
              >
                <Image
                  src={`/${service.img}.jpg`}
                  alt={service.name}
                  fill
                  className="object-cover p-0 md:p-2 rounded-t-2xl md:rounded-2xl"
                />
              </div>
              <div className="text-center px-2 md:px-4 pt-2 pb-4">
                <p className="truncate text-ellipsis whitespace-nowrap overflow-hidden font-semibold">
                  {service.name}
                </p>
                <p className="text-gray-500 mb-2">
                  {service.price || '...'}
                </p>
                <Button
                  size="small"
                  variant="contained"
                  onClick={() => handleWhatsAppBooking(service)}
                >
                  Book
                </Button>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Zoom Dialog */}
      <Dialog
        open={Boolean(selectedService)}
        onClose={handleClose}
        fullScreen
        PaperProps={{ style: { backgroundColor: "black" } }}
      >
        <DialogContent className="relative p-0">
          <IconButton
            onClick={handleClose}
            className="absolute top-2 right-2 z-50 !text-white "
          >
            <X />
          </IconButton>
          {selectedService && (
            <Image
              src={`/${selectedService.img}.jpg`}
              alt={selectedService.name}
              layout="fill"
              className="object-contain"
              priority
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
