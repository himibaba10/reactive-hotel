import Image from 'next/image';
import { CalendarDays, MapPin, Receipt, XCircle } from 'lucide-react';

export default function UserBookingsPage() {
  const bookings = [
    {
      id: 'BK-1029',
      room: 'The Canopy Suite',
      image: 'https://images.unsplash.com/photo-1632743441209-8a09b8a37e25?q=80&w=1170',
      dates: 'Oct 12 - Oct 15, 2026',
      details: '2 Guests • 3 Nights',
      amount: '$1,250',
      status: 'Upcoming',
    },
    {
      id: 'BK-0912',
      room: 'Riverside Cabin',
      image: 'https://images.unsplash.com/photo-1518557984649-7b161c230cfa?q=80&w=1600',
      dates: 'Jun 05 - Jun 07, 2026',
      details: '2 Guests • 2 Nights',
      amount: '$850',
      status: 'Past',
    }
  ];

  return (
    <div className='flex flex-col gap-8'>
      <div>
        <h1 className='font-serif text-3xl font-bold text-charcoal dark:text-linen'>My Bookings</h1>
        <p className='text-slate dark:text-linen/70 mt-1'>View and manage all your reservations.</p>
      </div>

      <div className='flex flex-col gap-6'>
        {bookings.map((booking) => (
          <div key={booking.id} className='bg-white dark:bg-charcoal border border-charcoal/5 dark:border-linen/5 rounded-3xl overflow-hidden shadow-sm flex flex-col md:flex-row'>
            <div className='w-full md:w-1/4 relative min-h-[200px]'>
              <Image 
                src={booking.image} 
                alt={booking.room} 
                fill 
                className='object-cover'
              />
            </div>
            
            <div className='p-6 md:p-8 flex flex-col justify-center flex-1'>
              <div className='flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4'>
                <div>
                  <div className='flex items-center gap-3 mb-1'>
                    <h3 className='font-serif text-xl font-bold text-charcoal dark:text-linen'>{booking.room}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase
                      ${booking.status === 'Upcoming' ? 'bg-sage/10 text-sage dark:bg-sand/10 dark:text-sand' : 'bg-sand-light dark:bg-charcoal-light text-slate dark:text-linen/70'}
                    `}>
                      {booking.status}
                    </span>
                  </div>
                  <p className='text-xs font-bold tracking-widest text-slate dark:text-linen/50 uppercase'>Booking ID: {booking.id}</p>
                </div>
                <div className='text-left md:text-right'>
                  <p className='text-xs font-bold tracking-widest text-slate dark:text-linen/50 uppercase mb-1'>Total Paid</p>
                  <p className='font-serif text-xl font-bold text-charcoal dark:text-linen'>{booking.amount}</p>
                </div>
              </div>

              <div className='flex flex-col sm:flex-row gap-4 sm:gap-8 mb-6 pb-6 border-b border-charcoal/5 dark:border-linen/5'>
                <div className='flex items-center gap-2 text-sm text-slate dark:text-linen/70'>
                  <CalendarDays size={16} className='text-sage dark:text-sand' />
                  <span>{booking.dates}</span>
                </div>
                <div className='flex items-center gap-2 text-sm text-slate dark:text-linen/70'>
                  <MapPin size={16} className='text-sage dark:text-sand' />
                  <span>{booking.details}</span>
                </div>
              </div>

              <div className='flex items-center gap-3'>
                <button className='px-5 py-2.5 rounded-xl border border-charcoal/10 dark:border-linen/10 text-sm font-bold text-charcoal dark:text-linen hover:bg-sand-light dark:hover:bg-charcoal-light transition-colors flex items-center gap-2'>
                  <Receipt size={16} />
                  Download Invoice
                </button>
                {booking.status === 'Upcoming' && (
                  <button className='px-5 py-2.5 rounded-xl text-sm font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors flex items-center gap-2'>
                    <XCircle size={16} />
                    Cancel Reservation
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
