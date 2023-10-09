import Image from 'next/image';

type CardProps = {
  title: string;
  // slug: string;
  description: string;
  coverImage: {
    alt: string;
    asset: {
      url: string;
      lqip: string;
    };
  };
};

const Card: React.FC<CardProps> = ({ title, coverImage, description }) => {
  return (
    <div className='h-full w-64 overflow-hidden rounded-2xl shadow-lg'>
      <div className=' relative h-32 w-full'>
        <Image
          src={coverImage.asset.url}
          alt={coverImage.alt}
          fill
          placeholder='blur'
          blurDataURL={coverImage.asset.lqip}
        />
        )
      </div>
      <div className='px-4 py-2'>
        <div className='mb-2 text-xl font-bold'>{title}</div>
        <p className='line-clamp-5 text-sm text-gray-700'>{description}</p>
      </div>
    </div>
  );
};

export default Card;
