/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image';
import expertise from '@public/assets/Expertise icon/customer.png';
import custom_serv from '@public/assets/Personalized service icon/customer-service.png';
import competitive_price from '@public/assets/Competitive price icon/price.png';
import convenience from '@public/assets/Convenience icon/experience.png';

const Whychose: React.FC = () => {
  return (
    <div className='bg-violet-200'>
      <div className='pb-7 pl-16 pr-16 pt-6 text-center text-3xl font-bold text-cyan-700 '>
        Why Incognito Holidays?
      </div>
      <div className='container mx-auto flex max-w-5xl flex-wrap items-start justify-center gap-12 pb-7 md:justify-between'>
        <div className='grid justify-items-center gap-4 text-center md:flex-1'>
          <div className='  '>
            <Image
              src={convenience}
              width={100}
              height={100}
              alt='demo'
            ></Image>
          </div>
          <h3 className='text-xl font-bold'>Convenience</h3>
          <p className='line-clamp-3'>
            Our travel agency can handle all aspects of your trip planning.
          </p>
        </div>
        <div className='grid justify-items-center gap-4 text-center md:flex-1'>
          <div>
            <Image src={expertise} width={100} height={100} alt='demo'></Image>
          </div>
          <h3 className='text-xl font-bold'>Expertise</h3>
          <p className='line-clamp-3'>
            Our travel agents are experts in the travel industry.
          </p>
        </div>
        <div className='grid justify-items-center gap-4 text-center md:flex-1'>
          <div>
            <Image
              src={competitive_price}
              width={100}
              height={100}
              alt='demo'
            ></Image>
          </div>
          <h3 className='text-xl font-bold'>Competitive prices</h3>
          <p className='line-clamp-3'>
            {' '}
            Our travel agency may be able to get you better deals.
          </p>
        </div>
        <div className='grid justify-items-center gap-4 text-center md:flex-1'>
          <div>
            <Image
              src={custom_serv}
              width={100}
              height={100}
              alt='demo'
            ></Image>
          </div>
          <h3 className='text-xl font-bold'>Customized service</h3>
          <p className='line-clamp-3'>
            {' '}
            We create a custom itinerary that's perfect for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Whychose;
