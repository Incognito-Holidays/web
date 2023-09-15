import Link from 'next/link';
import Image from 'next/image';

import HeroBanner from '@components/hero-banner';
import Search from '@components/search';
import TravelBlogs from '@components/travel-blogs';
// import Subscribe from '@components/subscribe';

import g1 from '@public/assets/g1.jpg';
import g2 from '@public/assets/g2.jpg';
import g3 from '@public/assets/g3.jpg';
import g4 from '@public/assets/g4.jpg';

const Home: React.FC = () => {
  const holidayPackages = [
    {
      id: 1,
      href: '/holidays/bali/beautiful-bali-package',
      img: g1,
      alt: 'beautiful-bali'
    },
    {
      id: 2,
      href: '/holidays/srilanka/best-of-srilanka',
      img: g2,
      alt: 'best-of-srilanka'
    },
    {
      id: 3,
      href: '/holidays/bali/bali-java-indonesia-package',
      img: g1,
      alt: 'bali-java-indonesia'
    },
    {
      id: 4,
      href: '/holidays/thailand/best-of-thailand',
      img: g3,
      alt: 'best-of-thailand'
    },
    {
      id: 5,
      href: '/holidays/vietnam/vietnam-11n-12d-package',
      img: g4,
      alt: 'vietnam-11n-12d'
    },
    {
      id: 6,
      href: '/holidays/thailand/phuket-with-krabi',
      img: g3,
      alt: 'phuket-with-krabi'
    },
    {
      id: 7,
      href: '/holidays/srilanka/srilanka-4n-5d-package',
      img: g2,
      alt: 'srilanka-4n-5d'
    },
    {
      id: 8,
      href: '/holidays/thailand/simply-thailand',
      img: g3,
      alt: 'simply-thailand'
    }
  ];

  return (
    <>
      <header className='relative'>
        <HeroBanner />
        <Search />
      </header>
      <main className='mx-auto w-full max-w-6.5xl space-y-8 px-4 py-5 md:px-6'>
        <div>
          <h1 className='p-8 text-center text-3xl font-bold text-cyan-700'>
            Best Selling Holiday Packages
          </h1>
          <div className='grid place-items-center gap-4 sm:grid-cols-2 md:grid-cols-3'>
            {holidayPackages.map((holidayPackage) => (
              <Link
                key={holidayPackage.id}
                href={holidayPackage.href}
                className='border-2 border-gray-300 p-2 shadow-lg transition hover:scale-105'
              >
                <Image
                  src={holidayPackage.img}
                  alt={holidayPackage.alt}
                  quality={95}
                  placeholder='blur'
                />
              </Link>
            ))}
          </div>
        </div>
        <TravelBlogs />
      </main>
      {/* <Subscribe /> */}
    </>
  );
};

export default Home;
