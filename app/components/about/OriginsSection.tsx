import Image from 'next/image';

export default function OriginsSection() {
  return (
    <section className='py-20 bg-sand-light dark:bg-charcoal/50 border-y border-charcoal/5 dark:border-linen/5'>
      <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
        <div className='flex flex-col gap-6' data-aos='fade-up'>
          <span className='text-xs font-bold tracking-widest text-sage uppercase'>Our Origins</span>
          <h2 className='font-serif text-3xl sm:text-4xl font-bold text-charcoal dark:text-linen leading-tight'>A Vision Born from the Forest</h2>
          <p className='text-sm sm:text-base text-slate dark:text-linen/75 leading-relaxed'>
            Verdant Haven began as a simple dream: to create a sanctuary where modern luxury and untamed nature could exist in perfect harmony. Founded in 2018 by visionary architects, our resort was
            designed to be completely invisible from the sky, blending seamlessly into the canopy.
          </p>
          <p className='text-sm sm:text-base text-slate dark:text-linen/75 leading-relaxed'>
            We spent years studying the local ecosystem before a single stone was laid, ensuring that our presence would protect the forest rather than disrupt it. Today, we stand as a testament to
            the fact that high-end hospitality doesn&apos;t have to cost the earth.
          </p>
        </div>

        <div className='relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl' data-aos='fade-up' data-aos-delay='200'>
          <Image
            src='https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1000'
            alt='Vintage architectural sketch of forest cabin'
            fill
            className='object-cover'
            sizes='(max-width: 768px) 100vw, 50vw'
          />
        </div>
      </div>
    </section>
  );
}
