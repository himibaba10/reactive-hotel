'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Compass, LayoutDashboard, CalendarDays, User, LogOut } from 'lucide-react';
import ThemeToggle from '../ThemeToggle';

export default function UserSidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', path: '/user/dashboard', icon: LayoutDashboard },
    { name: 'My Bookings', path: '/user/bookings', icon: CalendarDays },
    { name: 'Profile Settings', path: '/user/profile', icon: User },
  ];

  return (
    <aside className='w-64 bg-white dark:bg-charcoal border-r border-charcoal/10 dark:border-linen/10 h-screen hidden md:flex flex-col sticky top-0'>
      <div className='p-6 flex items-center justify-between border-b border-charcoal/10 dark:border-linen/10'>
        <Link href='/' className='flex items-center gap-2 group'>
          <div className='p-1.5 rounded-full bg-sage/10 text-sage dark:bg-sand/15 dark:text-sand transition-transform duration-300 group-hover:rotate-12'>
            <Compass size={20} className='stroke-[1.75]' />
          </div>
          <span className='font-serif text-lg font-bold tracking-widest text-charcoal dark:text-linen'>HAVEN</span>
        </Link>
        <ThemeToggle />
      </div>

      <div className='flex-1 py-8 px-4 flex flex-col gap-2'>
        <div className='text-xs font-bold tracking-widest text-slate dark:text-linen/50 uppercase px-4 mb-2'>Guest Portal</div>
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link 
              key={item.name} 
              href={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                isActive 
                  ? 'bg-sage/10 text-sage dark:bg-sand/10 dark:text-sand font-bold' 
                  : 'text-slate dark:text-linen/70 hover:bg-sand-light dark:hover:bg-charcoal-light hover:text-charcoal dark:hover:text-linen'
              }`}
            >
              <item.icon size={20} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>

      <div className='p-4 border-t border-charcoal/10 dark:border-linen/10'>
        <Link 
          href='/login' 
          className='flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all duration-300'
        >
          <LogOut size={20} />
          <span>Sign Out</span>
        </Link>
      </div>
    </aside>
  );
}
