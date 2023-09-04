'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Search: React.FC = () => {
  const router = useRouter();
  const [holidayDest, setHolidayDest] = useState('');

  return (
    <div className='absolute bottom-0 z-10 w-full bg-neutral-800 bg-opacity-70 px-4 py-2 sm:py-4 md:px-8 md:py-8'>
      <div className='mx-auto max-w-5xl'>
        <h1 className='text-lg font-medium text-white md:text-2xl'>
          I want to Holiday in and around...
        </h1>
        <div className='mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-5'>
          <select
            className='h-10 w-full rounded-md border pl-2 text-gray-900 shadow-sm outline-none focus:border-blue-950 md:h-12'
            onChange={(e): void => setHolidayDest(e.target.value)}
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
            className='w-full rounded border-blue-950 bg-cyan-500 px-4 py-2 font-bold text-white transition duration-200 hover:bg-blue-950 sm:w-fit'
            onClick={(): void => router.push(`/holidays/${holidayDest}`)}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
