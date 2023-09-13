import Image from 'next/image';
import bali from '@public/assets/bali2.jpg';

const Blogone = () => {
  return (
    <div>
      <div className='flex gap-4 pl-12 pr-10'>
        <div className='justify-start'>
          <Image src={bali} alt='bali' className='m-10 max-w-xl rounded-lg' />
        </div>
        <div className='ml-32 mt-20 justify-end'>
          <h1 className='text-xl font-bold'>Lorem ipsum dolor sit</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            pariatur, iure iste illo alias repudiandae cupiditate distinctio id.
            Ullam necessitatibus eius similique doloremque dolore earum placeat
            reiciendis fugit libero nobis.
          </p>
        </div>
      </div>
      <div className='mt-14 flex gap-4 pl-12 pr-10'>
        <div className='mr-32 mt-20 justify-start'>
          <h1 className='text-xl font-bold'>Lorem ipsum dolor sit</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            pariatur, iure iste illo alias repudiandae cupiditate distinctio id.
            Ullam necessitatibus eius similique doloremque dolore earum placeat
            reiciendis fugit libero nobis.
          </p>
        </div>
        <div className='justify-end'>
          <Image src={bali} alt='bali' className='max-w-lg rounded-lg' />
        </div>
      </div>
    </div>
  );
};

export default Blogone;
