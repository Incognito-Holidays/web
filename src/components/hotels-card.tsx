import Image from 'next/image';
import Link from 'next/link';
import type { HotelDestinations } from '@lib/types';

const HotelsCard = ({ name, slug, image }: Omit<HotelDestinations, '_id'>) => {
  return (
    <Link href={`hotels/${slug}`}>
      <div className='group relative rounded-xl hover:shadow-lg'>
        <Image
          src={image.asset.url}
          alt={image.alt}
          width={400}
          height={400}
          placeholder='blur'
          blurDataURL={image.asset.lqip}
          className='rounded-xl'
        />
        <div className='absolute bottom-6 left-1/2 mx-auto w-72 -translate-x-1/2 rounded-2xl bg-stone-800 p-4  text-center font-bold text-white'>
          {name}
          <button className='mx-auto mt-2 hidden w-full rounded-lg bg-sky-600 p-1 group-hover:block'>
            Explore more
          </button>
        </div>
      </div>
    </Link>
  );
};

export default HotelsCard;
