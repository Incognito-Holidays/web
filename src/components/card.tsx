import Image from 'next/image';
import Link from 'next/link';
import type { Cards } from '@lib/types';

const Card = ({
  title,
  coverImage,
  description,
  destinationSlug,
  packageSlug
}: Omit<Cards, '_id'>) => {
  return (
    <Link href={`holidays/${destinationSlug}/${packageSlug}`}>
      <div className='h-full w-64 overflow-hidden rounded-2xl shadow-lg'>
        <div className=' relative h-32 w-full'>
          <Image
            src={coverImage.asset.url}
            alt={coverImage.alt}
            fill
            placeholder='blur'
            blurDataURL={coverImage.asset.lqip}
          />
        </div>
        <div className='px-4 py-2'>
          <div className='mb-2 line-clamp-1 text-xl font-bold'>{title}</div>
          <p className='line-clamp-5 text-sm text-gray-700'>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
