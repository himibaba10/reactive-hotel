import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className='py-20 bg-sand-light dark:bg-charcoal/50 border-y border-charcoal/5 dark:border-linen/5'>
      <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
        {/* Left Column: Text */}
        <div className='flex flex-col gap-6' data-aos='fade-up'>
          <span className='text-xs font-bold tracking-widest text-sage uppercase'>Our Philosophy</span>
          <h2 className='font-serif text-3xl sm:text-4xl font-bold text-charcoal dark:text-linen leading-tight'>Where Eco-Luxury Meets the Deep Wilderness</h2>
          <p className='text-sm sm:text-base text-slate dark:text-linen/75 leading-relaxed'>
            At Verdant Haven, we believe that true wellness lies in slowing down and tuning into the rhythms of the earth. Our retreat was built by local artisans using fallen timber and organic
            stones, ensuring that every cabin is integrated harmoniously with the surrounding woodland.
          </p>
          <p className='text-sm sm:text-base text-slate dark:text-linen/75 leading-relaxed'>
            Every detail has been thoughtfully crafted to reduce our environmental impact—running on 100% solar power and sourcing all ingredients directly from our kitchen gardens and local foragers.
          </p>
          <div className='pt-4'>
            <Link
              href='/about'
              className='inline-flex items-center gap-2 group text-sm font-bold tracking-wider text-sage hover:text-sage-hover dark:text-sand dark:hover:text-sand-hover transition-colors'
            >
              <span>Read Our Story</span>
              <ArrowRight size={16} className='group-hover:translate-x-1.5 transition-transform' />
            </Link>
          </div>
        </div>

        {/* Right Column: Image Collage */}
        <div className='relative grid grid-cols-12 gap-4 h-[420px] sm:h-[480px]'>
          {/* Base Image */}
          <div className='relative col-span-8 h-full rounded-2xl overflow-hidden shadow-md' data-aos='fade-up' data-aos-delay='200'>
            <Image src='https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000' alt='Luxury forest bath' fill sizes='(max-width: 768px) 66vw, 50vw' className='object-cover' />
          </div>
          {/* Overlapping Image */}
          <div
            className='absolute right-0 bottom-6 col-span-6 w-1/2 h-[65%] rounded-2xl overflow-hidden shadow-2xl border-4 border-sand-light dark:border-charcoal/30'
            data-aos='fade-up'
            data-aos-delay='400'
          >
            <Image src='https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1000' alt='Lush nature balcony' fill sizes='(max-width: 768px) 50vw, 33vw' className='object-cover' />
          </div>
        </div>
      </div>
    </section>
  );
}
