import type { Metadata } from 'next';
import { Inter, Lora } from 'next/font/google';
import Footer from './components/Footer';
import Header from './components/Header';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Verdant Haven | Luxury Nature Resort & Spa',
  description: 'Experience premium, eco-friendly luxury nestled deep within a sunlit, plant-filled forest. Reconnect with nature at Verdant Haven Resort.',
};

import AosInit from './components/AosInit';
import { ThemeProvider } from './components/ThemeProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${inter.variable} ${lora.variable} h-full antialiased`} suppressHydrationWarning>
      <body className='min-h-full flex flex-col bg-background text-foreground font-sans'>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <AosInit />
          <Header />
          <div className='grow flex flex-col'>{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
