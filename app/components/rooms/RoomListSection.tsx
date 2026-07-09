import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Users, Maximize, Mountain } from 'lucide-react';

export default function RoomListSection() {
  const rooms = [
    {
      id: 'canopy-suite',
      name: "The Canopy Suite",
      description: "Elevated among the ancient redwoods, the Canopy Suite offers unparalleled 360-degree views of the forest. Featuring a private wraparound deck, outdoor soaking tub, and a suspended glass-bottom lounge area.",
      price: "$850",
      guests: "2 Guests",
      size: "850 sq ft",
      view: "Forest Canopy",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1000"
    },
    {
      id: 'forest-villa',
      name: "The Forest Villa",
      description: "A spacious sanctuary designed for families or small groups. The Villa features two master bedrooms, a sunken living room with a central fireplace, and a private natural plunge pool heated by geothermal energy.",
      price: "$1,200",
      guests: "4 Guests",
      size: "1,400 sq ft",
      view: "Valley & Woods",
      image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1000"
    },
    {
      id: 'riverside-cabin',
      name: "The Riverside Cabin",
      description: "Situated just steps away from the meandering crystal river, this intimate cabin offers the soothing sounds of flowing water. It includes a wood-fired sauna and a stargazing skylight above the king-sized bed.",
      price: "$650",
      guests: "2 Guests",
      size: "600 sq ft",
      view: "River & Mountains",
      image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=1000"
    }
  ];

  return (
    <section className='py-20 bg-sand-light dark:bg-charcoal/50 border-y border-charcoal/5 dark:border-linen/5 w-full'>
      <div className='max-w-7xl mx-auto px-6 flex flex-col gap-24'>
        {rooms.map((room, index) => (
          <div 
            key={room.id}
            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-16 items-center`}
          >
            {/* Image Side */}
            <div className='w-full lg:w-1/2 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group' data-aos='fade-up'>
              <Image 
                src={room.image}
                alt={room.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className='object-cover group-hover:scale-105 transition-transform duration-700'
              />
            </div>

            {/* Content Side */}
            <div className='w-full lg:w-1/2 flex flex-col gap-6' data-aos='fade-up' data-aos-delay='100'>
              <div className='flex justify-between items-end'>
                <h2 className='font-serif text-3xl sm:text-4xl font-bold text-charcoal dark:text-linen'>{room.name}</h2>
                <div className='text-right'>
                  <span className='text-xs font-bold tracking-widest text-slate dark:text-linen/50 uppercase block'>Starting from</span>
                  <span className='font-serif text-2xl text-sage dark:text-sand font-bold'>{room.price}<span className='text-sm font-sans font-normal text-slate dark:text-linen/50'>/night</span></span>
                </div>
              </div>
              
              <p className='text-base text-slate dark:text-linen/75 leading-relaxed'>
                {room.description}
              </p>

              {/* Amenities Grid */}
              <div className='grid grid-cols-3 gap-4 py-6 border-y border-charcoal/10 dark:border-linen/10 my-2'>
                <div className='flex flex-col items-center text-center gap-2'>
                  <Users size={20} className='text-sage dark:text-sand' />
                  <span className='text-xs font-semibold text-charcoal dark:text-linen'>{room.guests}</span>
                </div>
                <div className='flex flex-col items-center text-center gap-2 border-x border-charcoal/10 dark:border-linen/10'>
                  <Maximize size={20} className='text-sage dark:text-sand' />
                  <span className='text-xs font-semibold text-charcoal dark:text-linen'>{room.size}</span>
                </div>
                <div className='flex flex-col items-center text-center gap-2'>
                  <Mountain size={20} className='text-sage dark:text-sand' />
                  <span className='text-xs font-semibold text-charcoal dark:text-linen'>{room.view}</span>
                </div>
              </div>

              <div>
                <Link
                  href={`/rooms/${room.id}`}
                  className='btn-primary inline-flex'
                >
                  <span>Explore {room.name}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
