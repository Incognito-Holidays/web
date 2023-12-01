import '@styles/global.css';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import Header from '@components/header';
import Footer from '@components/footer';
import { ogFields } from './shared-metadata';
import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Incognito Holidays',
    default:
      'Best International Tours & Travel Agency in Kolkata & Chennai - Incognito Holidays'
  },
  description:
    'Best Travel agency at Kolkata & Chennai. Offers famous travel agents for customized & group tour packages, call our tour operators for Domestic and International tours, Hotels, Flight etc.',
  applicationName: 'Incognito Holidays tours & travel website',
  authors: [
    { name: 'Rajdeep Ghosh', url: 'https://github.com/rajdeep-ghosh' },
    { name: 'Parthib Sarkar', url: 'https://github.com/lucy2512' },
    { name: 'Debadyuti Karmakar', url: 'https://github.com/DEBADYUTI-KARMAKAR' }
  ],
  generator: 'Next.js',
  keywords: [
    'incognito holidays',
    'tours',
    'travels',
    'tours & travel',
    'domestic',
    'international',
    'holidays',
    'vacation',
    'hotels',
    'flights',
    'trains',
    'travel blog',
    'itinerary',
    'online & offline booking',
    'kolkata',
    'chennai'
  ],
  referrer: 'origin-when-cross-origin',
  creator: 'Sigma3 Labs',
  publisher: 'Sigma3 Labs',
  assets: [
    'https://www.incognitoholidays.com/assets',
    'https://www.incognitoholidays.com/_next/static',
    'https://www.incognitoholidays.com/_next/image'
  ],
  category: 'tours and travel',
  metadataBase: new URL(
    process.env.VERCEL_ENV === 'production'
      ? 'https://www.incognitoholidays.com/'
      : 'https://beta.incognitoholidays.com/'
  ),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: {
      template: '%s | Incognito Holidays',
      default:
        'Best International Tours & Travel Agency in Kolkata & Chennai - Incognito Holidays'
    },
    ...ogFields
  }
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
      </body>
    </html>
  );
};

export default SiteRootLayout;
