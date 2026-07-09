import Image from 'next/image';

export default function RoomsHeroSection() {
  return (
    <section className='relative min-h-[60vh] flex flex-col justify-center overflow-hidden'>
      {/* Background Image using next/image */}
      <div className='absolute inset-0 z-0'>
        <Image 
          src='https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2000'
          alt='Luxury suite view'
          fill
          priority
          className='object-cover'
        />
        <div className='absolute inset-0 bg-black/50 backdrop-brightness-75' />
      </div>

      <div className='relative z-10 max-w-4xl mx-auto px-6 text-center text-linen flex flex-col items-center gap-6 pt-16 pb-16 drop-shadow-xl'>
        <span className='text-xs font-bold tracking-widest text-sand uppercase' data-aos='fade-up'>
          Our Sanctuaries
        </span>
        <h1 className='font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight text-shadow-md' data-aos='fade-up' data-aos-delay='100'>
          Where Luxury Meets<br />the Canopy.
        </h1>
        <div className='w-16 h-0.5 bg-sand mx-auto mt-4' data-aos='fade-up' data-aos-delay='200' />
      </div>
    </section>
  );
}
