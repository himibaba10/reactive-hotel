import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import BookingWidget from '../BookingWidget';

export default function HeroSection() {
  return (
    <section
      className='relative min-h-[90vh] flex items-center justify-center bg-cover bg-center'
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2000')" }}
    >
      {/* Dark overlay to ensure contrast */}
      <div className='absolute inset-0 bg-black/60 backdrop-brightness-75' />

      <div className='relative z-10 max-w-5xl mx-auto px-6 text-center text-linen flex flex-col items-center gap-6 pt-16 pb-28 drop-shadow-xl'>
        <div className='inline-flex items-center gap-2 bg-linen/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-linen/20 text-xs font-semibold uppercase tracking-widest text-sand-light shadow-md' data-aos='fade-up'>
          <Sparkles size={14} className='text-sand' />
          <span>Voted Top Wilderness Resort</span>
        </div>

        <h1 className='font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight max-w-4xl text-shadow-md' data-aos='fade-up' data-aos-delay='100'>
          Reconnect with Nature. <br className='hidden sm:inline' />
          Reclaim Yourself.
        </h1>

        <p className='text-base sm:text-lg md:text-xl text-linen/90 font-light max-w-2xl leading-relaxed' data-aos='fade-up' data-aos-delay='200'>
          Nestled deep in the ancient redwood forest, Verdant Haven is a sanctuary where natural eco-luxury meets raw wilderness.
        </p>

        <div className='flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto' data-aos='fade-up' data-aos-delay='300'>
          <Link
            href='/rooms'
            className='btn-primary text-center'
          >
            View Our Rooms
          </Link>
          <Link
            href='/contact'
            className='btn-secondary text-center'
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Overlapping Booking Widget */}
      <div className='absolute bottom-0 left-0 w-full transform translate-y-1/2 z-20 px-6' data-aos='fade-up' data-aos-delay='500'>
        <BookingWidget />
      </div>
    </section>
  );
}
