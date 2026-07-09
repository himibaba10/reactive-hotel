'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How do I get to Verdant Haven?',
      answer: 'We are located 45 minutes north of the regional airport. Detailed driving instructions are sent upon booking confirmation. We also offer private luxury transfer services upon request.',
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'Cancellations made 14 days or more in advance of the arrival date will receive a 100% refund. Cancellations made within 14 days will incur a 50% fee.',
    },
    {
      question: 'Are pets allowed?',
      answer: 'To protect the local wildlife ecosystem, we strictly do not allow pets of any kind on the resort premises.',
    },
    {
      question: 'Is there Wi-Fi in the rooms?',
      answer: 'Yes, high-speed fiber internet is available in all suites and common areas. However, we encourage digital detoxing and provide features to disable connectivity easily.',
    },
  ];

  return (
    <section className='py-20 max-w-4xl mx-auto px-6 w-full'>
      <div className='text-center mb-12' data-aos='fade-up'>
        <span className='text-xs font-bold tracking-widest text-sage uppercase block mb-3'>Information</span>
        <h2 className='font-serif text-3xl sm:text-4xl font-bold text-charcoal dark:text-linen'>Frequently Asked Questions</h2>
      </div>

      <div className='flex flex-col gap-4'>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-sage/50 dark:border-sand/50 bg-white dark:bg-charcoal shadow-md' : 'border-charcoal/10 dark:border-linen/10 bg-transparent'}`}
          >
            <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className='w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none'>
              <span className='font-serif font-bold text-lg text-charcoal dark:text-linen pr-4'>{faq.question}</span>
              <ChevronDown size={20} className={`text-sage transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} />
            </button>
            <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
              <p className='text-slate dark:text-linen/75 leading-relaxed'>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
