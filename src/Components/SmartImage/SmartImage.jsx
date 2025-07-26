'use client';

import { useState } from 'react';
import Image from 'next/image';

const SmartImage = ({ src, alt, width, height }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-[200px] bg-gray-200 rounded overflow-hidden">
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gray-300" />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`object-cover w-full h-full transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default SmartImage;
