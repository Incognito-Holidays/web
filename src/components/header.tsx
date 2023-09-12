import Link from 'next/link';
import Image from 'next/image';
import Container from './layout/container';

const Header = () => {
  return (
    <header className='pb-6 pl-10 pr-10 pt-6'>
      <Container>
        <div className='flex items-center justify-between'>
          <div>
            <Link href='/'>
              <Image
                src='/assets/incognito-logo.png'
                width={160}
                height={160}
                alt='logo'
                priority
              />
            </Link>
          </div>
          <nav className='flex items-center gap-20'>
            <Link
              href='/'
              className='border-b-4 border-transparent text-gray-600 transition duration-200 hover:border-blue-950 hover:font-medium hover:text-blue-950'
            >
              Home
            </Link>
            <Link
              href='/'
              className='border-b-4 border-transparent text-gray-600 transition duration-200 hover:border-blue-950 hover:font-medium hover:text-blue-950'
            >
              Blog
            </Link>
            <Link
              href='/'
              className='border-b-4 border-transparent text-gray-600 transition duration-200 hover:border-blue-950 hover:font-medium hover:text-blue-950'
            >
              About
            </Link>
            <Link
              href='/'
              className='border-b-4 border-transparent text-gray-600 transition duration-200 hover:border-blue-950 hover:font-medium hover:text-blue-950'
            >
              Contact
            </Link>
            <button
              type='button'
              className='mb-2 rounded-lg bg-purple-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'
            >
              📞 +91 1234567890
            </button>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
