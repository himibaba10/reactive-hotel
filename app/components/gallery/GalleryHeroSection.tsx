export default function GalleryHeroSection() {
  return (
    <section className='pt-32 pb-16 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-6'>
      <span className='text-xs font-bold tracking-widest text-sage uppercase block' data-aos='fade-up'>
        Visual Journey
      </span>
      <h1 className='font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-charcoal dark:text-linen tracking-tight leading-tight' data-aos='fade-up' data-aos-delay='100'>
        A Glimpse of Haven
      </h1>
      <p className='text-lg text-slate dark:text-linen/75 leading-relaxed max-w-2xl' data-aos='fade-up' data-aos-delay='200'>
        Explore the serene beauty, eco-luxury architecture, and natural wonders that define the Verdant Haven experience.
      </p>
      <div className='w-16 h-0.5 bg-sand mx-auto mt-4' data-aos='fade-up' data-aos-delay='300' />
    </section>
  );
}
