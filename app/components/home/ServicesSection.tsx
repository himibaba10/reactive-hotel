import { Coffee, Compass, Sparkles, Wind } from 'lucide-react';

export default function ServicesSection() {
  return (
    <section className='py-20 md:py-28 max-w-7xl mx-auto px-6 w-full'>
      <div className='text-center max-w-2xl mx-auto mb-16' data-aos='fade-up'>
        <span className='text-xs font-bold tracking-widest text-sage uppercase block mb-3'>Bespoke Guest Services</span>
        <h2 className='font-serif text-3xl sm:text-4xl font-bold text-charcoal dark:text-linen'>The Haven Experience</h2>
        <div className='w-16 h-0.5 bg-sand mx-auto mt-4' />
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        {/* Spa */}
        <div className='bg-white dark:bg-charcoal border border-sage/30 dark:border-linen/20 rounded-2xl p-8 hover:shadow-xl hover:border-sage/50 dark:hover:border-linen/40 transition-all duration-300 flex flex-col gap-4 text-center items-center group' data-aos='fade-up' data-aos-delay='100'>
          <div className='p-4 rounded-full bg-sage/10 text-sage dark:bg-sand/10 dark:text-sand group-hover:bg-sage group-hover:text-linen dark:group-hover:bg-sand dark:group-hover:text-charcoal transition-all duration-300'>
            <Wind size={24} />
          </div>
          <h3 className='font-serif text-lg font-bold text-charcoal dark:text-linen'>Wilderness Spa</h3>
          <p className='text-xs sm:text-sm text-slate dark:text-linen/70 leading-relaxed'>
            Deep tissue forest massages, botanical facial masks, and custom essential oils blended from native spruce.
          </p>
        </div>

        {/* Dining */}
        <div className='bg-white dark:bg-charcoal border border-sage/30 dark:border-linen/20 rounded-2xl p-8 hover:shadow-xl hover:border-sage/50 dark:hover:border-linen/40 transition-all duration-300 flex flex-col gap-4 text-center items-center group' data-aos='fade-up' data-aos-delay='200'>
          <div className='p-4 rounded-full bg-sage/10 text-sage dark:bg-sand/10 dark:text-sand group-hover:bg-sage group-hover:text-linen dark:group-hover:bg-sand dark:group-hover:text-charcoal transition-all duration-300'>
            <Coffee size={24} />
          </div>
          <h3 className='font-serif text-lg font-bold text-charcoal dark:text-linen'>Treehouse Dining</h3>
          <p className='text-xs sm:text-sm text-slate dark:text-linen/70 leading-relaxed'>
            A wood-fired tasting menu prepared with ingredients hand-picked from the local hills, served 30ft high in the canopy.
          </p>
        </div>

        {/* Expeditions */}
        <div className='bg-white dark:bg-charcoal border border-sage/30 dark:border-linen/20 rounded-2xl p-8 hover:shadow-xl hover:border-sage/50 dark:hover:border-linen/40 transition-all duration-300 flex flex-col gap-4 text-center items-center group' data-aos='fade-up' data-aos-delay='300'>
          <div className='p-4 rounded-full bg-sage/10 text-sage dark:bg-sand/10 dark:text-sand group-hover:bg-sage group-hover:text-linen dark:group-hover:bg-sand dark:group-hover:text-charcoal transition-all duration-300'>
            <Compass size={24} />
          </div>
          <h3 className='font-serif text-lg font-bold text-charcoal dark:text-linen'>Guided Trails</h3>
          <p className='text-xs sm:text-sm text-slate dark:text-linen/70 leading-relaxed'>Daily hikes led by expert naturalists to explore hidden waterfalls, ancient caves, and lookouts.</p>
        </div>

        {/* Infinity Pool */}
        <div className='bg-white dark:bg-charcoal border border-sage/30 dark:border-linen/20 rounded-2xl p-8 hover:shadow-xl hover:border-sage/50 dark:hover:border-linen/40 transition-all duration-300 flex flex-col gap-4 text-center items-center group' data-aos='fade-up' data-aos-delay='400'>
          <div className='p-4 rounded-full bg-sage/10 text-sage dark:bg-sand/10 dark:text-sand group-hover:bg-sage group-hover:text-linen dark:group-hover:bg-sand dark:group-hover:text-charcoal transition-all duration-300'>
            <Sparkles size={24} />
          </div>
          <h3 className='font-serif text-lg font-bold text-charcoal dark:text-linen'>Infinity Pools</h3>
          <p className='text-xs sm:text-sm text-slate dark:text-linen/70 leading-relaxed'>
            Naturally heated volcanic mineral spring pools carved out of stones, offering panoramic views of Sage Valley.
          </p>
        </div>
      </div>
    </section>
  );
}
