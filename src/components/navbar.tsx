'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiBars3 } from 'react-icons/hi2';
import logo from '@public/assets/incognito-logo.png';

const Navbar: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <nav className='bg-gray-100'>
      <div className='mx-auto w-full max-w-6.5xl px-4 py-5 md:px-6'>
        <div className='flex items-center justify-between'>
          <Link href='/'>
            <Image src={logo} width={170} height={170} alt='logo' />
          </Link>

          <div className='hidden items-center space-x-12 md:flex'>
            <Link
              href='/'
              className='border-b-4 border-transparent pb-1 font-medium text-blue-950 transition duration-200 hover:border-cyan-500 hover:text-cyan-500'
            >
              Home
            </Link>
            <Link
              href='/holidays'
              className='border-b-4 border-transparent pb-1 font-medium text-blue-950 transition duration-200 hover:border-cyan-500 hover:text-cyan-500'
            >
              Holidays
            </Link>
            <button className='border-b-4 border-transparent pb-1 font-medium text-blue-950 transition duration-200 hover:border-cyan-500 hover:text-cyan-500'>
              Hotels
            </button>
            <button className='border-b-4 border-transparent pb-1 font-medium text-blue-950 transition duration-200 hover:border-cyan-500 hover:text-cyan-500'>
              Flights
            </button>
            <button className='border-b-4 border-transparent pb-1 font-medium text-blue-950 transition duration-200 hover:border-cyan-500 hover:text-cyan-500'>
              Trains
            </button>
            <button className='border-b-4 border-transparent pb-1 font-medium text-blue-950 transition duration-200 hover:border-cyan-500 hover:text-cyan-500'>
              About
            </button>
            <button className='border-b-4 border-transparent pb-1 font-medium text-blue-950 transition duration-200 hover:border-cyan-500 hover:text-cyan-500'>
              Contact
            </button>
          </div>

          <div className='block md:hidden'>
            <button onClick={(): void => setShowMobileMenu((prev) => !prev)}>
              <HiBars3 className='h-7 w-7' />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${
          showMobileMenu ? 'block' : 'hidden'
        } space-y-2 bg-gray-100 px-4 py-2`}
      >
        <button className='block text-sm font-medium'>Home</button>
        <button className='block text-sm font-medium'>Holidays</button>
        <button className='block text-sm font-medium'>Hotels</button>
        <button className='block text-sm font-medium'>Flights</button>
        <button className='block text-sm font-medium'>Trains</button>
        <button className='block text-sm font-medium'>About</button>
        <button className='block text-sm font-medium'>Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;
