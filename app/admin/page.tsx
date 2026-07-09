import { CalendarCheck, DollarSign, TrendingUp, Users } from 'lucide-react';

export default function AdminOverviewPage() {
  return (
    <div className='flex flex-col gap-8'>
      <div>
        <h1 className='font-serif text-3xl font-bold text-charcoal dark:text-linen'>Dashboard Overview</h1>
        <p className='text-slate dark:text-linen/70 mt-1'>Welcome back. Here is what&apos;s happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'>
        <div className='bg-white dark:bg-charcoal border border-charcoal/5 dark:border-linen/5 rounded-2xl p-6 shadow-sm flex items-start gap-4'>
          <div className='p-3 bg-sage/10 text-sage dark:bg-sand/10 dark:text-sand rounded-xl'>
            <DollarSign size={24} />
          </div>
          <div>
            <p className='text-xs font-bold tracking-widest text-slate dark:text-linen/50 uppercase mb-1'>Total Revenue</p>
            <p className='font-serif text-2xl font-bold text-charcoal dark:text-linen'>$124,500</p>
            <p className='text-xs text-green-500 mt-1 flex items-center gap-1'>
              <TrendingUp size={12} /> +12% this month
            </p>
          </div>
        </div>

        <div className='bg-white dark:bg-charcoal border border-charcoal/5 dark:border-linen/5 rounded-2xl p-6 shadow-sm flex items-start gap-4'>
          <div className='p-3 bg-sage/10 text-sage dark:bg-sand/10 dark:text-sand rounded-xl'>
            <CalendarCheck size={24} />
          </div>
          <div>
            <p className='text-xs font-bold tracking-widest text-slate dark:text-linen/50 uppercase mb-1'>Active Bookings</p>
            <p className='font-serif text-2xl font-bold text-charcoal dark:text-linen'>42</p>
            <p className='text-xs text-green-500 mt-1 flex items-center gap-1'>
              <TrendingUp size={12} /> +5% this month
            </p>
          </div>
        </div>

        <div className='bg-white dark:bg-charcoal border border-charcoal/5 dark:border-linen/5 rounded-2xl p-6 shadow-sm flex items-start gap-4'>
          <div className='p-3 bg-sage/10 text-sage dark:bg-sand/10 dark:text-sand rounded-xl'>
            <Users size={24} />
          </div>
          <div>
            <p className='text-xs font-bold tracking-widest text-slate dark:text-linen/50 uppercase mb-1'>Total Users</p>
            <p className='font-serif text-2xl font-bold text-charcoal dark:text-linen'>1,204</p>
            <p className='text-xs text-slate mt-1'>Stable</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className='bg-white dark:bg-charcoal border border-charcoal/5 dark:border-linen/5 rounded-2xl p-6 shadow-sm mt-4'>
        <h2 className='font-serif text-xl font-bold text-charcoal dark:text-linen mb-6'>Recent Activity</h2>
        <div className='flex flex-col gap-4'>
          {[1, 2, 3].map((_, i) => (
            <div key={i} className='flex items-center justify-between py-3 border-b border-charcoal/5 dark:border-linen/5 last:border-0'>
              <div className='flex items-center gap-4'>
                <div className='w-10 h-10 rounded-full bg-sand-light dark:bg-charcoal-light flex items-center justify-center text-sage font-bold'>JD</div>
                <div>
                  <p className='text-sm font-bold text-charcoal dark:text-linen'>John Doe booked The Canopy Suite</p>
                  <p className='text-xs text-slate dark:text-linen/50'>Oct 12 - Oct 15</p>
                </div>
              </div>
              <span className='text-xs font-bold text-sage bg-sage/10 px-3 py-1 rounded-full'>Just now</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
