/* eslint-disable @typescript-eslint/no-unsafe-call */
import { groq } from 'next-sanity';
import { sanityFetch } from '@lib/sanity/fetch';
import BlogsCard from '@components/blog-card';

type BlogProps = {
  title: string;
  subtitle: string;
  coverImage: { url: string; lqip: string };
  slug: string;
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
  // console.log(data[0]);
  return (
    <div>
      <div className=''>
        <h1 className='my-4 pl-5 text-left text-3xl font-semibold text-blue-950 md:text-2xl'>
          # Travel Blogs
        </h1>
        <div className='mt-8 grid place-items-center gap-4 gap-y-7 md:grid-cols-3 md:gap-y-10'>
          {data.map((item, idx) => {
            return (
              <BlogsCard
                key={idx}
                coverImage={item.coverImage}
                title={item.title}
                desc={item.subtitle}
                slug={item.slug}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default BlogPage;
