import Image from 'next/image';
import bali from '@public/assets/bali2.jpg';

const Card = () => {
  return (
    <div className='w-64 overflow-hidden rounded-2xl shadow-lg'>
      <Image className='w-full' src={bali} alt='Sunset in the mountains' />
      <div className='px-4 py-2'>
        <div className='mb-2 text-xl font-bold'>The Coldest Sunset</div>
        <p className='text-sm text-gray-700'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque
        </p>
      </div>
      <div className='px-4 pb-2 pt-2'>
        <span className='mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700'>
          #photography
        </span>
        <span className='mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700'>
          #travel
        </span>
      </div>
    </div>
  );
};

export default Card;
