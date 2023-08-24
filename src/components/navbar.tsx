'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import incognitologo from '../images/incognito-logo.png';

const Navbar: React.FC = () => {
  const router = useRouter();
  return (
    <nav className='py-8 px-32 flex items-center space-x-40 bg-gray-100'>
      <Image
        onClick={(): void => router.push('/')}
        src={incognitologo}
        width={180}
        height={180}
        alt='logo'
        className='cursor-pointer'
      />
      <div className='flex space-x-12 '>
        <p className='pb-1 font-medium text-lg text-blue-950 hover:text-cyan-500 cursor-pointer border-b-4 border-transparent hover:border-cyan-500 transition-all duration-200'>
          Home
        </p>
        <p className='pb-1 font-medium text-lg text-blue-950 hover:text-cyan-500 cursor-pointer border-b-4 border-transparent hover:border-cyan-500 transition-all duration-200'>
          Holidays
        </p>
        <p className='pb-1 font-medium text-lg text-blue-950 hover:text-cyan-500 cursor-pointer border-b-4 border-transparent hover:border-cyan-500 transition-all duration-200'>
          Hotels
        </p>
        <p className='pb-1 font-medium text-lg text-blue-950 hover:text-cyan-500 cursor-pointer border-b-4 border-transparent hover:border-cyan-500 transition-all duration-200'>
          Flights
        </p>
        <p className='pb-1 font-medium text-lg text-blue-950 hover:text-cyan-500 cursor-pointer border-b-4 border-transparent hover:border-cyan-500 transition-all duration-200'>
          Trains
        </p>
        <p className='pb-1 font-medium text-lg text-blue-950 hover:text-cyan-500 cursor-pointer border-b-4 border-transparent hover:border-cyan-500 transition-all duration-200'>
          About
        </p>
        <p className='pb-1 font-medium text-lg text-blue-950 hover:text-cyan-500 cursor-pointer border-b-4 border-transparent hover:border-cyan-500 transition-all duration-200'>
          Contact
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
