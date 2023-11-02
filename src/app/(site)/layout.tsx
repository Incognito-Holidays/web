import '@styles/global.css';
import Script from 'next/script';
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

const SiteRootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang='en'>
      <Script src='https://www.googletagmanager.com/gtag/js?id=G-Z6DY8YHM9W' />
      <Script id='google-analytics'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
      
          gtag('config', 'G-Z6DY8YHM9W');
        `}
      </Script>
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
