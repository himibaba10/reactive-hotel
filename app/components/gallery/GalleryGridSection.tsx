'use client';

import Image from 'next/image';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1632743441209-8a09b8a37e25?q=80&w=1170', alt: 'Luxury suite view', size: 'col-span-1 md:col-span-2 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1518557984649-7b161c230cfa?q=80&w=1600', alt: 'Misty forest path', size: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1600', alt: 'Forest villa', size: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1475087542963-13ab5e611954?q=80&w=1170', alt: 'Wood cabin details', size: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600', alt: 'Canopy suite', size: 'col-span-1 md:col-span-2 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600', alt: 'Dining area', size: 'col-span-1 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1688616162995-16c2665f469c?q=80&w=687', alt: 'Riverside cabin', size: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=1600', alt: 'Room interior', size: 'col-span-1 row-span-1' },
];

export default function GalleryGridSection() {
  const [index, setIndex] = useState(-1);

  // Map images for the lightbox format
  const slides = galleryImages.map((img) => ({ src: img.src }));

  return (
    <section className='pb-20 max-w-7xl mx-auto px-6 w-full'>
      {/* Dense Grid for Masonry packing without gaps */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] grid-flow-dense'>
        {galleryImages.map((image, i) => (
          <div key={i} className={`relative rounded-2xl overflow-hidden cursor-pointer group ${image.size}`} data-aos='fade-up' data-aos-delay={(i % 5) * 100} onClick={() => setIndex(i)}>
            <Image src={image.src} alt={image.alt} fill className='object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out' sizes='(max-width: 768px) 100vw, 50vw' />
            {/* Hover overlay */}
            <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500' />
          </div>
        ))}
      </div>

      <Lightbox index={index} open={index >= 0} close={() => setIndex(-1)} slides={slides} />
    </section>
  );
}
