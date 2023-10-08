import { getAllDestination } from '@lib/functions/destination';
import PackagesCard from '@components/packages-card';

const HolidaysPage = async () => {
  const data = await getAllDestination();
  return (
    <div>
      <h1 className='my-4 text-center text-xl font-semibold text-cyan-700 md:text-2xl'>
        Packages for your next vacation
      </h1>
      <div className='mt-8 grid place-items-center gap-4 gap-y-7 md:grid-cols-3 md:gap-y-10'>
        {data.map((item) => (
          <PackagesCard
            key={item._id}
            title={item.name}
            img={item.image}
            slug={item.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default HolidaysPage;
