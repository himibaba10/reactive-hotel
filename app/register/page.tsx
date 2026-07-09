import RegisterForm from '../components/auth/RegisterForm';
import Image from 'next/image';

export default function RegisterPage() {
  return (
    <div className='min-h-screen w-full flex items-center justify-center relative py-20 px-6'>
      <div className='absolute inset-0 z-0'>
        <Image 
          src='https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2000'
          alt='Villa background'
          fill
          priority
          className='object-cover'
        />
        <div className='absolute inset-0 bg-charcoal/60 backdrop-blur-sm' />
      </div>
      
      <RegisterForm />
    </div>
  );
}
