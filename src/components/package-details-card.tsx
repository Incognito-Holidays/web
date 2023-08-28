'use client';

import Link from 'next/link';
import Image from 'next/image';
import StarRatings from 'react-star-ratings';
import { PiDotBold } from 'react-icons/pi';
import type { StaticImageData } from 'next/image';

type PackageDetailsCardProps = {
  title: string;
  desc: string;
  rating: number;
  startingPrice: number;
  img: StaticImageData;
  slug: string;
};

const PackageDetailsCard: React.FC<PackageDetailsCardProps> = ({
  title,
  desc,
  rating,
  startingPrice,
  img,
  slug
}) => {
  return (
    <Link href={`/holidays/bali/${slug}`}>
      <div className='group divide-y-2 rounded-lg border shadow-md transition duration-200 md:flex md:divide-x-2 '>
        <div className='space-x-4 md:flex md:pr-2'>
          <Image
            src={img}
            width={280}
            height={280}
            alt={title}
            className='aspect-auto w-full rounded-l-lg'
          />
          <div className='space-y-2 py-4'>
            <h1 className='text-lg font-medium text-gray-700'>{title}</h1>
            <div className='flex items-center space-x-1'>
              <StarRatings
                rating={rating}
                starRatedColor='gold'
                starDimension='18px'
                starSpacing='2px'
                numberOfStars={5}
                name='rating'
              />
              <PiDotBold className='w-7' />
              <span className='font-medium text-yellow-500'>{rating}</span>
            </div>
            <p className='text-gray-600'>
              {desc.length > 250 ? `${desc.substring(0, 250)}...` : desc}
            </p>
          </div>
        </div>
        <div className='py-4 md:w-96 md:py-16 md:pt-[90px]'>
          <h3 className='text-center text-xl font-semibold text-cyan-700'>
            ₹ {startingPrice.toFixed(2)}
          </h3>
          <p className='text-center text-sm text-gray-700'>
            Starting price per person
          </p>
          <button className='mt-2 w-full rounded-lg bg-cyan-600 p-2 text-center text-white transition duration-200 hover:opacity-80 md:invisible md:group-hover:visible'>
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default PackageDetailsCard;
