'use client';

import Link from 'next/link';
import { Mail, Lock, User, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='bg-white/80 dark:bg-charcoal/80 backdrop-blur-xl border border-white/50 dark:border-linen/10 rounded-3xl p-8 md:p-12 shadow-2xl w-full max-w-xl mx-auto relative z-10' data-aos='fade-up'>
      <div className='text-center mb-8'>
        <h1 className='font-serif text-3xl font-bold text-charcoal dark:text-linen mb-2'>Join Haven</h1>
        <p className='text-slate dark:text-linen/70 text-sm'>Create your account to manage bookings</p>
      </div>

      <form className='flex flex-col gap-5'>
        <div className='flex flex-col gap-2'>
          <label className='text-xs font-bold tracking-widest text-sage dark:text-sand uppercase'>Full Name</label>
          <div className='relative'>
            <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
              <User size={18} className='text-slate dark:text-linen/50' />
            </div>
            <input 
              type="text" 
              placeholder="John Doe"
              className='w-full pl-11 pr-4 py-3 bg-white dark:bg-charcoal border border-charcoal/10 dark:border-linen/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage/50 dark:focus:ring-sand/50 text-charcoal dark:text-linen transition-all'
            />
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <label className='text-xs font-bold tracking-widest text-sage dark:text-sand uppercase'>Email</label>
          <div className='relative'>
            <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
              <Mail size={18} className='text-slate dark:text-linen/50' />
            </div>
            <input 
              type="email" 
              placeholder="hello@example.com"
              className='w-full pl-11 pr-4 py-3 bg-white dark:bg-charcoal border border-charcoal/10 dark:border-linen/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage/50 dark:focus:ring-sand/50 text-charcoal dark:text-linen transition-all'
            />
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <label className='text-xs font-bold tracking-widest text-sage dark:text-sand uppercase'>Password</label>
          <div className='relative'>
            <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
              <Lock size={18} className='text-slate dark:text-linen/50' />
            </div>
            <input 
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              className='w-full pl-11 pr-12 py-3 bg-white dark:bg-charcoal border border-charcoal/10 dark:border-linen/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage/50 dark:focus:ring-sand/50 text-charcoal dark:text-linen transition-all'
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className='absolute inset-y-0 right-0 pr-4 flex items-center text-slate hover:text-sage dark:text-linen/50 dark:hover:text-sand transition-colors'
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <Link href="/admin" className='btn-primary w-full flex justify-center items-center gap-2 mt-4'>
          Create Account
          <ArrowRight size={18} />
        </Link>
      </form>

      <div className='mt-8 text-center text-sm text-slate dark:text-linen/70'>
        Already have an account?{' '}
        <Link href="/login" className='font-bold text-sage dark:text-sand hover:underline'>
          Sign in
        </Link>
      </div>
    </div>
  );
}
