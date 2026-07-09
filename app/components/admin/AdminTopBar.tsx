import { Bell, Search, UserCircle } from 'lucide-react';

export default function AdminTopBar() {
  return (
    <header className='bg-white/80 dark:bg-charcoal/80 backdrop-blur-md border-b border-charcoal/10 dark:border-linen/10 h-20 sticky top-0 z-10 flex items-center justify-between px-8'>
      <div className='relative w-96 hidden md:block'>
        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
          <Search size={18} className='text-slate dark:text-linen/50' />
        </div>
        <input 
          type="text" 
          placeholder="Search bookings, users..."
          className='w-full pl-10 pr-4 py-2 bg-sand-light dark:bg-charcoal-light border border-charcoal/10 dark:border-linen/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage/50 text-sm text-charcoal dark:text-linen'
        />
      </div>

      <div className='flex items-center gap-6 ml-auto'>
        <button className='relative text-slate dark:text-linen/70 hover:text-sage transition-colors'>
          <Bell size={24} />
          <span className='absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-charcoal'></span>
        </button>
        <div className='flex items-center gap-3 pl-6 border-l border-charcoal/10 dark:border-linen/10 cursor-pointer group'>
          <div className='text-right hidden sm:block'>
            <p className='text-sm font-bold text-charcoal dark:text-linen group-hover:text-sage transition-colors'>Admin User</p>
            <p className='text-xs text-slate dark:text-linen/60'>General Manager</p>
          </div>
          <UserCircle size={36} className='text-sage dark:text-sand' />
        </div>
      </div>
    </header>
  );
}
