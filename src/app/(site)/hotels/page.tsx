import { LuChevronRight } from 'react-icons/lu';
import { getAllHotelDestinations } from '@lib/functions/hotels';
import Container from '@components/layout/container';
import NextBreadcrumb from '@components/breadcrumbs';
import HotelsCard from '@components/hotels-card';

const HotelsPage = async () => {
  const data = await getAllHotelDestinations();

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
          <h1 className='my-4 text-center text-xl font-semibold text-cyan-700 md:text-2xl'>
            Find Best Hotels
          </h1>
          <div className='mt-8 grid place-items-center gap-4 gap-y-7 md:grid-cols-3 md:gap-y-10'>
            {data.map((item) => (
              <HotelsCard
                key={item._id}
                name={item.name}
                slug={item.slug}
                image={item.image}
              />
            ))}
          </div>
        </Container>
      </main>
    </div>
  );
};

export default HotelsPage;
