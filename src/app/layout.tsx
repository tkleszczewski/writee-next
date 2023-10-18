import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import './styles/style.css';

const inter = Inter({ subsets: ['latin'] });

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
      <body>{children}</body>
    </html>
  );
}
