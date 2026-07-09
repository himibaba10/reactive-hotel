import { ArrowRight, Compass } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='min-h-screen flex items-center justify-center relative overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image src='https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2000' alt='Misty forest path' fill className='object-cover opacity-60 dark:opacity-40' />
        {/* Gradient overlay for better text legibility */}
        <div className='absolute inset-0 bg-linear-to-t from-sand-light via-sand-light/50 to-transparent dark:from-[#1A1A1A] dark:via-[#1A1A1A]/80 dark:to-transparent'></div>
      </div>

      <div className='relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-2xl mx-auto py-10'>
        <div className='w-20 h-20 bg-sage/20 dark:bg-sand/20 text-sage dark:text-sand rounded-full flex items-center justify-center mb-8 backdrop-blur-md border border-white/20'>
          <Compass size={40} className='stroke-[1.5]' />
        </div>

        <h1 className='font-serif text-8xl md:text-9xl font-bold text-charcoal dark:text-linen tracking-tighter mb-4'>404</h1>

        <h2 className='font-serif text-3xl md:text-4xl font-bold text-charcoal dark:text-linen mb-6'>Lost in the Woods</h2>

        <p className='text-lg text-slate dark:text-linen/80 mb-10 leading-relaxed max-w-lg'>
          It seems you&apos;ve wandered off the trail. The page you are looking for has been moved, removed, or doesn&apos;t exist in our sanctuary.
        </p>

        <Link href='/' className='btn-primary flex items-center gap-3 px-8 py-4 text-base'>
          Return to Home
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
