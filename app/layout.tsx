'use client';

import Navbar from '@/components/Navbar';
import { Providers } from './providers';
import { Rubik } from 'next/font/google';

const rubik = Rubik({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={rubik.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
