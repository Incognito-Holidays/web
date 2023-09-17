import { AiOutlineLine } from 'react-icons/ai';
import PackageDetailsCard from '@components/package-details-card';
import type { Metadata } from 'next';
import g1 from '@public/assets/bali/bali2.jpg';
import g2 from '@public/assets/bali/bali3.jpg';

export const metadata: Metadata = {
  title: 'Bali Packages | Incognito Holidays'
};

const BaliPackages: React.FC = () => {
  const desc =
    'Bali Indonesia. Also known as the Land of the Gods, Bali appeals through its sheer natural beauty of looming volcanoes and lush terraced rice fields that exude peace and serenity. It is also famous for surfers paradise!';

  return (
    <>
      <section className='items-center space-y-1 md:flex md:space-x-4'>
        <h1 className='text-xl font-semibold capitalize text-gray-700 md:text-2xl'>
          Bali Tour Packages
        </h1>
        <AiOutlineLine className='hidden h-5 w-5 rotate-90 text-gray-700 md:block' />
        <h3 className='text-sm'>3 Packages</h3>
      </section>

      <section className='mt-8 flex flex-col gap-y-8'>
        <PackageDetailsCard
          title='Beautiful Bali, 4 Nights & 5 Days'
          desc={desc}
          rating={3.4}
          startingPrice={29845}
          img={g2}
          slug='bali'
          id='beautiful-bali-package'
        />
        <PackageDetailsCard
          title='Bali - Java - Indonesia, 8 Days'
          desc={desc}
          rating={3.4}
          startingPrice={56000}
          img={g1}
          slug='bali'
          id='bali-java-indonesia-package'
        />
        {/* <PackageDetailsCard
          title='Bali Package, 3 Nights & 4 Days | Price incomplete'
          desc={desc}
          rating={2.8}
          startingPrice={10000}
          img={g1}
          slug='bali'
          id='bali-3n-4d-package'
        />  */}
      </section>
    </>
  );
};

export default BaliPackages;
