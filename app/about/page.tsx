import AboutHeroSection from '../components/about/AboutHeroSection';
import CoreValuesSection from '../components/about/CoreValuesSection';
import OriginsSection from '../components/about/OriginsSection';
import CTASection from '../components/home/CTASection';

export default function AboutPage() {
  return (
    <div className='flex flex-col min-h-screen w-full'>
      <AboutHeroSection />
      <OriginsSection />
      <CoreValuesSection />
      <CTASection />
    </div>
  );
}
