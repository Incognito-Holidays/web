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
    <main>
      <h1>{data.title}</h1>
      <Image
        src={data.coverImage.asset.url}
        alt={data.coverImage.alt}
        width={1000}
        height={1000}
        placeholder='blur'
        blurDataURL={data.coverImage.asset.lqip}
      />
      <h3>{data.subtitle}</h3>
      <PortableText value={data.body} />
    </main>
  );
};

export default BlogPage;
