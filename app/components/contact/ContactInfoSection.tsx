import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactInfoSection() {
  const contactDetails = [
    {
      icon: <MapPin size={24} />,
      title: 'Our Sanctuary',
      details: ['123 Forest Canopy Way', 'Redwood Valley, CA 95412', 'United States'],
      delay: 100,
    },
    {
      icon: <Mail size={24} />,
      title: 'General Inquiries',
      details: ['hello@verdanthaven.com', 'press@verdanthaven.com'],
      delay: 200,
    },
    {
      icon: <Phone size={24} />,
      title: 'Reservations',
      details: ['+1 (555) 123-4567', 'Available 8AM - 8PM PST'],
      delay: 300,
    },
  ];

  return (
    <section className='py-20 max-w-7xl mx-auto px-6 w-full relative z-20 -mt-40'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {contactDetails.map((item, index) => (
          <div
            key={index}
            className='bg-white/80 dark:bg-charcoal/80 backdrop-blur-xl border border-white/50 dark:border-linen/10 rounded-3xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_20px_40px_rgb(0,0,0,0.4)] hover:-translate-y-2 hover:bg-white dark:hover:bg-charcoal transition-all duration-500 flex flex-col gap-5 items-center text-center group relative overflow-hidden'
            data-aos='fade-up'
            data-aos-delay={item.delay}
          >
            {/* Subtle gradient glow on hover */}
            <div className='absolute inset-0 bg-linear-to-br from-sage/10 to-transparent dark:from-sand/10 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none' />

            <div className='relative z-10 p-5 rounded-full bg-sage/5 text-sage dark:bg-sand/5 dark:text-sand group-hover:bg-sage group-hover:text-linen dark:group-hover:bg-sand dark:group-hover:text-charcoal group-hover:scale-110 transition-all duration-500'>
              {item.icon}
            </div>

            <div className='relative z-10 flex flex-col gap-2'>
              <h3 className='font-serif text-2xl font-bold text-charcoal dark:text-linen'>{item.title}</h3>
              <div className='text-sm text-slate/80 dark:text-linen/70 leading-relaxed flex flex-col gap-1 mt-2'>
                {item.details.map((line, i) => (
                  <span key={i} className='font-medium tracking-wide'>
                    {line}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
