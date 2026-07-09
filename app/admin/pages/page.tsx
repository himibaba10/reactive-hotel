import { FileEdit, Plus, Globe } from 'lucide-react';
import Link from 'next/link';

export default function AdminPagesPage() {
  const pages = [
    { title: 'Home', path: '/', lastUpdated: 'Oct 10, 2026', status: 'Published' },
    { title: 'About Us', path: '/about', lastUpdated: 'Sep 28, 2026', status: 'Published' },
    { title: 'Our Rooms', path: '/rooms', lastUpdated: 'Oct 05, 2026', status: 'Published' },
    { title: 'Gallery', path: '/gallery', lastUpdated: 'Oct 11, 2026', status: 'Published' },
    { title: 'Contact', path: '/contact', lastUpdated: 'Sep 15, 2026', status: 'Published' },
    { title: 'Sustainability', path: '/sustainability', lastUpdated: 'Oct 12, 2026', status: 'Draft' },
  ];

  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
        <div>
          <h1 className='font-serif text-3xl font-bold text-charcoal dark:text-linen'>Pages (CMS)</h1>
          <p className='text-slate dark:text-linen/70 mt-1'>Manage website content and create new static pages.</p>
        </div>
        <button className='btn-primary flex items-center gap-2'>
          <Plus size={18} />
          Create New Page
        </button>
      </div>

      <div className='bg-white dark:bg-charcoal border border-charcoal/5 dark:border-linen/5 rounded-2xl shadow-sm overflow-hidden'>
        <div className='overflow-x-auto'>
          <table className='w-full text-left border-collapse'>
            <thead>
              <tr className='bg-sand-light/50 dark:bg-charcoal-light border-b border-charcoal/10 dark:border-linen/10'>
                <th className='p-4 text-xs font-bold tracking-widest text-slate dark:text-linen/60 uppercase'>Page Title</th>
                <th className='p-4 text-xs font-bold tracking-widest text-slate dark:text-linen/60 uppercase'>URL Path</th>
                <th className='p-4 text-xs font-bold tracking-widest text-slate dark:text-linen/60 uppercase'>Last Updated</th>
                <th className='p-4 text-xs font-bold tracking-widest text-slate dark:text-linen/60 uppercase'>Status</th>
                <th className='p-4 text-xs font-bold tracking-widest text-slate dark:text-linen/60 uppercase text-right'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {pages.map((page, i) => (
                <tr key={i} className='border-b border-charcoal/5 dark:border-linen/5 last:border-0 hover:bg-sand-light/20 dark:hover:bg-charcoal-light/50 transition-colors'>
                  <td className='p-4 font-bold text-charcoal dark:text-linen'>{page.title}</td>
                  <td className='p-4 text-sm text-slate dark:text-linen/70'>{page.path}</td>
                  <td className='p-4 text-sm text-slate dark:text-linen/70'>{page.lastUpdated}</td>
                  <td className='p-4'>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold
                      ${page.status === 'Published' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'}
                    `}>
                      {page.status}
                    </span>
                  </td>
                  <td className='p-4 flex justify-end gap-2'>
                    {page.status === 'Published' && (
                      <Link href={page.path} target="_blank" className='text-slate hover:text-sage dark:text-linen/50 dark:hover:text-sand p-2 rounded-lg hover:bg-sand-light dark:hover:bg-charcoal-light transition-colors' title="View Live">
                        <Globe size={18} />
                      </Link>
                    )}
                    <button className='text-slate hover:text-charcoal dark:text-linen/50 dark:hover:text-linen p-2 rounded-lg hover:bg-sand-light dark:hover:bg-charcoal-light transition-colors' title="Edit Page">
                      <FileEdit size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
