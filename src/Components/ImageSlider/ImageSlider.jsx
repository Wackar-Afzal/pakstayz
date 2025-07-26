"use client"

import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { useState, useEffect, useCallback } from "react"

export default function ImageSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      duration: 80,
      startIndex: 0,
      align: "center",
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })],
  )

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [slideCount, setSlideCount] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    emblaApi.on("select", onSelect)
    setSlideCount(emblaApi.scrollSnapList().length)
    onSelect() // update on mount

    // Recompute the carousel after images are loaded
    const recomputeLayout = () => {
      emblaApi.reInit()
    }

    window.addEventListener("load", recomputeLayout)
    return () => window.removeEventListener("load", recomputeLayout)
  }, [emblaApi, onSelect])

  // Handle image loading
  const handleImageLoad = useCallback(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="w-full flex flex-col items-center space-y-4 relative md:bg-white p-4 ">
      <div className="hidden md:block md:absolute md:h-full md:inset-0 md:white"></div>

      {/* Carousel container with fixed aspect ratio */}
      <div
        className={`w-full overflow-hidden transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        ref={emblaRef}
        style={{
          // Set a min-height to prevent layout shifts
          minHeight: "300px",
        }}
      >
        <div className="flex">
          {/* <div className="flex-[0_0_100%] flex justify-center md:mx-2 shadow-lg md:shadow-none">
            <div className="w-full md:w-[50%] relative aspect-[4/3] rounded-3xl overflow-hidden">
              <Image
                className="object-cover"
                src="/herobanner2.jpg"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                alt="Hero banner"
                onLoad={handleImageLoad}
              />
            </div>
          </div> */}

          {["room1.0",'room2.0','room3.0','room4.0','room5.0','room6.0'].map((item)=>{
            return(
          <div key={item} className="flex-[0_0_98%] md:flex-[0_0_100%] flex justify-center mx-2 md:shadow-none">
          <div className="w-full md:w-[50%] relative aspect-[4/3] overflow-hidden">
            <Image
              className="object-cover"
              src={`/${item}.jpg`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
             
              alt="Hero banner"
              onLoad={handleImageLoad}
            />
          </div>
        </div>)
          })}
        </div>
      </div>

      {/* Loading placeholder (shown while images are loading) */}
      {!isLoaded && (
        <div className="absolute w-full flex justify-center items-center" style={{ height: "300px" }}>
          <div className="w-16 h-16 border-4 border-primary-color border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Dots */}
      <div className="flex space-x-2 z-10">
        {Array.from({ length: slideCount }).map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === selectedIndex ? "bg-primary-color w-8" : "bg-gray-400 w-2"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
