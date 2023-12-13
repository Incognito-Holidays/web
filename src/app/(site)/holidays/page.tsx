import { LuChevronRight } from 'react-icons/lu';
import { getAllDestinations } from '@lib/functions/holidays';
import { ogFields } from '@app/shared-metadata';
import Container from '@components/layout/container';
import InternationalDomestic from '@components/international-domestic';
import NextBreadcrumb from '@components/breadcrumbs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Holidays',
  alternates: {
    canonical: '/holidays'
  },
  openGraph: {
    ...ogFields,
    title: 'Holidays',
    url: '/holidays'
  }
};

const HolidaysPage = async () => {
  const data = await getAllDestinations();

  return (
    <div>
      <NextBreadcrumb
        homeElement={'Home'}
        separator={
          <span className='flex items-center'>
            <LuChevronRight />
          </span>
        }
        activeClasses='text-amber-500'
        containerClasses='flex py-1'
        listClasses='hover:underline mx-2 font-bold text-sm'
        capitalizeLinks
      />
      <main className='p-4 md:py-6'>
        <Container>
          <InternationalDomestic data={data} />
        </Container>
      </main>
    </div>
  );
};

export default HolidaysPage;
