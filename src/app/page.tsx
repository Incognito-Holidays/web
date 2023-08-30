import Image from 'next/image';
import HeroBanner from '@components/hero-banner';
import Search from '@components/search';
import TravelBlogs from '@components/travel-blogs';
import Subscribe from '@components/subscribe';
import g1 from '@public/assets/g1.jpg';
import g2 from '@public/assets/g2.jpg';
import g3 from '@public/assets/g3.jpg';
import g4 from '@public/assets/g4.jpg';
import g5 from '@public/assets/g5.jpg';
import g6 from '@public/assets/g6.jpg';

const Home: React.FC = () => {
  return (
    <>
      <header>
        <HeroBanner />
        <Search />
      </header>
      <main className='mx-auto w-full max-w-6.5xl px-4 py-5 md:px-6'>
        <div>
          <h1 className='p-8 text-center text-3xl font-bold text-cyan-700'>
            Best Selling Holiday Packages
          </h1>
          <div className='grid place-items-center gap-4 p-8 sm:grid-cols-2 md:grid-cols-3'>
            <div>
              <Image src={g1} alt='g1' quality={95} />
            </div>
            <div>
              <Image src={g2} alt='g2' quality={95} />
            </div>
            <div>
              <Image src={g3} alt='g3' quality={95} />
            </div>
            <div>
              <Image src={g4} alt='g4' quality={95} />
            </div>
            <div>
              <Image src={g5} alt='g5' />
            </div>
            <div>
              <Image src={g6} alt='g6' />
            </div>
          </div>
        </div>
      </main>
      <TravelBlogs />
      <Subscribe />
    </>
  );
};

export default Home;
