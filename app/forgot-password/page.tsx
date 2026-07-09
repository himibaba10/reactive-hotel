'use client';

import { ArrowLeft, ArrowRight, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ForgotPasswordPage() {
  return (
    <div className='min-h-screen w-full flex items-center justify-center relative py-20 px-6'>
      <div className='absolute inset-0 z-0'>
        <Image 
          src='https://images.unsplash.com/photo-1518557984649-7b161c230cfa?q=80&w=2000'
          alt='Forest background'
          fill
          priority
          className='object-cover'
        />
        <div className='absolute inset-0 bg-charcoal/60 backdrop-blur-sm' />
      </div>

      <div className='bg-white/80 dark:bg-charcoal/80 backdrop-blur-xl border border-white/50 dark:border-linen/10 rounded-3xl p-8 md:p-12 shadow-2xl w-full max-w-md mx-auto relative z-10'>
        <div className='text-center mb-8'>
          <h1 className='font-serif text-3xl font-bold text-charcoal dark:text-linen mb-2'>Reset Password</h1>
          <p className='text-slate dark:text-linen/70 text-sm'>Enter your email to receive a reset link</p>
        </div>

        <form className='flex flex-col gap-6'>
          <div className='flex flex-col gap-2'>
            <label className='text-xs font-bold tracking-widest text-sage dark:text-sand uppercase'>Email Address</label>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                <Mail size={18} className='text-slate dark:text-linen/50' />
              </div>
              <input
                type='email'
                placeholder='hello@example.com'
                className='w-full pl-11 pr-4 py-3 bg-white dark:bg-charcoal border border-charcoal/10 dark:border-linen/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage/50 dark:focus:ring-sand/50 text-charcoal dark:text-linen transition-all'
                required
              />
            </div>
          </div>

          <button type='button' className='btn-primary w-full flex justify-center items-center gap-2'>
            Send Reset Link
            <ArrowRight size={18} />
          </button>
        </form>

        <div className='mt-8 text-center text-sm'>
          <Link href='/login' className='inline-flex items-center gap-2 text-slate dark:text-linen/70 hover:text-sage dark:hover:text-sand font-medium transition-colors'>
            <ArrowLeft size={16} />
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
