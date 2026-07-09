"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const GALLERY_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1000',
    alt: 'Forest Resort Lodge',
  },
  {
    src: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1000',
    alt: 'Lakeside Dock Lounge',
  },
  {
    src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1000',
    alt: 'Lush Pool Deck',
  },
  {
    src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000',
    alt: 'Scenic Forest Canopy',
  },
];

export default function GallerySection() {
  const [index, setIndex] = useState(-1);

  return (
    <section className='py-20 bg-sand-light dark:bg-charcoal/50 border-y border-charcoal/5 dark:border-linen/5 w-full'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='text-center max-w-2xl mx-auto mb-12' data-aos='fade-up'>
          <span className='text-xs font-bold tracking-widest text-sage uppercase block mb-3'>Visual Showcase</span>
          <h2 className='font-serif text-3xl sm:text-4xl font-bold text-charcoal dark:text-linen'>Moments of Absolute Stillness</h2>
        </div>

        {/* Grid Layout */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
          {GALLERY_IMAGES.map((img, i) => (
            <div 
              key={i} 
              className='relative h-64 rounded-2xl overflow-hidden shadow-sm group cursor-pointer' 
              data-aos='fade-up' 
              data-aos-delay={(i + 1) * 100}
              onClick={() => setIndex(i)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className='object-cover group-hover:scale-105 transition-transform duration-500'
              />
              {/* Overlay for hover effect */}
              <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300' />
            </div>
          ))}
        </div>

        <div className='text-center' data-aos='fade-up' data-aos-delay='500'>
          <Link
            href='/gallery'
            className='btn-outline'
          >
            <span>Explore Gallery</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={GALLERY_IMAGES.map(img => ({ src: img.src, alt: img.alt }))}
      />
    </section>
  );
}
