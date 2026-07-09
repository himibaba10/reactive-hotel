import { Sun, Heart, Sparkles } from 'lucide-react';

export default function CoreValuesSection() {
  const values = [
    {
      icon: <Sun size={24} />,
      title: "Absolute Sustainability",
      description: "Powered by 100% renewable energy, our resort operates on a zero-waste philosophy, proving that eco-friendly can also mean extraordinary."
    },
    {
      icon: <Heart size={24} />,
      title: "Holistic Wellness",
      description: "We believe nature is the ultimate healer. Every experience is curated to restore your mind, body, and spirit."
    },
    {
      icon: <Sparkles size={24} />,
      title: "Uncompromised Luxury",
      description: "From 1000-thread-count organic linens to bespoke culinary experiences, every detail is crafted for your utmost comfort."
    }
  ];

  return (
    <section className='py-20 max-w-7xl mx-auto px-6 w-full'>
      <div className='text-center max-w-2xl mx-auto mb-16' data-aos='fade-up'>
        <span className='text-xs font-bold tracking-widest text-sage uppercase block mb-3'>Our Pillars</span>
        <h2 className='font-serif text-3xl sm:text-4xl font-bold text-charcoal dark:text-linen'>What We Stand For</h2>
        <div className='w-16 h-0.5 bg-sand mx-auto mt-4' />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {values.map((value, index) => (
          <div 
            key={index} 
            className='bg-white dark:bg-charcoal border border-sage/30 dark:border-linen/20 rounded-2xl p-8 hover:shadow-xl hover:border-sage/50 dark:hover:border-linen/40 transition-all duration-300 flex flex-col gap-4 items-center text-center group'
            data-aos='fade-up'
            data-aos-delay={(index + 1) * 100}
          >
            <div className='p-4 rounded-full bg-sage/10 text-sage dark:bg-sand/10 dark:text-sand group-hover:bg-sage group-hover:text-linen dark:group-hover:bg-sand dark:group-hover:text-charcoal transition-all duration-300'>
              {value.icon}
            </div>
            <h3 className='font-serif text-xl font-bold text-charcoal dark:text-linen'>{value.title}</h3>
            <p className='text-sm text-slate dark:text-linen/75 leading-relaxed'>
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
