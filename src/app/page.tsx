import Image from 'next/image';
import HeroBanner from '@components/hero-banner';
import g1 from '@public/assets/g1.jpg';
import g2 from '@public/assets/g2.jpg';
import g3 from '@public/assets/g3.jpg';
import g4 from '@public/assets/g4.jpg';
import g5 from '@public/assets/g5.jpg';
import g6 from '@public/assets/g6.jpg';

const Home: React.FC = () => {
  return (
    <main>
      <HeroBanner />
      <div>
        <h1 className='mt-10 p-8 text-center text-3xl font-bold text-cyan-700'>
          Best Selling Holiday Packages
        </h1>
        <div className='grid grid-cols-3 place-items-center gap-4 p-8'>
          <div>
            <Image src={g1} alt='g1' />
          </div>
          <div>
            <Image src={g2} alt='g2' />
          </div>
          <div>
            <Image src={g3} alt='g3' />
          </div>
          <div>
            <Image src={g4} alt='g4' />
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
  );
};

export default Home;
