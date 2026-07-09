"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, CalendarDays, Users, Image as ImageIcon, FileText, LogOut } from 'lucide-react';

export default function AdminSidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Overview', href: '/admin', icon: <LayoutDashboard size={20} /> },
    { name: 'Bookings', href: '/admin/bookings', icon: <CalendarDays size={20} /> },
    { name: 'Users', href: '/admin/users', icon: <Users size={20} /> },
    { name: 'Gallery', href: '/admin/gallery', icon: <ImageIcon size={20} /> },
    { name: 'Pages', href: '/admin/pages', icon: <FileText size={20} /> },
  ];

  return (
    <aside className='w-64 bg-white dark:bg-charcoal border-r border-charcoal/10 dark:border-linen/10 h-screen hidden md:flex flex-col sticky top-0'>
      <div className='p-6 border-b border-charcoal/10 dark:border-linen/10'>
        <Link href="/" className='font-serif text-2xl font-bold text-charcoal dark:text-linen tracking-tight'>
          Verdant Haven
        </Link>
        <span className='block text-xs font-bold tracking-widest text-sage uppercase mt-1'>Admin Panel</span>
      </div>

      <nav className='flex-1 p-4 flex flex-col gap-2'>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive ? 'bg-sage text-linen shadow-md' : 'text-slate dark:text-linen/70 hover:bg-sand-light dark:hover:bg-charcoal-light hover:text-charcoal dark:hover:text-linen'}`}
            >
              {item.icon}
              <span className='font-medium'>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className='p-4 border-t border-charcoal/10 dark:border-linen/10'>
        <Link href="/login" className='flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-all'>
          <LogOut size={20} />
          <span className='font-medium'>Sign Out</span>
        </Link>
      </div>
    </aside>
  );
}
