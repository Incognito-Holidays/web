'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import logo from '@public/assets/incognito-logo.png';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <nav className='border-b-2'>
      <div className='mx-auto w-full max-w-6.5xl px-4 py-5 md:px-6'>
        <div className='flex items-center justify-between'>
          <Link href='/'>
            <Image src={logo} width={160} height={160} alt='logo' priority />
          </Link>

          <div className='hidden items-center space-x-12 md:flex'>
            <Link
              href='/'
              className='border-b-4 border-transparent text-gray-600 transition duration-200 hover:border-violet-800 hover:font-medium hover:text-violet-800'
            >
              Home
            </Link>
            <Link
              href='/holidays'
              className='border-b-4 border-transparent text-gray-600 transition duration-200 hover:border-violet-800 hover:font-medium hover:text-violet-800'
            >
              Holidays
            </Link>
            <Link
              href='/hotels'
              className='border-b-4 border-transparent text-gray-600 transition duration-200 hover:border-violet-800 hover:font-medium hover:text-violet-800'
            >
              Hotels
            </Link>
            <Link
              href='/flights'
              className='border-b-4 border-transparent text-gray-600 transition duration-200 hover:border-violet-800 hover:font-medium hover:text-violet-800'
            >
              Flights
            </Link>
            <Link
              href='/trains'
              className='border-b-4 border-transparent text-gray-600 transition duration-200 hover:border-violet-800 hover:font-medium hover:text-violet-800'
            >
              Trains
            </Link>
            <Link
              href='/contact'
              className='border-b-4 border-transparent text-gray-600 transition duration-200 hover:border-violet-800 hover:font-medium hover:text-violet-800'
            >
              Blogs
            </Link>
            <Link
              href='/about'
              className='border-b-4 border-transparent text-gray-600 transition duration-200 hover:border-violet-800 hover:font-medium hover:text-violet-800'
            >
              About
            </Link>
            <Link
              href='/contact'
              className='border-b-4 border-transparent text-gray-600 transition duration-200 hover:border-violet-800 hover:font-medium hover:text-violet-800'
            >
              Contact
            </Link>
          </div>

          <div className='block md:hidden'>
            <button onClick={(): void => setShowMobileMenu((prev) => !prev)}>
              {showMobileMenu ? (
                <HiXMark className='h-7 w-7' />
              ) : (
                <HiBars3 className='h-7 w-7' />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${
          showMobileMenu ? 'block' : 'hidden'
        } space-y-2 bg-gray-100 px-4 py-2`}
      >
        <Link href='/' className='block text-sm font-medium'>
          Home
        </Link>
        <Link href='/holidays' className='block text-sm font-medium'>
          Holidays
        </Link>
        <Link href='/hotels' className='block text-sm font-medium'>
          Hotels
        </Link>
        <button className='block text-sm font-medium'>Flights</button>
        <Link href='/trains' className='block text-sm font-medium'>
          Trains
        </Link>
        <Link href='/' className='block text-sm font-medium'>
          Blogs
        </Link>
        <Link href='/about' className='block text-sm font-medium'>
          About
        </Link>
        <Link href='/contact' className='block text-sm font-medium'>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Header;
