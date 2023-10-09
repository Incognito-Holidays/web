import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { getBlog } from '@lib/functions/blog';

type BlogPageProps = {
  params: {
    slug: string;
  };
};

const BlogPage = async ({ params }: BlogPageProps) => {
  const { slug } = params;
  const data = await getBlog(slug);

  return (
    <main className='prose prose-base max-w-none p-10 prose-h1:text-violet-950 prose-img:rounded-xl'>
      <h1>{data.title}</h1>
      <Image
        src={data.coverImage.asset.url}
        alt={data.coverImage.alt}
        width={1200}
        height={500}
        placeholder='blur'
        className=' h-[30rem] w-full  object-cover object-center'
        blurDataURL={data.coverImage.asset.lqip}
      />
      <h3>{data.subtitle}</h3>
      <PortableText value={data.body} />
    </main>
  );
};

export default BlogPage;
