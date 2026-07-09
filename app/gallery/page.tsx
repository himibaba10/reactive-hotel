import GalleryHeroSection from '../components/gallery/GalleryHeroSection';
import GalleryGridSection from '../components/gallery/GalleryGridSection';
import CTASection from '../components/home/CTASection';

export default function GalleryPage() {
  return (
    <div className='flex flex-col min-h-screen w-full bg-white dark:bg-charcoal'>
      <GalleryHeroSection />
      <GalleryGridSection />
      <CTASection />
    </div>
  );
}
