import Image from 'next/image';
import bannerbg from '@public/assets/bg-banner.jpg';
import Container from './layout/container';

const Banner = () => {
  return (
    <div className='pt-4'>
      <Container>
        <Image
          src={bannerbg}
          alt='banner'
          quality={95}
          className='mt-6 h-96 w-full rounded-lg object-cover object-center'
        />
      </Container>
    </div>
  );
};

export default Banner;
