import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

type CardProps = {
  title: string;
  coverImage: { url: string; lqip: string };
  slug: string;
  desc: string;
};
const BlogsCard: React.FC<CardProps> = ({ title, coverImage, slug, desc }) => {
  return (
    <Link href={`blog/${slug}`}>
      <div className='mb-3 max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800'>
        <div className='p-5'>
          <div>
            <Image
              src={coverImage.url}
              alt='coverImage'
              width={1000}
              height={1000}
            ></Image>
          </div>
          <div>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white '>
              {title}
            </h5>
          </div>
          <p className='mb-3 line-clamp-3 font-normal text-gray-700 dark:text-gray-400'>
            {desc}
          </p>
          <Button>Read more</Button>
        </div>
      </div>
    </Link>
  );
};

export default BlogsCard;
