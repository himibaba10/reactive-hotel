import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className='relative py-28 bg-cover bg-center' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000')" }}>
      <div className='absolute inset-0 bg-charcoal/50 backdrop-brightness-[0.8]' />

      <div className='relative z-10 max-w-3xl mx-auto px-6 text-center text-linen flex flex-col items-center gap-6'>
        <span className='text-xs font-bold tracking-widest text-sand uppercase' data-aos='fade-up'>
          Reserve Your Experience
        </span>
        <h2 className='font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-shadow-md' data-aos='fade-up' data-aos-delay='100'>
          Begin Your Journey to Stillness
        </h2>
        <p className='text-sm sm:text-base md:text-lg text-linen/90 font-light max-w-xl leading-relaxed' data-aos='fade-up' data-aos-delay='200'>
          Spaces in the canopy are limited. Secure your forest suite today and embark on a regenerative escape.
        </p>
        <div className='mt-4' data-aos='fade-up' data-aos-delay='300'>
          <Link href='/rooms' className='btn-accent'>
            <span>Book Your Retreat</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
