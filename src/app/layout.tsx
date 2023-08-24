import '@styles/globals.css';
import { Inter } from 'next/font/google';

import Navbar from '@components/navbar';

import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Incognito Holidays',
  description: 'Your travel companion'
};

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
