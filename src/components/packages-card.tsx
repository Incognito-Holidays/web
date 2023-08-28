import Image from 'next/image';
import Link from 'next/link';
import type { StaticImageData } from 'next/image';

type CardProps = {
  title: string;
  img: StaticImageData;
  slug: string;
};

const PackagesCard: React.FC<CardProps> = ({ title, img, slug }) => {
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
          <button className='rounded-lg bg-cyan-600 p-2 text-sm text-white transition duration-200 hover:opacity-80'>
            Learn more
          </button>
        </div>
      </div>
    </Link>
  );
};

export default PackagesCard;
