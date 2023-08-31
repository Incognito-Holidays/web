import { AiOutlineLine } from 'react-icons/ai';
import PackageDetailsCard from '@components/package-details-card';
import type { Metadata } from 'next';
import g1 from '@public/assets/g2.jpg';

export const metadata: Metadata = {
  title: 'Srilanka Packages | Incognito Holidays'
};
const SrilankaPackages: React.FC = () => {
  const desc =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur magni cupiditate, optio asperiores molestias, voluptas voluptates praesentium animi obcaecati vero, vitae ipsa unde quae ex sunt libero iure odio eligendi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate modi, iusto laboriosam id impedit voluptatibus incidunt nam eius, blanditiis repellendus laborum, aperiam magni omnis tempora tempore vel sapiente nihil repudiandae.';
  return (
    <>
      <section className='items-center space-y-1 md:flex md:space-x-4'>
        <h1 className='text-xl font-semibold capitalize text-gray-700 md:text-2xl'>
          Sri Lanka Tour Packages
        </h1>
        <AiOutlineLine className='hidden h-5 w-5 rotate-90 text-gray-700 md:block' />
        <h3 className='text-sm'>4 Packages</h3>
      </section>

      <section className='mt-8'>
        <PackageDetailsCard
          title='Sri Lanka Package, 4 Nights & 5 Days'
          desc={desc}
          rating={3.4}
          startingPrice={26300}
          img={g1}
          id='srilanka'
          slug='srilanka'
        />
      </section>

      <section className='mt-8'>
        <PackageDetailsCard
          title='Sri Lanka Package, 3 Nights & 4 Days'
          desc={desc}
          rating={3.4}
          startingPrice={21500}
          img={g1}
          id='srilanka'
          slug='srilanka'
        />
      </section>

      <section className='mt-8'>
        <PackageDetailsCard
          title='Best Of Sri Lanka and Maldives (9 Days) | Price incomplate'
          desc={desc}
          rating={3.4}
          startingPrice={21500}
          img={g1}
          id='srilanka'
          slug='srilanka'
        />
      </section>
    </>
  );
};

export default SrilankaPackages;
