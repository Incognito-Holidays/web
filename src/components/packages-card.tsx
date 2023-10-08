import Image from 'next/image';
import Link from 'next/link';

type CardProps = {
  title: string;
  img: {
    alt: string;
    asset: {
      url: string;
      lqip: string;
    };
  };
  slug: string;
};

const PackagesCard: React.FC<CardProps> = ({ title, img, slug }) => {
  return (
    <Link href={`holidays/${slug}`}>
      <div className='relative rounded-xl hover:shadow-lg'>
        <Image
          src={img.asset.url}
          alt={img.alt}
          width={400}
          height={400}
          placeholder='blur'
          blurDataURL={img.asset.lqip}
          className='rounded-xl'
        />
        <div className='group absolute bottom-6 left-1/2 mx-auto w-72 -translate-x-1/2 rounded-2xl bg-stone-800 p-4  text-center font-bold text-white'>
          {title}
          <button className='mx-auto mt-2 hidden w-full rounded-lg bg-sky-600 p-1 group-hover:block'>
            Explore more
          </button>
        </div>
      </div>
    </Link>
  );
};

export default PackagesCard;
