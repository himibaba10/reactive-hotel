import ContactHeroSection from '../components/contact/ContactHeroSection';
import ContactInfoSection from '../components/contact/ContactInfoSection';
import ContactFormSection from '../components/contact/ContactFormSection';
import FAQSection from '../components/contact/FAQSection';

export default function ContactPage() {
  return (
    <div className='flex flex-col min-h-screen w-full'>
      <ContactHeroSection />
      <ContactInfoSection />
      <ContactFormSection />
      <FAQSection />
    </div>
  );
}
