import '@styles/global.css';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import Header from '@components/header';
import Footer from '@components/footer';
import Popup from '@components/popup';
import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Incognito Holidays',
  description: 'Your travel companion'
};

const SiteRootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <Toaster position='bottom-right' />
        <Popup />
      </body>
    </html>
  );
};

export default SiteRootLayout;
