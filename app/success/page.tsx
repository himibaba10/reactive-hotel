'use client';

import { ArrowRight, CalendarDays, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function SuccessPage() {
  const [bookingId, setBookingId] = useState('');

  useEffect(() => {
    setBookingId(`VH-${Math.floor(1000 + Math.random() * 9000)}`);
  }, []);

  return (
    <div className='min-h-screen bg-sand-light/30 dark:bg-[#1A1A1A] py-20 px-6 flex items-center justify-center'>
      <div className='max-w-2xl w-full bg-white dark:bg-charcoal border border-charcoal/5 dark:border-linen/5 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col items-center text-center relative overflow-hidden' data-aos='fade-up'>
        {/* Decorative background circle */}
        <div className='absolute -top-32 -right-32 w-64 h-64 bg-sage/10 dark:bg-sand/5 rounded-full blur-3xl'></div>
        <div className='absolute -bottom-32 -left-32 w-64 h-64 bg-sage/10 dark:bg-sand/5 rounded-full blur-3xl'></div>

        <div className='relative z-10 w-full flex flex-col items-center'>
          <div className='w-24 h-24 bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400 rounded-full flex items-center justify-center mb-8'>
            <CheckCircle2 size={48} className='stroke-[1.5]' />
          </div>

          <h1 className='font-serif text-4xl md:text-5xl font-bold text-charcoal dark:text-linen mb-4'>Booking Confirmed!</h1>
          <p className='text-lg text-slate dark:text-linen/80 mb-2'>Thank you for choosing Verdant Haven. Your sanctuary awaits.</p>
          <p className='text-sm text-slate dark:text-linen/60 mb-10'>
            We&apos;ve sent a confirmation email to <span className='font-bold text-charcoal dark:text-linen'>john@example.com</span>.
          </p>

          <div className='w-full bg-sand-light/50 dark:bg-charcoal-light border border-charcoal/10 dark:border-linen/10 rounded-2xl p-6 mb-10 text-left'>
            <p className='text-xs font-bold tracking-widest text-sage dark:text-sand uppercase mb-4'>Reservation Details</p>
            <div className='flex flex-col sm:flex-row justify-between gap-6'>
              <div>
                <p className='text-xs text-slate dark:text-linen/60 mb-1'>Booking ID</p>
                <p className='font-bold text-charcoal dark:text-linen'>{bookingId}</p>
              </div>
              <div>
                <p className='text-xs text-slate dark:text-linen/60 mb-1'>Room</p>
                <p className='font-bold text-charcoal dark:text-linen'>The Canopy Suite</p>
              </div>
              <div>
                <p className='text-xs text-slate dark:text-linen/60 mb-1'>Dates</p>
                <p className='font-bold text-charcoal dark:text-linen flex items-center gap-1.5'>
                  <CalendarDays size={14} className='text-sage dark:text-sand' />
                  Oct 12 - Oct 15
                </p>
              </div>
            </div>
          </div>

          <div className='flex flex-col sm:flex-row gap-4 w-full justify-center'>
            <Link href='/user/dashboard' className='btn-primary flex items-center justify-center gap-2 px-8'>
              View Dashboard
              <ArrowRight size={18} />
            </Link>
            <Link
              href='/'
              className='px-8 py-3 rounded-xl border border-charcoal/10 dark:border-linen/10 text-sm font-bold text-charcoal dark:text-linen hover:bg-sand-light dark:hover:bg-charcoal-light transition-colors flex items-center justify-center'
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
