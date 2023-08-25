'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import logo from '@public/assets/incognito-logo.png';

const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <nav className='flex items-center space-x-40 bg-gray-100 px-32 py-8'>
      <Image
        onClick={(): void => router.push('/')}
        src={logo}
        width={180}
        height={180}
        alt='logo'
        className='cursor-pointer'
      />
      <div className='flex space-x-12'>
        <p className='cursor-pointer border-b-4 border-transparent pb-1 text-lg font-medium text-blue-950 transition-all duration-200 hover:border-cyan-500 hover:text-cyan-500'>
          Home
        </p>
        <p className='cursor-pointer border-b-4 border-transparent pb-1 text-lg font-medium text-blue-950 transition-all duration-200 hover:border-cyan-500 hover:text-cyan-500'>
          Holidays
        </p>
        <p className='cursor-pointer border-b-4 border-transparent pb-1 text-lg font-medium text-blue-950 transition-all duration-200 hover:border-cyan-500 hover:text-cyan-500'>
          Hotels
        </p>
        <p className='cursor-pointer border-b-4 border-transparent pb-1 text-lg font-medium text-blue-950 transition-all duration-200 hover:border-cyan-500 hover:text-cyan-500'>
          Flights
        </p>
        <p className='cursor-pointer border-b-4 border-transparent pb-1 text-lg font-medium text-blue-950 transition-all duration-200 hover:border-cyan-500 hover:text-cyan-500'>
          Trains
        </p>
        <p className='cursor-pointer border-b-4 border-transparent pb-1 text-lg font-medium text-blue-950 transition-all duration-200 hover:border-cyan-500 hover:text-cyan-500'>
          About
        </p>
        <p className='cursor-pointer border-b-4 border-transparent pb-1 text-lg font-medium text-blue-950 transition-all duration-200 hover:border-cyan-500 hover:text-cyan-500'>
          Contact
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
