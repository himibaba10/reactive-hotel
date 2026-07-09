'use client';

import { Calendar, Users } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface RoomBookingSidebarProps {
  price: number;
  roomId: string;
}

export default function RoomBookingSidebar({ price, roomId }: RoomBookingSidebarProps) {
  const [guests, setGuests] = useState(2);
  const [nights, setNights] = useState(1);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <div className='bg-white dark:bg-charcoal border border-sage/20 dark:border-linen/10 rounded-3xl p-8 shadow-xl sticky top-32'>
      <div className='flex items-end gap-2 mb-8 border-b border-charcoal/10 dark:border-linen/10 pb-6'>
        <span className='font-serif text-4xl font-bold text-charcoal dark:text-linen'>${price}</span>
        <span className='text-slate dark:text-linen/60 mb-1'>/ night</span>
      </div>

      <div className='flex flex-col gap-4 mb-8'>
        {/* Dates */}
        <div className='flex flex-col gap-2'>
          <label className='text-xs font-bold tracking-widest text-sage dark:text-sand uppercase'>Dates</label>
          <div className='flex items-center gap-3 bg-sand-light/50 dark:bg-charcoal/50 border border-charcoal/10 dark:border-linen/10 rounded-xl px-4 py-3'>
            <Calendar size={18} className='text-slate dark:text-linen/60 shrink-0' />
            <DatePicker
              selectsRange={true}
              startDate={startDate ?? undefined}
              endDate={endDate ?? undefined}
              onChange={(update: [Date | null, Date | null]) => {
                setDateRange(update);
                if (update[0] && update[1]) {
                  const diffTime = Math.abs(update[1].getTime() - update[0].getTime());
                  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                  setNights(diffDays || 1);
                }
              }}
              placeholderText='Check-in - Check-out'
              className='bg-transparent border-none focus:outline-none text-charcoal dark:text-linen w-full text-sm'
              wrapperClassName='w-full'
            />
          </div>
        </div>

        {/* Guests */}
        <div className='flex flex-col gap-2'>
          <label className='text-xs font-bold tracking-widest text-sage dark:text-sand uppercase'>Guests</label>
          <div className='flex items-center gap-3 bg-sand-light/50 dark:bg-charcoal/50 border border-charcoal/10 dark:border-linen/10 rounded-xl px-4 py-3'>
            <Users size={18} className='text-slate dark:text-linen/60 shrink-0' />
            <select
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className='bg-transparent border-none focus:outline-none text-charcoal dark:text-linen w-full text-sm appearance-none cursor-pointer'
            >
              <option value={1}>1 Guest</option>
              <option value={2}>2 Guests</option>
              <option value={3}>3 Guests</option>
              <option value={4}>4 Guests</option>
            </select>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-3 mb-8 text-sm text-slate dark:text-linen/70'>
        <div className='flex justify-between'>
          <span>
            ${price} x {nights} night(s)
          </span>
          <span>${price * nights}</span>
        </div>
        <div className='flex justify-between'>
          <span>Resort Fee</span>
          <span>$50</span>
        </div>
        <div className='flex justify-between pt-3 border-t border-charcoal/10 dark:border-linen/10 font-bold text-charcoal dark:text-linen text-lg'>
          <span>Total</span>
          <span>${price * nights + 50}</span>
        </div>
      </div>

      <Link href={`/checkout/${roomId}`} className='btn-primary w-full flex justify-center'>
        Reserve Now
      </Link>
      <p className='text-center text-xs text-slate dark:text-linen/50 mt-4'>You won&apos;t be charged yet</p>
    </div>
  );
}
