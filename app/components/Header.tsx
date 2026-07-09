'use client';

import { Compass, Menu, Sparkles, User, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (pathname.startsWith('/admin') || pathname.startsWith('/user')) return null;

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Rooms', href: '/rooms' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-linen/80 dark:bg-charcoal/80 backdrop-blur-md shadow-sm border-b border-charcoal/5 dark:border-linen/5 py-3' : 'bg-linen/40 dark:bg-charcoal/40 backdrop-blur-sm py-5'
      }`}
    >
      <div className='max-w-7xl mx-auto px-6 flex items-center justify-between'>
        {/* Brand Logo */}
        <Link href='/' className='flex items-center gap-2 group'>
          <div className='p-1.5 rounded-full bg-sage/10 text-sage dark:bg-sand/15 dark:text-sand transition-transform duration-300 group-hover:rotate-12'>
            <Compass size={20} className='stroke-[1.75]' />
          </div>
          <span className='font-serif text-lg font-bold tracking-widest text-charcoal dark:text-linen group-hover:text-sage dark:group-hover:text-sand transition-colors duration-300'>
            VERDANT HAVEN
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center gap-8'>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 relative py-1 ${
                isActive(link.href) ? 'text-sage dark:text-sand font-semibold' : 'text-slate dark:text-linen/80 hover:text-sage dark:hover:text-sand'
              }`}
            >
              {link.name}
              {isActive(link.href) && <span className='absolute bottom-0 left-0 w-full h-0.5 bg-sage dark:bg-sand rounded-full' />}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className='hidden md:flex items-center gap-5'>
          <ThemeToggle />
          <Link href='/login' className='flex items-center gap-2 text-sm font-medium text-slate hover:text-sage dark:text-linen/80 dark:hover:text-sand transition-colors duration-300'>
            <User size={16} />
            <span>Sign In</span>
          </Link>
          <Link href='/rooms' className='btn-primary-sm'>
            <Sparkles size={14} />
            <span>Book Now</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden flex items-center gap-3'>
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className='p-1 text-charcoal dark:text-linen focus:outline-none' aria-label='Toggle menu'>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className='md:hidden absolute top-full left-0 w-full bg-linen/95 dark:bg-charcoal/95 backdrop-blur-lg border-b border-charcoal/10 dark:border-linen/10 py-6 px-6 shadow-xl flex flex-col gap-6 animate-fade-in'>
          <nav className='flex flex-col gap-4'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium tracking-wide py-1 border-b border-charcoal/5 dark:border-linen/5 ${
                  isActive(link.href) ? 'text-sage dark:text-sand font-bold' : 'text-slate dark:text-linen/80'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className='flex flex-col gap-3 pt-2'>
            <Link
              href='/login'
              onClick={() => setIsOpen(false)}
              className='flex items-center justify-center gap-2 w-full py-2.5 rounded-full border border-charcoal/20 dark:border-linen/20 text-sm font-medium text-charcoal dark:text-linen hover:bg-charcoal/5 dark:hover:bg-linen/5 transition-all'
            >
              <User size={16} />
              <span>Sign In</span>
            </Link>
            <Link href='/rooms' className='btn-primary w-full rounded-xl!' onClick={() => setIsOpen(false)}>
              <Sparkles size={14} />
              <span>Book Now</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
