import Image from 'next/image';
import Link from 'next/link';
import G1 from '@public/assets/g1.jpg';

type CardProps = {
  title: string;
  body: string;
  slug: string;
};

const Card: React.FC<CardProps> = ({ title, body, slug }) => {
  return (
    <div>
      <div
        className='max-w-xs rounded-lg border border-gray-200 bg-white shadow-md  
      duration-300
      hover:scale-110
      '
      >
        <a href='#'>
          <Image
            className='rounded-t-lg'
            width={400}
            height={400}
            src={G1}
            alt=''
          />
        </a>
        <div className='p-5'>
          <a href='#'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 '>
              {title}
            </h5>
          </a>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            {body}
          </p>
          <Link
            href={`/holidays/${slug}`}
            className='inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Read more
            <svg
              className='ml-2 h-3.5 w-3.5'
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
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
