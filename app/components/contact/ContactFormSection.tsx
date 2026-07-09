"use client";

import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section className='py-20 bg-linen dark:bg-charcoal/30 border-y border-charcoal/5 dark:border-linen/5 w-full'>
      <div className='max-w-4xl mx-auto px-6'>
        <div className='text-center mb-12' data-aos='fade-up'>
          <span className='text-xs font-bold tracking-widest text-sage uppercase block mb-3'>Direct Inquiry</span>
          <h2 className='font-serif text-3xl sm:text-4xl font-bold text-charcoal dark:text-linen'>Send Us a Message</h2>
        </div>

        <div className='bg-white dark:bg-charcoal border border-sage/20 dark:border-linen/10 rounded-3xl p-8 sm:p-12 shadow-xl' data-aos='fade-up' data-aos-delay='200'>
          {submitted ? (
            <div className='text-center py-12 flex flex-col items-center gap-4 animate-fade-in'>
              <div className='w-16 h-16 bg-sage/20 text-sage rounded-full flex items-center justify-center mb-2'>
                <Send size={28} />
              </div>
              <h3 className='font-serif text-2xl font-bold text-charcoal dark:text-linen'>Message Sent Successfully</h3>
              <p className='text-slate dark:text-linen/70'>Our concierge team will be in touch with you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor='firstName' className='text-sm font-semibold text-charcoal dark:text-linen'>First Name</label>
                  <input required type='text' id='firstName' className='w-full px-4 py-3 rounded-xl bg-sand-light/50 dark:bg-charcoal border border-charcoal/10 dark:border-linen/10 focus:outline-none focus:ring-2 focus:ring-sage/50 dark:focus:ring-sand/50 transition-all text-charcoal dark:text-linen' placeholder='Jane' />
                </div>
                <div className='flex flex-col gap-2'>
                  <label htmlFor='lastName' className='text-sm font-semibold text-charcoal dark:text-linen'>Last Name</label>
                  <input required type='text' id='lastName' className='w-full px-4 py-3 rounded-xl bg-sand-light/50 dark:bg-charcoal border border-charcoal/10 dark:border-linen/10 focus:outline-none focus:ring-2 focus:ring-sage/50 dark:focus:ring-sand/50 transition-all text-charcoal dark:text-linen' placeholder='Doe' />
                </div>
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor='email' className='text-sm font-semibold text-charcoal dark:text-linen'>Email Address</label>
                <input required type='email' id='email' className='w-full px-4 py-3 rounded-xl bg-sand-light/50 dark:bg-charcoal border border-charcoal/10 dark:border-linen/10 focus:outline-none focus:ring-2 focus:ring-sage/50 dark:focus:ring-sand/50 transition-all text-charcoal dark:text-linen' placeholder='jane@example.com' />
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor='subject' className='text-sm font-semibold text-charcoal dark:text-linen'>Subject</label>
                <select id='subject' className='w-full px-4 py-3 rounded-xl bg-sand-light/50 dark:bg-charcoal border border-charcoal/10 dark:border-linen/10 focus:outline-none focus:ring-2 focus:ring-sage/50 dark:focus:ring-sand/50 transition-all text-charcoal dark:text-linen'>
                  <option value='reservation'>Reservation Inquiry</option>
                  <option value='event'>Events & Retreats</option>
                  <option value='press'>Press & Media</option>
                  <option value='other'>Other</option>
                </select>
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor='message' className='text-sm font-semibold text-charcoal dark:text-linen'>Message</label>
                <textarea required id='message' rows={5} className='w-full px-4 py-3 rounded-xl bg-sand-light/50 dark:bg-charcoal border border-charcoal/10 dark:border-linen/10 focus:outline-none focus:ring-2 focus:ring-sage/50 dark:focus:ring-sand/50 transition-all resize-none text-charcoal dark:text-linen' placeholder='How can we help you?'></textarea>
              </div>

              <button type='submit' disabled={isSubmitting} className='btn-primary w-full sm:w-auto self-end mt-2 disabled:opacity-70'>
                {isSubmitting ? (
                  <span className='animate-pulse'>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
