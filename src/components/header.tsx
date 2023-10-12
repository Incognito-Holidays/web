import Link from 'next/link';
import Image from 'next/image';
import { LuMenu } from 'react-icons/lu';
import Container from './layout/container';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const Header = () => {
  const routes = [
    { href: '/', label: 'Home' },
    { href: '/holidays', label: 'Holidays' },
    { href: '/hotels', label: 'Hotels' },
    { href: '/flights', label: 'Flights' },
    { href: '/trains', label: 'Trains' },
    // { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <header className='p-4 md:py-6'>
      <Container>
        <div className='flex items-center justify-between'>
          <div className='md:hidden'>
            <Sheet>
              <SheetTrigger>
                <LuMenu className='h-6 w-6' />
              </SheetTrigger>
              <SheetContent side='left' className='w-52 sm:w-72'>
                <nav className='flex flex-col gap-4'>
                  {routes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className='px-2 py-1 text-sm'
                    >
                      {route.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <Link href='/'>
            <Image
              src='/assets/incognito-logo.png'
              width={130}
              height={40}
              alt='incognito-logo'
              quality={95}
              priority
            />
          </Link>
          <nav className='hidden items-center md:flex md:gap-2 lg:gap-6'>
            {routes.map((route) => (
              <Button key={route.href} asChild variant='ghost'>
                <Link href={route.href}>{route.label}</Link>
              </Button>
            ))}
          </nav>
          <div className='md:hidden' />
        </div>
      </Container>
    </header>
  );
};

export default Header;
