import Image from 'next/image';

type CardProps = {
  title: string;
  // slug: string;
  description: string;
  image: {
    url: string;
    lqip: string;
  };
};

const Card = ({ title, image, description }: CardProps) => {
  return (
    <div className='h-full w-64 overflow-hidden rounded-2xl shadow-lg'>
      <div className=' relative h-32 w-full'>
        <Image
          fill
          src={image.url}
          alt='Card Image'
          placeholder='blur'
          blurDataURL={image.lqip}
        />
      </div>
      <div className='px-4 py-2'>
        <div className='mb-2 text-xl font-bold'>{title}</div>
        <p className='line-clamp-5 text-sm text-gray-700'>{description}</p>
      </div>
    </div>
  );
};

export default Card;
