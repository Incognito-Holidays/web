/* eslint-disable @typescript-eslint/no-unsafe-call */
import BlogsCard from '@components/blog-card';

const BlogPage = () => {
  const description =
    ' Andaman: A paradise for nature lovers and adventure seekers The Andaman and Nicobar Islands, a nion territory of India, are a chain   of islands located in the Bay of Bengal. The islands are known for  their tunning beaches,';

  return (
    <div>
      <div className=''>
        <h1 className='my-4 pl-5 text-left text-3xl font-semibold text-blue-950 md:text-2xl'>
          # Travel Blogs
        </h1>
        <div className='mt-8 grid place-items-center gap-4 gap-y-7 md:grid-cols-3 md:gap-y-10'>
          <BlogsCard title='Andaman' desc={description} slug='/andaman' />
        </div>
      </div>
    </div>
  );
};
export default BlogPage;
