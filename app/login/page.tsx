import LoginForm from '../components/auth/LoginForm';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className='min-h-screen w-full flex items-center justify-center relative py-20 px-6'>
      <div className='absolute inset-0 z-0'>
        <Image 
          src='https://images.unsplash.com/photo-1518557984649-7b161c230cfa?q=80&w=2000'
          alt='Forest background'
          fill
          priority
          className='object-cover'
        />
        <div className='absolute inset-0 bg-charcoal/60 backdrop-blur-sm' />
      </div>
      
      <LoginForm />
    </div>
  );
}
