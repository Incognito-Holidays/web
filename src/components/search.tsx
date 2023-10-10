'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LuSearch } from 'react-icons/lu';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from './ui/select';
import { Button } from './ui/button';
import type { Search as SearchProps } from '@lib/types';

const Search = ({ data }: { data: SearchProps[] }) => {
  const router = useRouter();
  const [holidayDest, setHolidayDest] = useState('');

  return (
    <div className='-bottom-20 mx-4 mt-4 rounded-2xl border-2 bg-white p-8 shadow-lg md:absolute md:left-1/2 md:z-10 md:mx-0 md:mt-0 md:w-[48rem] md:-translate-x-1/2 lg:w-[55rem] lg:p-10'>
      <h1 className='text-center text-lg font-medium md:text-2xl'>
        I want to Holiday in and around...
      </h1>
      <div className='mt-6 flex items-center gap-4'>
        <Select value={holidayDest} onValueChange={setHolidayDest}>
          <SelectTrigger className='h-12'>
            <SelectValue placeholder='Select package' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Packages</SelectLabel>
              {data.map((item) => (
                <SelectItem key={item._id} value={item.slug}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button
          size='lg'
          onClick={() => router.push(`holidays/${holidayDest}`)}
          className='flex h-12 items-center gap-1'
        >
          <LuSearch className='h-5 w-5' />
          Search
        </Button>
      </div>
    </div>
  );
};

export default Search;
