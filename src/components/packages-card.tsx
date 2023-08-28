import Image from 'next/image';
import Link from 'next/link';
import { LiaRupeeSignSolid } from 'react-icons/lia';
import type { StaticImageData } from 'next/image';

type CardProps = {
  title: string;
  startingPrice: number;
  img: StaticImageData;
  slug: string;
};

const PackagesCard: React.FC<CardProps> = ({
  title,
  startingPrice,
  img,
  slug
}) => {
  return (
    <Link href={`holidays/${slug}`}>
      <div className='rounded-xl border-2 p-3 transition-all duration-200 hover:shadow-lg'>
        <Image
          src={img}
          width={300}
          height={300}
          alt='bali'
          placeholder='blur'
        />
        <div className='mt-3 flex items-center justify-between text-gray-800'>
          <p className='text-xl font-medium'>{title}</p>
          <div>
            <p className='flex items-center text-xl font-medium text-cyan-700'>
              <LiaRupeeSignSolid className='h-5 w-5' />
              <span>{startingPrice.toFixed(2)}</span>
            </p>
            <p className='text-right text-xs text-gray-400'>Starting price</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PackagesCard;
