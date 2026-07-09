'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback } from 'react';

interface Room {
  id: string;
  title: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  amenities: string[];
  capacity: string;
}

const ROOMS_DATA: Room[] = [
  {
    id: 'sage-canopy-suite',
    title: 'Sage Canopy Suite',
    category: 'Luxury Suite',
    price: 450,
    rating: 4.9,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1000',
    amenities: ['Forest View', 'King Bed', 'Outdoor Bath'],
    capacity: '2 Guests',
  },
  {
    id: 'forest-brook-cabin',
    title: 'Forest Brook Cabin',
    category: 'Cabin Villa',
    price: 380,
    rating: 4.8,
    reviews: 98,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000',
    amenities: ['Creekside', 'Fireplace', 'Private Deck'],
    capacity: '4 Guests',
  },
  {
    id: 'verdant-penthouse',
    title: 'Verdant Penthouse',
    category: 'Penthouse',
    price: 750,
    rating: 5.0,
    reviews: 42,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000',
    amenities: ['Infinity Pool', 'Glass Walls', 'Private Spa'],
    capacity: '2 Guests',
  },
  {
    id: 'solitude-aframe',
    title: 'Solitude A-Frame',
    category: 'A-Frame Cabin',
    price: 290,
    rating: 4.7,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1000',
    amenities: ['Wood Stove', 'Skylights', 'Kitchenette'],
    capacity: '2 Guests',
  },
];

export default function RoomSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 5000, stopOnInteraction: true })]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className='relative w-full px-2 py-4'>
      {/* Embla Viewport */}
      <div className='overflow-hidden' ref={emblaRef}>
        {/* Embla Container */}
        <div className='flex gap-8 cursor-grab active:cursor-grabbing pb-4'>
          {ROOMS_DATA.map((room) => (
            <div key={room.id} className='flex-[0_0_100%] md:flex-[0_0_calc(50%-16px)] lg:flex-[0_0_calc(33.333%-21px)] min-w-0'>
              <div className='group flex flex-col h-full bg-white dark:bg-charcoal border border-sage/30 dark:border-linen/20 rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-xl hover:border-sage/50 dark:hover:border-linen/40 hover:-translate-y-1 transition-all duration-300'>
                {/* Image Section */}
                <div className='relative h-64 overflow-hidden'>
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    className='object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out'
                  />
                  <div className='absolute top-4 left-4 bg-linen/95 dark:bg-charcoal/95 backdrop-blur-sm border border-charcoal/10 dark:border-linen/10 px-3.5 py-1.5 rounded-full shadow-sm text-xs font-semibold text-charcoal dark:text-linen'>
                    {room.category}
                  </div>
                </div>

                {/* Content Section */}
                <div className='flex-1 p-6 flex flex-col justify-between'>
                  <div>
                    <div className='flex items-center justify-between gap-2 mb-2'>
                      <div className='flex items-center gap-1.5 text-xs text-slate dark:text-linen/70 font-semibold tracking-wide'>
                        <span>{room.capacity}</span>
                      </div>
                      <div className='flex items-center gap-1 text-xs font-bold text-amber-500'>
                        <Star size={14} className='fill-amber-500 stroke-none' />
                        <span>{room.rating.toFixed(1)}</span>
                        <span className='text-slate font-medium'>({room.reviews})</span>
                      </div>
                    </div>

                    <h3 className='font-serif text-xl font-bold text-charcoal dark:text-linen mb-3 group-hover:text-sage dark:group-hover:text-sand transition-colors'>{room.title}</h3>

                    <div className='flex flex-wrap gap-2 mb-5'>
                      {room.amenities.map((amenity) => (
                        <span
                          key={amenity}
                          className='text-[10px] font-semibold tracking-wider uppercase bg-linen dark:bg-charcoal/80 text-slate dark:text-linen/70 border border-charcoal/5 dark:border-linen/5 px-2.5 py-1 rounded-md'
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className='flex items-center justify-between border-t border-charcoal/5 dark:border-linen/5 pt-4'>
                    <div>
                      <span className='text-2xl font-bold font-serif text-sage dark:text-sand'>${room.price}</span>
                      <span className='text-xs text-slate dark:text-linen/60 font-medium'> / night</span>
                    </div>
                    <Link
                      href={`/rooms/${room.id}`}
                      className='flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-charcoal dark:text-linen hover:text-sage dark:hover:text-sand transition-colors duration-300'
                    >
                      <span>Details</span>
                      <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Handles */}
      <div className='flex items-center justify-center gap-4 mt-8'>
        <button
          onClick={scrollPrev}
          className='p-3 rounded-full border border-charcoal/10 dark:border-linen/10 hover:border-sage hover:text-sage dark:hover:border-sand dark:hover:text-sand transition-all duration-300'
          aria-label='Previous room'
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={scrollNext}
          className='p-3 rounded-full border border-charcoal/10 dark:border-linen/10 hover:border-sage hover:text-sage dark:hover:border-sand dark:hover:text-sand transition-all duration-300'
          aria-label='Next room'
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
