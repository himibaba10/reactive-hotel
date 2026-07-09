import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
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
          <h1 className='font-serif text-3xl md:text-5xl font-bold text-charcoal dark:text-linen mb-4'>Privacy Policy</h1>
          <p className='text-sm text-slate dark:text-linen/50 mb-12'>Last updated: October 2026</p>

          <div className='flex flex-col gap-6 text-slate dark:text-linen/75 leading-relaxed'>
            <h2 className='font-serif text-2xl font-bold text-charcoal dark:text-linen mt-4'>1. Introduction</h2>
            <p>
              Welcome to Verdant Haven. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when
              you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
            </p>

            <h2 className='font-serif text-2xl font-bold text-charcoal dark:text-linen mt-4'>2. The Data We Collect About You</h2>
            <p>
              Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of
              personal data about you which we have grouped together as follows:
            </p>
            <ul className='list-disc pl-6 flex flex-col gap-2'>
              <li>
                <strong className='text-charcoal dark:text-linen'>Identity Data:</strong> includes first name, last name, username or similar identifier.
              </li>
              <li>
                <strong className='text-charcoal dark:text-linen'>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.
              </li>
              <li>
                <strong className='text-charcoal dark:text-linen'>Financial Data:</strong> includes bank account and payment card details.
              </li>
              <li>
                <strong className='text-charcoal dark:text-linen'>Transaction Data:</strong> includes details about payments to and from you and other details of products and services you have
                purchased from us.
              </li>
            </ul>

            <h2 className='font-serif text-2xl font-bold text-charcoal dark:text-linen mt-4'>3. How We Use Your Personal Data</h2>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul className='list-disc pl-6 flex flex-col gap-2'>
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>

            <h2 className='font-serif text-2xl font-bold text-charcoal dark:text-linen mt-4'>4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition,
              we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>

            <h2 className='font-serif text-2xl font-bold text-charcoal dark:text-linen mt-4'>5. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at{' '}
              <a href='mailto:privacy@verdanthaven.com' className='text-sage hover:text-sage-hover dark:text-sand dark:hover:text-sand-hover transition-colors font-bold'>
                privacy@verdanthaven.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
