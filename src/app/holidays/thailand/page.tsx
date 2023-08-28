import { AiOutlineLine } from 'react-icons/ai';
import PackageDetailsCard from '@components/package-details-card';
import type { Metadata } from 'next';
import g1 from '@public/assets/g1.jpg';

export const metadata: Metadata = {
  title: 'Bali Packages | Incognito Holidays'
};

const BaliPackages: React.FC = () => {
  const desc =
    'Thailand is a Southeast Asian country. It is known for tropical beaches, opulent royal palaces, ancient ruins and ornate temples displaying figures of Buddha. In Bangkok, the capital, an ultramodern cityscape rises next to quiet Canalside communities and the iconic temples of Wat Arun, Wat Pho and the Emerald Buddha Temple (Wat Phra Kaew). Nearby beach resorts include bustling Pattaya and fashionable Phuket & Krabi.';

  return (
    <>
      <section className='items-center space-y-1 md:flex md:space-x-4'>
        <h1 className='text-xl font-semibold capitalize text-gray-700 md:text-2xl'>
          Thailand Tour Packages
        </h1>
        <AiOutlineLine className='hidden h-5 w-5 rotate-90 text-gray-700 md:block' />
        <h3 className='text-sm'>4 Packages</h3>
      </section>

      <section className='mt-8'>
        <PackageDetailsCard
          title='Simply Thailand, 4 Nights & 5 Days'
          desc={desc}
          rating={4.2}
          startingPrice={19990}
          img={g1}
          slug='thailand'
        />
      </section>
      <section className='mt-8'>
        <PackageDetailsCard
          title='Best of Thailand, 6 Nights & 7 Days'
          desc={desc}
          rating={3.8}
          startingPrice={38579}
          img={g1}
          slug='thailand'
        />
      </section>
    </>
  );
};

export default BaliPackages;
