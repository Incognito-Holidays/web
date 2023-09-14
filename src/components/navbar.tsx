'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiBars3, HiXMark } from 'react-icons/hi2';

import logo from '@public/assets/incognito-logo.png';

const Navbar: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Holidays', href: '/holidays' },
    { label: 'Hotels', href: '/hotels' },
    { label: 'Flights', href: '/flights' },
    { label: 'Trains', href: '/trains' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <nav className='border-b-2'>
      <div className='mx-auto w-full max-w-6.5xl px-4 py-5 md:px-6'>
        <div className='flex items-center justify-between'>
          <Link href='/'>
            <Image src={logo} width={160} height={160} alt='logo' priority />
          </Link>

          <div className='hidden items-center space-x-12 md:flex'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='border-b-4 border-transparent pb-1 font-medium text-blue-950 transition duration-200 hover:border-cyan-500 hover:text-cyan-500'
              >
                {link.label}
              </Link>
            ))}
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
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className='block text-sm font-medium'
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
