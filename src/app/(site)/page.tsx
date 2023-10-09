import { getAllCards } from '@lib/functions/card';
import Hero from '@components/hero';
import Card from '@components/card';
import Categories from '@components/categories';
import TravelBlogs from '@components/travel-blogs';
import Whychose from '@components/whychose';

const HomePage = async () => {
  const data = await getAllCards();

  return (
    <main>
      <Hero />
      <div
        className='absolute -bottom-16 left-1/2 z-10 hidden w-[55rem] -translate-x-1/2 rounded-2xl
      border bg-white p-12 shadow-lg'
      >
        <div className='mx-auto max-w-5xl'>
          <h1 className='text-lg font-medium text-blue-950 md:text-2xl'>
            I want to Holiday in and around...
          </h1>
          <div className='mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-5'>
            <select
              className='h-10 w-full rounded-md border pl-2 text-gray-900 shadow-sm outline-none focus:border-purple-700 md:h-12'
              // onChange={(e): void => setHolidayDest(e.target.value)}
            >
              <option value='' className='text-sm'>
                Choose Package
              </option>
              <option value='srilanka' className='text-sm'>
                Srilanka Package
              </option>
              <option value='bali' className='text-sm'>
                Bali Package
              </option>
              <option value='thailand' className='text-sm'>
                Thailand Package
              </option>
              <option value='vietnam' className='text-sm'>
                Vietnam Package
              </option>
            </select>
            <button
              className='mb-2 rounded-lg bg-purple-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'
              // onClick={(): void => router.push(`/holidays/${holidayDest}`)}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className='mt-36'>
        <h1 className='text-center text-3xl font-bold text-blue-950'>
          Guides for your next vacation
        </h1>
        <div className='mt-14 grid place-items-center gap-y-10 sm:grid-cols-2 md:grid-cols-4'>
          {data.map((item) => (
            <Card
              key={item._id}
              title={item.title}
              coverImage={item.coverImage}
              description={item.description}
              destinationSlug={item.destinationSlug}
              packageSlug={item.packageSlug}
            />
          ))}
        </div>
      </div>
      <div className='mt-20 pb-10 pt-10'>
        <Categories />
      </div>
      <TravelBlogs />
      <Whychose />
    </main>
  );
};

export default HomePage;
