import { Bell, Menu } from 'lucide-react';

export default function UserTopBar() {
  return (
    <header className='h-20 bg-white/80 dark:bg-charcoal/80 backdrop-blur-md border-b border-charcoal/10 dark:border-linen/10 px-4 md:px-8 flex items-center justify-between sticky top-0 z-40'>
      <div className='flex items-center gap-4'>
        <button className='p-2 md:hidden text-slate dark:text-linen/70 hover:text-sage dark:hover:text-sand transition-colors'>
          <Menu size={24} />
        </button>
        <h2 className='font-serif text-xl font-bold text-charcoal dark:text-linen hidden sm:block'>Welcome back, John</h2>
      </div>

      <div className='flex items-center gap-6'>
        {/* Notifications */}
        <button className='relative p-2 text-slate hover:text-charcoal dark:text-linen/70 dark:hover:text-linen transition-colors'>
          <Bell size={20} />
          <span className='absolute top-1.5 right-1.5 w-2 h-2 bg-sage dark:bg-sand rounded-full'></span>
        </button>

        {/* Profile Dropdown (Static) */}
        <div className='flex items-center gap-3 cursor-pointer'>
          <div className='text-right hidden md:block'>
            <p className='text-sm font-bold text-charcoal dark:text-linen'>John Doe</p>
            <p className='text-xs text-slate dark:text-linen/70'>john.doe@example.com</p>
          </div>
          <div className='w-10 h-10 rounded-full bg-sand-light dark:bg-charcoal-light border border-charcoal/10 dark:border-linen/10 flex items-center justify-center overflow-hidden'>
             <div className='text-sage font-bold font-serif'>JD</div>
          </div>
        </div>
      </div>
    </header>
  );
}
