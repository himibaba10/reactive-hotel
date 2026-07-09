'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className='w-8 h-8 flex items-center justify-center'></div>;

  const isDark = resolvedTheme === 'dark' || theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className='p-2 rounded-full text-slate dark:text-linen/80 hover:bg-charcoal/5 dark:hover:bg-linen/10 transition-colors focus:outline-none'
      aria-label='Toggle Dark Mode'
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
