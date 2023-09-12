import Image from 'next/image';
import bannerbg from '@public/assets/bg-banner.jpg';

const Banner = () => {
  return (
    <div className='pl-14 pr-14 pt-4'>
      <Image
        src={bannerbg}
        alt='banner'
        quality={95}
        className='mt-6 h-auto w-full rounded-lg bg-cover object-bottom'
      />
    </div>
  );
};

export default Banner;
