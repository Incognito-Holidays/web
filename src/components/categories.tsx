import Image from 'next/image';
import bali from '@public/assets/cat1.jpg';

const Categories = () => {
  return (
    <div className='flex gap-9 overflow-x-auto'>
      <div className='relative h-56 w-56 lg:h-[17rem] lg:w-[17rem]'>
        <Image
          className='rounded-xl transition-all duration-200 group-hover:scale-95'
          objectFit='cover'
          layout='fill'
          src={bali}
          alt='Sunset in the mountains'
        />
      </div>
      <div className='relative h-56 w-56 lg:h-[17rem] lg:w-[17rem]'>
        <Image
          className='rounded-xl transition-all duration-200 group-hover:scale-95'
          objectFit='cover'
          layout='fill'
          src={bali}
          alt='Sunset in the mountains'
        />
      </div>
      <div className='relative h-56 w-56 lg:h-[17rem] lg:w-[17rem]'>
        <Image
          className='rounded-xl transition-all duration-200 group-hover:scale-95'
          objectFit='cover'
          layout='fill'
          src={bali}
          alt='Sunset in the mountains'
        />
      </div>
      <div className='relative h-56 w-56 lg:h-[17rem] lg:w-[17rem]'>
        <Image
          className='rounded-xl transition-all duration-200 group-hover:scale-95'
          objectFit='cover'
          layout='fill'
          src={bali}
          alt='Sunset in the mountains'
        />
      </div>
      <div className='relative h-56 w-56 lg:h-[17rem] lg:w-[17rem]'>
        <Image
          className='rounded-xl transition-all duration-200 group-hover:scale-95'
          objectFit='cover'
          layout='fill'
          src={bali}
          alt='Sunset in the mountains'
        />
      </div>
    </div>
  );
};

export default Categories;
