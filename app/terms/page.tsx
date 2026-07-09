import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TermsOfServicePage() {
  return (
    <div className='min-h-screen bg-sand-light/30 dark:bg-[#1A1A1A] py-20 px-6'>
      <div className='max-w-4xl mx-auto'>
        <div className='mb-8' data-aos='fade-up'>
          <Link
            href='/'
            className='inline-flex items-center gap-2 text-sm font-bold tracking-widest text-sage hover:text-sage-hover dark:text-sand dark:hover:text-sand-hover uppercase transition-colors'
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>

        <div className='bg-white dark:bg-charcoal border border-charcoal/5 dark:border-linen/5 rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl' data-aos='fade-up' data-aos-delay='100'>
          <h1 className='font-serif text-3xl md:text-5xl font-bold text-charcoal dark:text-linen mb-4'>Terms of Service</h1>
          <p className='text-sm text-slate dark:text-linen/50 mb-12'>Last updated: October 2026</p>

          <div className='flex flex-col gap-6 text-slate dark:text-linen/75 leading-relaxed'>
            <h2 className='font-serif text-2xl font-bold text-charcoal dark:text-linen mt-4'>1. Agreement to Terms</h2>
            <p>
              By accessing our website and booking a stay at Verdant Haven, you agree to be bound by these Terms of Service and to comply with all applicable laws and regulations. If you do not agree
              with any of these terms, you are prohibited from using or accessing this site.
            </p>

            <h2 className='font-serif text-2xl font-bold text-charcoal dark:text-linen mt-4'>2. Booking and Cancellation Policy</h2>
            <p>
              All bookings are subject to availability. A valid credit card is required to secure your reservation. Cancellations made within 48 hours of check-in may be subject to a fee equal to one
              night&apos;s stay. For special rates and packages, different cancellation policies may apply.
            </p>

            <h2 className='font-serif text-2xl font-bold text-charcoal dark:text-linen mt-4'>3. Resort Policies</h2>
            <ul className='list-disc pl-6 flex flex-col gap-2'>
              <li>
                <strong className='text-charcoal dark:text-linen'>Check-in/Check-out:</strong> Check-in is at 3:00 PM and check-out is at 11:00 AM.
              </li>
              <li>
                <strong className='text-charcoal dark:text-linen'>Smoking:</strong> Verdant Haven is a 100% smoke-free property to preserve the natural environment.
              </li>
              <li>
                <strong className='text-charcoal dark:text-linen'>Pets:</strong> While we love animals, to protect local wildlife, pets are not allowed on the property unless they are certified
                service animals.
              </li>
              <li>
                <strong className='text-charcoal dark:text-linen'>Eco-Guidelines:</strong> Guests must respect the natural surroundings, stay on marked trails, and adhere to our sustainability
                guidelines.
              </li>
            </ul>

            <h2 className='font-serif text-2xl font-bold text-charcoal dark:text-linen mt-4'>4. Limitation of Liability</h2>
            <p>
              Verdant Haven shall not be held liable for any damages that arise out of or are in connection with the use of our facilities, including but not limited to direct, indirect, incidental,
              punitive, and consequential damages, except where liability cannot be excluded by law.
            </p>

            <h2 className='font-serif text-2xl font-bold text-charcoal dark:text-linen mt-4'>5. Modifications to Terms</h2>
            <p>
              We reserve the right to revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then-current version of these Terms of
              Service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
