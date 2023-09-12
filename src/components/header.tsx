import Link from 'next/link';
import Image from 'next/image';
import Container from './layout/container';

const Header = () => {
  return (
    <header className='p-6'>
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
              className='border-b-4 border-transparent text-blue-950 transition duration-200 hover:border-cyan-500 hover:text-cyan-500'
            >
              Home
            </Link>
            <Link
              href='/'
              className='border-b-4 border-transparent text-blue-950 transition duration-200 hover:border-cyan-500 hover:text-cyan-500'
            >
              Blog
            </Link>
            <Link
              href='/'
              className='border-b-4 border-transparent text-blue-950 transition duration-200 hover:border-cyan-500 hover:text-cyan-500'
            >
              About
            </Link>
            <Link
              href='/'
              className='border-b-4 border-transparent text-blue-950 transition duration-200 hover:border-cyan-500 hover:text-cyan-500'
            >
              Contact
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
