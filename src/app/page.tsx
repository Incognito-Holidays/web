import Image from 'next/image';
import Banner from '@components/banner';

import g1 from '../images/g1.jpg';
import g2 from '../images/g2.jpg';
import g3 from '../images/g3.jpg';
import g4 from '../images/g4.jpg';
import g5 from '../images/g5.jpg';
import g6 from '../images/g6.jpg';

const Home: React.FC = () => {
  return (
    <main>
      <Banner />
      <div>
        <h1 className='p-8 mt-10 text-center font-bold text-3xl text-cyan-700'>
          Best Selling Holiday Packages
        </h1>
        <div className='grid grid-cols-3 gap-4 p-8 place-items-center'>
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
