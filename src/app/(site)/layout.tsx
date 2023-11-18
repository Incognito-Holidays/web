/* eslint-disable jsx-quotes */
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
  title:
    'Best International Tours & Travel Agency in Kolkata & Chennai - Incognito Holidays',
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
      <meta
        property='og:title'
        content='Travel Agents Kolkata: Best Tour and Travel Agency in Kolkata | Incognito'
      />
      <meta property='og:site_name' content='Incognito Holidays' />{' '}
      <meta property='og:url' content='https://www.incognitoholidays.com' />{' '}
      <meta
        property='og:description'
        content='Browse the list of the best travel agency in Kolkata. Book your tour with Incognito Holidays top travel agency in Kolkata,Chennai for domestic and International trip.'
      />
      <meta property='og:type' content='Tour and Travel website' />{' '}
      <meta
        property='og:image'
        content='https://www.incognitoholidays.com/_next/image?url=%2Fassets%2Fpop-up.jpg&w=3840&q=75'
      />
      <link rel='canonical' href='https://www.incognitoholidays.com' />
      <meta
        name='description'
        content='Best Travel agency at Kolkata,Chennai offers famous travel agents for customized &amp; group tour packages, call our tour operators for International tour, Hotels, Flight etc.&nbsp;
'
      />
      <meta
        name='keyword'
        content='Incognito holidays is the best travel agency & package tour operator in  Kolkata.Thailand tour operator, Srilanka Tour,bali, indonesia packages,bali holiday packages including flights,thailand holiday packages,thailand trip cost from india'
      />
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
