import { User, Mail, Phone, MapPin, Shield } from 'lucide-react';

export default function UserProfilePage() {
  return (
    <div className='flex flex-col gap-8'>
      <div>
        <h1 className='font-serif text-3xl font-bold text-charcoal dark:text-linen'>Profile Settings</h1>
        <p className='text-slate dark:text-linen/70 mt-1'>Update your personal details and preferences.</p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {/* Main Form */}
        <div className='lg:col-span-2 flex flex-col gap-8'>
          
          <div className='bg-white dark:bg-charcoal border border-charcoal/5 dark:border-linen/5 rounded-3xl p-8 shadow-sm'>
            <h2 className='font-serif text-xl font-bold text-charcoal dark:text-linen mb-6'>Personal Information</h2>
            
            <form className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='flex flex-col gap-2'>
                <label className='text-xs font-bold tracking-widest text-sage dark:text-sand uppercase'>First Name</label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                    <User size={18} className='text-slate dark:text-linen/50' />
                  </div>
                  <input type='text' defaultValue='John' className='w-full pl-11 pr-4 py-3 bg-sand-light/50 dark:bg-charcoal-light/50 border border-charcoal/10 dark:border-linen/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage/50 text-charcoal dark:text-linen' />
                </div>
              </div>

              <div className='flex flex-col gap-2'>
                <label className='text-xs font-bold tracking-widest text-sage dark:text-sand uppercase'>Last Name</label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                    <User size={18} className='text-slate dark:text-linen/50' />
                  </div>
                  <input type='text' defaultValue='Doe' className='w-full pl-11 pr-4 py-3 bg-sand-light/50 dark:bg-charcoal-light/50 border border-charcoal/10 dark:border-linen/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage/50 text-charcoal dark:text-linen' />
                </div>
              </div>

              <div className='flex flex-col gap-2 md:col-span-2'>
                <label className='text-xs font-bold tracking-widest text-sage dark:text-sand uppercase'>Email Address</label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                    <Mail size={18} className='text-slate dark:text-linen/50' />
                  </div>
                  <input type='email' defaultValue='john.doe@example.com' className='w-full pl-11 pr-4 py-3 bg-sand-light/50 dark:bg-charcoal-light/50 border border-charcoal/10 dark:border-linen/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage/50 text-charcoal dark:text-linen' />
                </div>
              </div>

              <div className='flex flex-col gap-2'>
                <label className='text-xs font-bold tracking-widest text-sage dark:text-sand uppercase'>Phone Number</label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                    <Phone size={18} className='text-slate dark:text-linen/50' />
                  </div>
                  <input type='tel' defaultValue='+1 (555) 123-4567' className='w-full pl-11 pr-4 py-3 bg-sand-light/50 dark:bg-charcoal-light/50 border border-charcoal/10 dark:border-linen/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage/50 text-charcoal dark:text-linen' />
                </div>
              </div>

              <div className='flex flex-col gap-2'>
                <label className='text-xs font-bold tracking-widest text-sage dark:text-sand uppercase'>Country</label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                    <MapPin size={18} className='text-slate dark:text-linen/50' />
                  </div>
                  <input type='text' defaultValue='United States' className='w-full pl-11 pr-4 py-3 bg-sand-light/50 dark:bg-charcoal-light/50 border border-charcoal/10 dark:border-linen/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage/50 text-charcoal dark:text-linen' />
                </div>
              </div>
              
              <div className='md:col-span-2 flex justify-end mt-4'>
                <button type='button' className='btn-primary'>Save Changes</button>
              </div>
            </form>
          </div>

          <div className='bg-white dark:bg-charcoal border border-charcoal/5 dark:border-linen/5 rounded-3xl p-8 shadow-sm'>
            <h2 className='font-serif text-xl font-bold text-charcoal dark:text-linen mb-6 flex items-center gap-2'>
              <Shield size={20} className='text-sage dark:text-sand' />
              Security
            </h2>
            <form className='flex flex-col gap-6 max-w-md'>
              <div className='flex flex-col gap-2'>
                <label className='text-xs font-bold tracking-widest text-sage dark:text-sand uppercase'>Current Password</label>
                <input type='password' placeholder='••••••••' className='w-full px-4 py-3 bg-sand-light/50 dark:bg-charcoal-light/50 border border-charcoal/10 dark:border-linen/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage/50 text-charcoal dark:text-linen' />
              </div>
              <div className='flex flex-col gap-2'>
                <label className='text-xs font-bold tracking-widest text-sage dark:text-sand uppercase'>New Password</label>
                <input type='password' placeholder='••••••••' className='w-full px-4 py-3 bg-sand-light/50 dark:bg-charcoal-light/50 border border-charcoal/10 dark:border-linen/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage/50 text-charcoal dark:text-linen' />
              </div>
              <div className='flex justify-start mt-2'>
                <button type='button' className='px-6 py-2.5 rounded-xl border border-charcoal/10 dark:border-linen/10 text-sm font-bold text-charcoal dark:text-linen hover:bg-sand-light dark:hover:bg-charcoal-light transition-colors'>Update Password</button>
              </div>
            </form>
          </div>
        </div>

        {/* Sidebar info */}
        <div>
          <div className='bg-sage/10 dark:bg-sand/5 border border-sage/20 dark:border-sand/20 rounded-3xl p-8 sticky top-8'>
            <h3 className='font-serif text-lg font-bold text-charcoal dark:text-linen mb-4'>Need Assistance?</h3>
            <p className='text-sm text-slate dark:text-linen/70 mb-6'>
              Our concierge team is available 24/7 to help you with your profile, bookings, or any special requests.
            </p>
            <div className='flex flex-col gap-4'>
              <a href='mailto:concierge@verdanthaven.com' className='text-sm font-bold text-sage dark:text-sand flex items-center gap-2 hover:underline'>
                <Mail size={16} /> concierge@verdanthaven.com
              </a>
              <a href='tel:+15415550199' className='text-sm font-bold text-sage dark:text-sand flex items-center gap-2 hover:underline'>
                <Phone size={16} /> +1 (541) 555-0199
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
