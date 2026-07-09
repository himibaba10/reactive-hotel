import { Upload, Trash2, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

export default function AdminGalleryPage() {
  const images = [
    'https://images.unsplash.com/photo-1632743441209-8a09b8a37e25?q=80&w=1170',
    'https://images.unsplash.com/photo-1518557984649-7b161c230cfa?q=80&w=1600',
    'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1600',
    'https://images.unsplash.com/photo-1475087542963-13ab5e611954?q=80&w=1170',
    'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600',
  ];

  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
        <div>
          <h1 className='font-serif text-3xl font-bold text-charcoal dark:text-linen'>Gallery Management</h1>
          <p className='text-slate dark:text-linen/70 mt-1'>Upload and organize images for the public gallery.</p>
        </div>
      </div>

      {/* Upload Zone */}
      <div className='border-2 border-dashed border-sage/40 dark:border-sand/40 rounded-3xl p-12 flex flex-col items-center justify-center text-center bg-sage/5 dark:bg-sand/5 hover:bg-sage/10 dark:hover:bg-sand/10 transition-colors cursor-pointer group'>
        <div className='w-16 h-16 bg-sage/20 dark:bg-sand/20 text-sage dark:text-sand rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform'>
          <Upload size={28} />
        </div>
        <h3 className='font-bold text-charcoal dark:text-linen text-lg'>Click to upload images</h3>
        <p className='text-sm text-slate dark:text-linen/60 mt-1'>SVG, PNG, JPG or GIF (max. 800x400px)</p>
      </div>

      {/* Image Grid */}
      <div>
        <h2 className='font-serif text-xl font-bold text-charcoal dark:text-linen mb-4'>Current Images</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {images.map((src, i) => (
            <div key={i} className='relative group rounded-xl overflow-hidden aspect-square border border-charcoal/10 dark:border-linen/10'>
              <Image 
                src={src} 
                alt={`Gallery image ${i + 1}`} 
                fill 
                className='object-cover'
              />
              {/* Overlay */}
              <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2'>
                <button className='p-2 bg-white/20 hover:bg-white/40 backdrop-blur text-white rounded-lg transition-colors' title="View">
                  <ImageIcon size={20} />
                </button>
                <button className='p-2 bg-red-500/80 hover:bg-red-500 backdrop-blur text-white rounded-lg transition-colors' title="Delete">
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
