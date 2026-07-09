import RoomSlider from '../RoomSlider';

export default function RoomsSection() {
  return (
    <>
      {/* Spacing for Booking Widget overlay */}
      <div className='h-28 md:h-20' />

      {/* 2. OUR ROOMS SECTION */}
      <section className='py-20 md:py-28 max-w-7xl mx-auto px-6 w-full'>
        <div className='flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12' data-aos='fade-up'>
          <div className='max-w-2xl'>
            <span className='text-xs font-bold tracking-widest text-sage uppercase block mb-3'>Immersive Sanctuaries</span>
            <h2 className='font-serif text-3xl sm:text-4xl font-bold text-charcoal dark:text-linen'>Our Curated Forest Spaces</h2>
          </div>
          <p className='text-sm sm:text-base text-slate dark:text-linen/70 max-w-md leading-relaxed'>
            Designed with natural timber, minimal glass walls, and organic textiles to place you directly in the forest canopy.
          </p>
        </div>

        <RoomSlider />
      </section>
    </>
  );
}
