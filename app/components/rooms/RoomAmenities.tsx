import { BedDouble, CheckCircle2, Maximize, Mountain, Users } from 'lucide-react';

interface RoomAmenitiesProps {
  room: {
    guests: number;
    size: string;
    view: string;
    bedType: string;
    features: string[];
  };
}

export default function RoomAmenities({ room }: RoomAmenitiesProps) {
  return (
    <div className='flex flex-col gap-12' data-aos='fade-up'>
      {/* Quick Stats */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-charcoal/10 dark:border-linen/10'>
        <div className='flex flex-col gap-2'>
          <Users className='text-sage dark:text-sand' size={24} />
          <span className='text-sm text-slate dark:text-linen/70'>Capacity</span>
          <span className='font-serif font-bold text-charcoal dark:text-linen'>Up to {room.guests} Guests</span>
        </div>
        <div className='flex flex-col gap-2'>
          <Maximize className='text-sage dark:text-sand' size={24} />
          <span className='text-sm text-slate dark:text-linen/70'>Room Size</span>
          <span className='font-serif font-bold text-charcoal dark:text-linen'>{room.size}</span>
        </div>
        <div className='flex flex-col gap-2'>
          <BedDouble className='text-sage dark:text-sand' size={24} />
          <span className='text-sm text-slate dark:text-linen/70'>Bed Type</span>
          <span className='font-serif font-bold text-charcoal dark:text-linen'>{room.bedType}</span>
        </div>
        <div className='flex flex-col gap-2'>
          <Mountain className='text-sage dark:text-sand' size={24} />
          <span className='text-sm text-slate dark:text-linen/70'>View</span>
          <span className='font-serif font-bold text-charcoal dark:text-linen'>{room.view}</span>
        </div>
      </div>

      {/* Features List */}
      <div>
        <h3 className='font-serif text-2xl font-bold text-charcoal dark:text-linen mb-6'>Room Features</h3>
        <ul className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {room.features.map((feature, idx) => (
            <li key={idx} className='flex items-center gap-3'>
              <CheckCircle2 className='text-sage dark:text-sand flex-shrink-0' size={20} />
              <span className='text-slate dark:text-linen/80'>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Policies */}
      <div>
        <h3 className='font-serif text-2xl font-bold text-charcoal dark:text-linen mb-6'>Policies</h3>
        <div className='bg-sand-light dark:bg-charcoal/50 p-6 rounded-2xl flex flex-col gap-4 text-sm text-slate dark:text-linen/80 border border-charcoal/5 dark:border-linen/5'>
          <div className='flex justify-between border-b border-charcoal/5 dark:border-linen/5 pb-4'>
            <span className='font-semibold text-charcoal dark:text-linen'>Check-in</span>
            <span>3:00 PM - 8:00 PM</span>
          </div>
          <div className='flex justify-between border-b border-charcoal/5 dark:border-linen/5 pb-4'>
            <span className='font-semibold text-charcoal dark:text-linen'>Check-out</span>
            <span>11:00 AM</span>
          </div>
          <p className='mt-2'>Smoking is strictly prohibited in all rooms and decks. Pets are not allowed on the property to protect local wildlife.</p>
        </div>
      </div>
    </div>
  );
}
