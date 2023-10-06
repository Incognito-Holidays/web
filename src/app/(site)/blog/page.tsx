/* eslint-disable @typescript-eslint/no-unsafe-call */
import BlogsCard from '@components/blog-card';
import { groq } from 'next-sanity';
import { sanityFetch } from '@lib/sanity/fetch';

type BlogProps = {
  title: string;
  subtitle: string;
  // slug: string;
};

const query = groq`
*[_type == 'blog']{
  title,
  subtitle,
  "slug": slug.current,
  'coverImage': coverImage.asset->{
    url,
    "lqip":metadata.lqip
  }
}
`;

const BlogPage = async () => {
  const data = await sanityFetch<BlogProps[]>({ query, tags: ['blog'] });
  console.log(data[0]);
  return (
    <div>
      <div className=''>
        <h1 className='my-4 pl-5 text-left text-3xl font-semibold text-blue-950 md:text-2xl'>
          # Travel Blogs
        </h1>
        <div className='mt-8 grid place-items-center gap-4 gap-y-7 md:grid-cols-3 md:gap-y-10'>
          <BlogsCard
            title={data[0].title}
            desc={data[0].subtitle}
            slug='/andaman'
          />
        </div>
      </div>
    </div>
  );
};
export default BlogPage;
