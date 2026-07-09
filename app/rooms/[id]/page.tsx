import { notFound } from 'next/navigation';
import { getRoomById, roomsData } from '../../data/rooms';
import RoomDetailHero from '../../components/rooms/RoomDetailHero';
import RoomAmenities from '../../components/rooms/RoomAmenities';
import RoomBookingSidebar from '../../components/rooms/RoomBookingSidebar';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export function generateStaticParams() {
  return roomsData.map((room) => ({
    id: room.id,
  }));
}

export default async function SingleRoomPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const room = getRoomById(id);

  if (!room) {
    notFound();
  }

  return (
    <div className='flex flex-col min-h-screen w-full bg-sand-light/30 dark:bg-charcoal/20 pb-20'>
      <RoomDetailHero images={room.images} />
      
      <div className='max-w-7xl mx-auto px-6 w-full mt-12 mb-8'>
        <Link href="/rooms" className='inline-flex items-center gap-2 text-sm font-semibold text-slate dark:text-linen/60 hover:text-sage dark:hover:text-sand transition-colors'>
          <ArrowLeft size={16} />
          Back to all rooms
        </Link>
      </div>

      <div className='max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative'>
        {/* Left Column: Details */}
        <div className='lg:col-span-7 xl:col-span-8 flex flex-col gap-10'>
          <div data-aos='fade-up'>
            <h1 className='font-serif text-4xl sm:text-5xl font-bold text-charcoal dark:text-linen mb-6'>{room.name}</h1>
            <p className='text-lg text-slate dark:text-linen/80 leading-relaxed font-light'>
              {room.longDescription}
            </p>
          </div>

          <RoomAmenities room={room} />
        </div>

        {/* Right Column: Sticky Booking Sidebar */}
        <div className='lg:col-span-5 xl:col-span-4 relative' data-aos='fade-up' data-aos-delay='200'>
          <RoomBookingSidebar price={room.price} roomId={room.id} />
        </div>
      </div>
    </div>
  );
}
