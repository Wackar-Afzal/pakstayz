"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { Button } from "@mui/material";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // ✅ Close when clicking outside mobile nav
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="bg-white shadow-sm max-w-6xl mx-auto sticky top-0 z-50">
      {/* Top bar */}
      <div className="hidden md:block bg-gray-50 py-2">
        <div className="container mx-auto px-4 flex justify-end items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-semibold">03000466682</span>
            </div>
            <div className="flex space-x-2">
              <Facebook className="w-4 h-4 text-blue-600 cursor-pointer" />
              <Twitter className="w-4 h-4 text-blue-400 cursor-pointer" />
              <Instagram className="w-4 h-4 text-pink-600 cursor-pointer" />
              <Linkedin className="w-4 h-4 text-blue-700 cursor-pointer" />
              <Youtube className="w-4 h-4 text-red-600 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <Link href="/">
              <div className=" h-10 p-1  flex items-center justify-center">

                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </div>

                </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-semibold">03000466682</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-blue-500">
              Home
            </Link>
            <Link href="/cities" className="text-blue-500 hover:text-blue-500">
              Cities
            </Link>
            <Link href="/facilities" className="text-blue-500 hover:text-blue-500">
              Facilities
            </Link>
            <Link href="/contact" className="text-blue-500 hover:text-blue-500">
              Contact us
            </Link>
            <Link href="/rooms-pic" className="text-blue-500 hover:text-blue-500">
              Rooms Pictures
            </Link>
            <div className="w-8 h-8 bg-orange-400 rounded flex items-center justify-center cursor-pointer">
              <div className="grid grid-cols-2 gap-0.5">
                <div className="w-1 h-1 bg-white rounded-sm"></div>
                <div className="w-1 h-1 bg-white rounded-sm"></div>
                <div className="w-1 h-1 bg-white rounded-sm"></div>
                <div className="w-1 h-1 bg-white rounded-sm"></div>
              </div>
            </div>
          </nav>
        </div>

        {/* ✅ Mobile navigation with click-outside support */}
        {isMenuOpen && (
          <nav
            ref={menuRef}
            className="md:hidden mt-4 space-y-2 bg-white p-4 rounded shadow"
          >
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-blue-500 font-semibold"
            >
              Home
            </Link>
            <Link
              href="/cities"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-blue-500"
            >
              Cities
            </Link>
            <Link
              href="/facilities"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-blue-500"
            >
              Facilities
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-blue-500"
            >
              Contact us
            </Link>
            <Link
              href="/rooms-pic"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-blue-500"
            >
              Rooms Pictures
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
