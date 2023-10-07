import Link from 'next/link';
import Image from 'next/image';
import { getAllBlogs } from '@lib/functions/blog';
import { Button } from '@components/ui/button';

const BlogsPage = async () => {
  const data = await getAllBlogs();

  return (
    <main>
      <div>
        <h1 className='my-4 pl-5 text-left text-3xl font-semibold text-blue-950 md:text-2xl'>
          # Travel Blogs
        </h1>
        <div className='mt-8 grid place-items-center gap-4 gap-y-7 md:grid-cols-3 md:gap-y-10'>
          {data.map((item) => {
            return (
              <Link key={item._id} href={`blog/${item.slug}`}>
                <div className='mb-3 max-w-sm rounded-lg border border-gray-200 bg-white shadow'>
                  <div className='p-5'>
                    <div>
                      <Image
                        src={item.coverImage.asset.url}
                        alt={item.coverImage.alt}
                        width={1000}
                        height={1000}
                      />
                    </div>
                    <div>
                      <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white '>
                        {item.title}
                      </h5>
                    </div>
                    <p className='mb-3 line-clamp-3 font-normal text-gray-700 dark:text-gray-400'>
                      {item.subtitle}
                    </p>
                    <Button>Read more</Button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default BlogsPage;
