import { getRoomById } from '@/app/data/rooms';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { ShieldCheck, User, Mail, Phone, CreditCard, CalendarDays, Users } from 'lucide-react';
import Link from 'next/link';

export default async function CheckoutPage({ params }: { params: Promise<{ bookingId: string }> }) {
  const { bookingId } = await params;
  const room = getRoomById(bookingId);

  if (!room) {
    notFound();
  }

  // Assuming some mock booking details (usually these would come from search params or a store)
  const nights = 3;
  const guests = 2;
  const basePrice = room.price * nights;
  const taxes = basePrice * 0.12;
  const resortFee = 150;
  const total = basePrice + taxes + resortFee;

  return (
    <div className='min-h-screen bg-sand-light/30 dark:bg-[#1A1A1A] py-20 px-6'>
      <div className='max-w-6xl mx-auto'>
        <div className='mb-12'>
          <h1 className='font-serif text-3xl md:text-4xl font-bold text-charcoal dark:text-linen mb-2'>Complete your booking</h1>
          <p className='text-slate dark:text-linen/70'>Almost there! Secure your reservation at Verdant Haven.</p>
        </div>

        <div className='flex flex-col lg:flex-row gap-12'>
          {/* Left Column: Form */}
          <div className='flex-1 flex flex-col gap-10' data-aos='fade-up'>
            
            {/* Guest Details */}
            <section>
              <h2 className='font-serif text-2xl font-bold text-charcoal dark:text-linen mb-6'>Guest Information</h2>
              <div className='bg-white dark:bg-charcoal border border-charcoal/5 dark:border-linen/5 rounded-3xl p-8 shadow-sm'>
                <form className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div className='flex flex-col gap-2'>
                    <label className='text-xs font-bold tracking-widest text-sage dark:text-sand uppercase'>First Name</label>
                    <div className='relative'>
                      <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                        <User size={18} className='text-slate dark:text-linen/50' />
                      </div>
                      <input type='text' placeholder='John' className='w-full pl-11 pr-4 py-3 bg-sand-light/50 dark:bg-charcoal-light/50 border border-charcoal/10 dark:border-linen/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage/50 text-charcoal dark:text-linen' required />
                    </div>
                  </div>

                  <div className='flex flex-col gap-2'>
                    <label className='text-xs font-bold tracking-widest text-sage dark:text-sand uppercase'>Last Name</label>
                    <div className='relative'>
                      <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                        <User size={18} className='text-slate dark:text-linen/50' />
                      </div>
                      <input type='text' placeholder='Doe' className='w-full pl-11 pr-4 py-3 bg-sand-light/50 dark:bg-charcoal-light/50 border border-charcoal/10 dark:border-linen/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage/50 text-charcoal dark:text-linen' required />
                    </div>
                  </div>

                  <div className='flex flex-col gap-2 md:col-span-2'>
                    <label className='text-xs font-bold tracking-widest text-sage dark:text-sand uppercase'>Email Address</label>
                    <div className='relative'>
                      <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                        <Mail size={18} className='text-slate dark:text-linen/50' />
                      </div>
                      <input type='email' placeholder='john@example.com' className='w-full pl-11 pr-4 py-3 bg-sand-light/50 dark:bg-charcoal-light/50 border border-charcoal/10 dark:border-linen/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage/50 text-charcoal dark:text-linen' required />
                    </div>
                  </div>

                  <div className='flex flex-col gap-2 md:col-span-2'>
                    <label className='text-xs font-bold tracking-widest text-sage dark:text-sand uppercase'>Phone Number</label>
                    <div className='relative'>
                      <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                        <Phone size={18} className='text-slate dark:text-linen/50' />
                      </div>
                      <input type='tel' placeholder='+1 (555) 000-0000' className='w-full pl-11 pr-4 py-3 bg-sand-light/50 dark:bg-charcoal-light/50 border border-charcoal/10 dark:border-linen/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage/50 text-charcoal dark:text-linen' required />
                    </div>
                  </div>
                </form>
              </div>
            </section>

            {/* Payment Details */}
            <section>
              <h2 className='font-serif text-2xl font-bold text-charcoal dark:text-linen mb-6'>Payment Method</h2>
              <div className='bg-white dark:bg-charcoal border border-charcoal/5 dark:border-linen/5 rounded-3xl p-8 shadow-sm flex flex-col gap-6'>
                <div className='flex items-center gap-3 text-sm text-sage dark:text-sand mb-2'>
                  <ShieldCheck size={18} />
                  <span>Secure 256-bit encrypted payment</span>
                </div>
                
                <div className='flex flex-col gap-2'>
                  <label className='text-xs font-bold tracking-widest text-sage dark:text-sand uppercase'>Card Number</label>
                  <div className='relative'>
                    <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                      <CreditCard size={18} className='text-slate dark:text-linen/50' />
                    </div>
                    <input type='text' placeholder='0000 0000 0000 0000' className='w-full pl-11 pr-4 py-3 bg-sand-light/50 dark:bg-charcoal-light/50 border border-charcoal/10 dark:border-linen/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage/50 text-charcoal dark:text-linen tracking-widest' required />
                  </div>
                </div>

                <div className='grid grid-cols-2 gap-6'>
                  <div className='flex flex-col gap-2'>
                    <label className='text-xs font-bold tracking-widest text-sage dark:text-sand uppercase'>Expiry Date</label>
                    <input type='text' placeholder='MM/YY' className='w-full px-4 py-3 bg-sand-light/50 dark:bg-charcoal-light/50 border border-charcoal/10 dark:border-linen/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage/50 text-charcoal dark:text-linen text-center' required />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label className='text-xs font-bold tracking-widest text-sage dark:text-sand uppercase'>CVC</label>
                    <input type='text' placeholder='123' className='w-full px-4 py-3 bg-sand-light/50 dark:bg-charcoal-light/50 border border-charcoal/10 dark:border-linen/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage/50 text-charcoal dark:text-linen text-center' required />
                  </div>
                </div>
              </div>
            </section>
            
          </div>

          {/* Right Column: Order Summary */}
          <div className='w-full lg:w-96' data-aos='fade-up' data-aos-delay='200'>
            <div className='bg-white dark:bg-charcoal border border-charcoal/5 dark:border-linen/5 rounded-3xl p-8 shadow-xl sticky top-32'>
              <h2 className='font-serif text-xl font-bold text-charcoal dark:text-linen mb-6'>Booking Summary</h2>
              
              <div className='relative h-48 rounded-xl overflow-hidden mb-6'>
                <Image src={room.images[0]} alt={room.name} fill className='object-cover' />
              </div>
              
              <h3 className='font-serif text-xl font-bold text-charcoal dark:text-linen mb-2'>{room.name}</h3>
              
              <div className='flex flex-col gap-3 py-4 border-y border-charcoal/10 dark:border-linen/10 mb-6'>
                <div className='flex justify-between text-sm'>
                  <span className='text-slate dark:text-linen/70 flex items-center gap-2'>
                    <CalendarDays size={16} /> Dates
                  </span>
                  <span className='font-medium text-charcoal dark:text-linen'>Oct 12 - Oct 15</span>
                </div>
                <div className='flex justify-between text-sm'>
                  <span className='text-slate dark:text-linen/70 flex items-center gap-2'>
                    <Users size={16} /> Guests
                  </span>
                  <span className='font-medium text-charcoal dark:text-linen'>{guests} Guests</span>
                </div>
              </div>

              <div className='flex flex-col gap-3 mb-6'>
                <div className='flex justify-between text-sm'>
                  <span className='text-slate dark:text-linen/70'>${room.price} x {nights} nights</span>
                  <span className='font-medium text-charcoal dark:text-linen'>${basePrice.toLocaleString()}</span>
                </div>
                <div className='flex justify-between text-sm'>
                  <span className='text-slate dark:text-linen/70'>Resort Fee</span>
                  <span className='font-medium text-charcoal dark:text-linen'>${resortFee.toLocaleString()}</span>
                </div>
                <div className='flex justify-between text-sm'>
                  <span className='text-slate dark:text-linen/70'>Taxes (12%)</span>
                  <span className='font-medium text-charcoal dark:text-linen'>${taxes.toLocaleString()}</span>
                </div>
              </div>

              <div className='flex justify-between items-end mb-8 pt-6 border-t border-charcoal/10 dark:border-linen/10'>
                <span className='text-base font-bold tracking-widest text-charcoal dark:text-linen uppercase'>Total</span>
                <span className='font-serif text-3xl font-bold text-charcoal dark:text-linen'>${total.toLocaleString()}</span>
              </div>

              <Link href='/success' className='btn-primary w-full flex justify-center text-lg py-4'>
                Confirm Reservation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
