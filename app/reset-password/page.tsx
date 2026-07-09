'use client';

import { ArrowRight, Eye, EyeOff, Lock } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className='min-h-screen w-full flex items-center justify-center relative py-20 px-6'>
      <div className='absolute inset-0 z-0'>
        <Image src='https://images.unsplash.com/photo-1518557984649-7b161c230cfa?q=80&w=2000' alt='Forest background' fill priority className='object-cover' />
        <div className='absolute inset-0 bg-charcoal/60 backdrop-blur-sm' />
      </div>

      <div className='bg-white/80 dark:bg-charcoal/80 backdrop-blur-xl border border-white/50 dark:border-linen/10 rounded-3xl p-8 md:p-12 shadow-2xl w-full max-w-md mx-auto relative z-10' data-aos='fade-up'>
        <div className='text-center mb-8'>
          <h1 className='font-serif text-3xl font-bold text-charcoal dark:text-linen mb-2'>Create New Password</h1>
          <p className='text-slate dark:text-linen/70 text-sm'>Please enter your new password below</p>
        </div>

        <form className='flex flex-col gap-6'>
          <div className='flex flex-col gap-2'>
            <label className='text-xs font-bold tracking-widest text-sage dark:text-sand uppercase'>New Password</label>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                <Lock size={18} className='text-slate dark:text-linen/50' />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder='••••••••'
                className='w-full pl-11 pr-12 py-3 bg-white dark:bg-charcoal border border-charcoal/10 dark:border-linen/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage/50 dark:focus:ring-sand/50 text-charcoal dark:text-linen transition-all'
                required
              />
              <button
                type='button'
                onClick={() => setShowPassword(!showPassword)}
                className='absolute inset-y-0 right-0 pr-4 flex items-center text-slate hover:text-sage dark:text-linen/50 dark:hover:text-sand transition-colors'
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <label className='text-xs font-bold tracking-widest text-sage dark:text-sand uppercase'>Confirm Password</label>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                <Lock size={18} className='text-slate dark:text-linen/50' />
              </div>
              <input
                type={showConfirm ? 'text' : 'password'}
                placeholder='••••••••'
                className='w-full pl-11 pr-12 py-3 bg-white dark:bg-charcoal border border-charcoal/10 dark:border-linen/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage/50 dark:focus:ring-sand/50 text-charcoal dark:text-linen transition-all'
                required
              />
              <button
                type='button'
                onClick={() => setShowConfirm(!showConfirm)}
                className='absolute inset-y-0 right-0 pr-4 flex items-center text-slate hover:text-sage dark:text-linen/50 dark:hover:text-sand transition-colors'
              >
                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button type='button' className='btn-primary w-full flex justify-center items-center gap-2 mt-2'>
            Update Password
            <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}
