import Image from 'next/image';

interface RoomDetailHeroProps {
  images: string[];
}

export default function RoomDetailHero({ images }: RoomDetailHeroProps) {
  return (
    <section className='w-full pt-28 px-6 max-w-7xl mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-12 gap-4 h-[50vh] min-h-[400px] max-h-[600px] rounded-3xl overflow-hidden shadow-2xl' data-aos='fade-up'>
        {/* Main large image */}
        <div className='md:col-span-8 relative h-full group'>
          <Image 
            src={images[0]} 
            alt='Main room view' 
            fill 
            priority
            className='object-cover group-hover:scale-105 transition-transform duration-700'
            sizes="(max-width: 768px) 100vw, 66vw"
          />
        </div>
        
        {/* Side images */}
        <div className='hidden md:flex flex-col col-span-4 gap-4 h-full'>
          <div className='relative h-[calc(50%-0.5rem)] w-full overflow-hidden group rounded-tr-3xl'>
            <Image 
              src={images[1]} 
              alt='Room detail 1' 
              fill 
              className='object-cover group-hover:scale-105 transition-transform duration-700'
              sizes="33vw"
            />
          </div>
          <div className='relative h-[calc(50%-0.5rem)] w-full overflow-hidden group rounded-br-3xl'>
            <Image 
              src={images[2]} 
              alt='Room detail 2' 
              fill 
              className='object-cover group-hover:scale-105 transition-transform duration-700'
              sizes="33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
