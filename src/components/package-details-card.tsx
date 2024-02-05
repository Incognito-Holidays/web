import Link from 'next/link';
import Image from 'next/image';
import type { DestinationPackages } from '@lib/types';

const PackageDetailsCard = ({
  title,
  destSlug,
  slug,
  description,
  coverImage
} // startingPrice
: Omit<DestinationPackages, '_id'> & { destSlug: string }) => {
  return (
    <Link href={`/holidays/${destSlug}/${slug}`}>
      <div className='group divide-y-2 rounded-lg border shadow-md transition duration-200 md:flex md:divide-x-2 '>
        <div className='space-x-4 md:flex md:pr-2'>
          <div className='relative h-44 md:h-full md:w-96 md:shrink-0'>
            <Image
              src={coverImage.asset.url}
              alt={coverImage.alt}
              fill
              placeholder='blur'
              blurDataURL={coverImage.asset.lqip}
              className='rounded-lg md:rounded-l-lg'
            />
          </div>
          <div className='space-y-2 py-4'>
            <h1 className='text-lg font-medium text-gray-700'>{title}</h1>
            <p className='line-clamp-5 text-gray-600'>{description}</p>
          </div>
        </div>
        <div className='shrink-0 py-4 md:w-52 md:py-16 md:pt-[90px]'>
          {/* <h3 className='text-center text-xl font-semibold text-cyan-700'>
            ₹ {startingPrice}
          </h3>
          <p className='text-center text-sm text-gray-700'>
            Starting price per person
          </p> */}
          <button className='mt-2 w-full rounded-lg bg-blue-600 p-2 text-center text-white transition duration-200 hover:opacity-80 '>
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default PackageDetailsCard;
