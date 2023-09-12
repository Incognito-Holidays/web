import Image from 'next/image';
import Container from './layout/container';

const Banner = () => {
  return (
    <div className='pl-10 pr-10'>
      <Container>
        <Image
          src='https://images.unsplash.com/photo-1694383440533-4bd1660c97e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
          alt='banner'
          quality={95}
          width={1470}
          height={500}
          className=' h-[26rem] w-full rounded-2xl object-cover object-center'
        />
      </Container>
    </div>
  );
};

export default Banner;
