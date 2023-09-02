'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Search: React.FC = () => {
  const router = useRouter();
  const [holidayDest, setHolidayDest] = useState('');

  return (
    <div className='ml-11 mr-11 flex items-center  space-x-5 py-6'>
      <select
        className='w-full appearance-none rounded-md border bg-white p-4 text-blue-950 shadow-sm outline-none focus:border-blue-950'
        onChange={(e) => setHolidayDest(e.target.value)}
      >
        <option value=''>Choose Package</option>
        <option value='srilanka'>Srilanka Package</option>
        <option value='bali'>Bali Package</option>
        <option value='thailand'>Thailand Package</option>
        <option value='vietnam'>Vietnam Package</option>
      </select>

      <button
        className='borderborder-blue-950 rounded bg-cyan-500 px-4 py-2 font-bold text-white 
          transition duration-200 hover:bg-blue-950'
        onClick={(): void => router.push(`/holidays/${holidayDest}`)}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
