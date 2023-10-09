import { getAllDestinations } from '@lib/functions/holidays';
import Container from '@components/layout/container';
import PackagesCard from '@components/packages-card';

const HolidaysPage = async () => {
  const data = await getAllDestinations();

  return (
    <main className='p-4 md:py-6'>
      <Container>
        <h1 className='my-4 text-center text-xl font-semibold text-cyan-700 md:text-2xl'>
          Packages for your next vacation
        </h1>
        <div className='mt-8 grid place-items-center gap-4 gap-y-7 md:grid-cols-3 md:gap-y-10'>
          {data.map((item) => (
            <PackagesCard
              key={item._id}
              name={item.name}
              slug={item.slug}
              image={item.image}
            />
          ))}
        </div>
      </Container>
    </main>
  );
};

export default HolidaysPage;
