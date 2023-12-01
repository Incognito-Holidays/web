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
          <p className='line-clamp-3 text-sm text-gray-700'>{description}</p>
          <button className='mb-3 mt-3 inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            Explore
            <svg
              className='ms-2 h-3.5 w-3.5 rtl:rotate-180'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 14 10'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M1 5h12m0 0L9 1m4 4L9 9'
              />
            </svg>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Card;
