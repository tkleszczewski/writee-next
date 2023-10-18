import type { Metadata } from 'next';

import '@/app/styles/style.css';

import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Writee | Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='zxx'>
      <body className='font-sans'>
        <Header />
        <main className='min-h-main mt-header pt-20'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
