import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, MapPin, Sparkles, CreditCard } from 'lucide-react';

export default function UserDashboardPage() {
  return (
    <div className='flex flex-col gap-8'>
      <div>
        <h1 className='font-serif text-3xl font-bold text-charcoal dark:text-linen'>Dashboard</h1>
        <p className='text-slate dark:text-linen/70 mt-1'>Manage your upcoming stays and personal information.</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {/* Next Stay Card */}
        <div className='md:col-span-2 bg-white dark:bg-charcoal border border-charcoal/5 dark:border-linen/5 rounded-3xl overflow-hidden shadow-sm flex flex-col sm:flex-row group'>
          <div className='w-full sm:w-2/5 relative min-h-[200px] overflow-hidden'>
            <Image 
              src='https://images.unsplash.com/photo-1632743441209-8a09b8a37e25?q=80&w=1170' 
              alt='The Canopy Suite' 
              fill 
              className='object-cover transition-transform duration-700 group-hover:scale-105'
            />
          </div>
          <div className='p-8 flex flex-col justify-center flex-1 relative'>
            <div className='absolute top-6 right-6 bg-sage/10 text-sage dark:bg-sand/10 dark:text-sand px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest'>Upcoming</div>
            <p className='text-xs font-bold tracking-widest text-slate dark:text-linen/50 uppercase mb-2'>Next Reservation</p>
            <h3 className='font-serif text-2xl font-bold text-charcoal dark:text-linen mb-2'>The Canopy Suite</h3>
            
            <div className='flex flex-col gap-2 mb-6'>
              <div className='flex items-center gap-2 text-sm text-slate dark:text-linen/70'>
                <CalendarDays size={16} className='text-sage dark:text-sand' />
                <span>Oct 12, 2026 - Oct 15, 2026</span>
              </div>
              <div className='flex items-center gap-2 text-sm text-slate dark:text-linen/70'>
                <MapPin size={16} className='text-sage dark:text-sand' />
                <span>2 Guests • 3 Nights</span>
              </div>
            </div>

            <Link href='/user/bookings' className='btn-primary self-start'>
              Manage Booking
            </Link>
          </div>
        </div>

        {/* Stats Column */}
        <div className='flex flex-col gap-6'>
          <div className='bg-white dark:bg-charcoal border border-charcoal/5 dark:border-linen/5 rounded-3xl p-6 shadow-sm flex items-start gap-4'>
            <div className='p-3 bg-sage/10 text-sage dark:bg-sand/10 dark:text-sand rounded-xl'>
              <Sparkles size={24} />
            </div>
            <div>
              <p className='text-xs font-bold tracking-widest text-slate dark:text-linen/50 uppercase mb-1'>Loyalty Points</p>
              <p className='font-serif text-2xl font-bold text-charcoal dark:text-linen'>2,450</p>
              <p className='text-xs text-sage dark:text-sand mt-1'>Gold Tier Member</p>
            </div>
          </div>
          
          <div className='bg-white dark:bg-charcoal border border-charcoal/5 dark:border-linen/5 rounded-3xl p-6 shadow-sm flex items-start gap-4'>
            <div className='p-3 bg-sage/10 text-sage dark:bg-sand/10 dark:text-sand rounded-xl'>
              <CreditCard size={24} />
            </div>
            <div>
              <p className='text-xs font-bold tracking-widest text-slate dark:text-linen/50 uppercase mb-1'>Saved Payment</p>
              <p className='font-serif text-xl font-bold text-charcoal dark:text-linen'>•••• 4242</p>
              <p className='text-xs text-slate dark:text-linen/70 mt-1'>Expires 12/28</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
