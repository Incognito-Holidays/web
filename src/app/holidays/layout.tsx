import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'Holiday Packages | Incognito Holidays'
};

const HolidaysLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className='mx-auto w-full max-w-6.5xl px-4 py-5 md:px-6'>
      {children}
    </main>
  );
};

export default HolidaysLayout;