'use client';

import { Calendar, Search, Users } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function BookingWidget() {
  const router = useRouter();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to rooms catalog page with query parameters
    const params = new URLSearchParams();
    if (checkIn) params.append('checkIn', checkIn);
    if (checkOut) params.append('checkOut', checkOut);
    if (guests) params.append('guests', guests);
    router.push(`/rooms?${params.toString()}`);
  };

  return (
    <div className='w-full max-w-4xl mx-auto'>
      <form
        onSubmit={handleSearch}
        className='bg-white/45 dark:bg-charcoal/45 backdrop-blur-lg border border-white/40 dark:border-linen/10 shadow-[0_8px_32px_rgba(0,0,0,0.06)] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-5 items-end justify-between'
      >
        {/* Check In Date */}
        <div className='w-full flex-1 flex flex-col gap-2'>
          <label className='flex items-center gap-1.5 text-xs font-semibold tracking-wider text-charcoal dark:text-linen/80 uppercase'>
            <Calendar size={14} className='text-sage dark:text-sand' />
            <span>Check In</span>
          </label>
          <div className='relative'>
            <input
              type='date'
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className='w-full bg-linen/50 dark:bg-charcoal/50 border border-charcoal/40 dark:border-linen/40 rounded-xl px-4 py-3 text-sm text-charcoal dark:text-linen focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-all'
              required
            />
          </div>
        </div>

        {/* Check Out Date */}
        <div className='w-full flex-1 flex flex-col gap-2'>
          <label className='flex items-center gap-1.5 text-xs font-semibold tracking-wider text-charcoal dark:text-linen/80 uppercase'>
            <Calendar size={14} className='text-sage dark:text-sand' />
            <span>Check Out</span>
          </label>
          <div className='relative'>
            <input
              type='date'
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className='w-full bg-linen/50 dark:bg-charcoal/50 border border-charcoal/40 dark:border-linen/40 rounded-xl px-4 py-3 text-sm text-charcoal dark:text-linen focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-all'
              required
            />
          </div>
        </div>

        {/* Guests Count */}
        <div className='w-full flex-1 flex flex-col gap-2'>
          <label className='flex items-center gap-1.5 text-xs font-semibold tracking-wider text-charcoal dark:text-linen/80 uppercase'>
            <Users size={14} className='text-sage dark:text-sand' />
            <span>Guests</span>
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className='w-full bg-linen/50 dark:bg-charcoal/50 border border-charcoal/40 dark:border-linen/40 rounded-xl px-4 py-3 text-sm text-charcoal dark:text-linen focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-all appearance-none cursor-pointer'
          >
            <option value='1' className='bg-linen dark:bg-charcoal text-charcoal dark:text-linen'>
              1 Guest
            </option>
            <option value='2' className='bg-linen dark:bg-charcoal text-charcoal dark:text-linen'>
              2 Guests
            </option>
            <option value='3' className='bg-linen dark:bg-charcoal text-charcoal dark:text-linen'>
              3 Guests
            </option>
            <option value='4' className='bg-linen dark:bg-charcoal text-charcoal dark:text-linen'>
              4+ Guests
            </option>
          </select>
        </div>

        {/* Submit Action */}
        <div className='w-full md:w-auto'>
          <button className='btn-primary w-full md:w-auto rounded-xl!'>
            <Search size={16} />
            <span>Search Rooms</span>
          </button>
        </div>
      </form>
    </div>
  );
}
