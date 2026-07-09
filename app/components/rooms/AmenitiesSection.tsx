import { Coffee, Wifi, Flame, Bath, Car, Flower2 } from 'lucide-react';

export default function AmenitiesSection() {
  const amenities = [
    { icon: <Coffee size={24} />, name: "Organic Breakfast", desc: "Farm-to-table breakfast served daily" },
    { icon: <Wifi size={24} />, name: "Fiber Internet", desc: "High-speed Wi-Fi in all spaces" },
    { icon: <Flame size={24} />, name: "Fire Pits", desc: "Private outdoor wood-burning pits" },
    { icon: <Bath size={24} />, name: "Forest Spa", desc: "Access to geothermal soaking tubs" },
    { icon: <Car size={24} />, name: "EV Charging", desc: "Complimentary Level 2 charging" },
    { icon: <Flower2 size={24} />, name: "Yoga Pavilion", desc: "Daily morning sessions included" }
  ];

  return (
    <section className='py-20 md:py-28 max-w-7xl mx-auto px-6 w-full'>
      <div className='text-center max-w-2xl mx-auto mb-16' data-aos='fade-up'>
        <span className='text-xs font-bold tracking-widest text-sage uppercase block mb-3'>Included Services</span>
        <h2 className='font-serif text-3xl sm:text-4xl font-bold text-charcoal dark:text-linen'>Resort Amenities</h2>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {amenities.map((item, index) => (
          <div 
            key={index}
            className='bg-white/50 dark:bg-charcoal/50 border border-sage/20 dark:border-linen/10 rounded-2xl p-6 flex items-start gap-4 hover:bg-white dark:hover:bg-charcoal hover:shadow-lg transition-all duration-300 group'
            data-aos='fade-up'
            data-aos-delay={(index % 3 + 1) * 100}
          >
            <div className='p-3 rounded-full bg-sage/10 text-sage dark:bg-sand/10 dark:text-sand group-hover:bg-sage group-hover:text-linen dark:group-hover:bg-sand dark:group-hover:text-charcoal transition-all duration-300'>
              {item.icon}
            </div>
            <div>
              <h3 className='font-serif text-lg font-bold text-charcoal dark:text-linen mb-1'>{item.name}</h3>
              <p className='text-sm text-slate dark:text-linen/70'>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
