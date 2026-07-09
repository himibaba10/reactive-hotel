import AboutSection from './components/home/AboutSection';
import CTASection from './components/home/CTASection';
import GallerySection from './components/home/GallerySection';
import HeroSection from './components/home/HeroSection';
import RoomsSection from './components/home/RoomsSection';
import ServicesSection from './components/home/ServicesSection';

export default function HomePage() {
  return (
    <div className='flex flex-col min-h-screen'>
      <HeroSection />
      <RoomsSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <CTASection />
    </div>
  );
}
