import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { getBlog } from '@lib/functions/blog';
import { ogFields } from '@app/shared-metadata';
import type { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getBlog(params.slug);

  return {
    title: data.title,
    description: data.subtitle,
    alternates: {
      canonical: `/blog/${params.slug}`
    },
    openGraph: {
      ...ogFields,
      title: data.title,
      description: data.subtitle,
      url: `/blog/${params.slug}`,
      type: 'article',
      publishedTime: data._createdAt,
      modifiedTime: data._updatedAt,
      images: [
        {
          url: data.coverImage.asset.url,
          alt: data.coverImage.alt,
          width: data.coverImage.asset.metadata.width,
          height: data.coverImage.asset.metadata.height,
          type: data.coverImage.asset.metadata.type
        }
      ]
    }
  };
}

const BlogPage = async ({ params }: Props) => {
  const data = await getBlog(params.slug);

  return (
    <main className='prose prose-base max-w-none p-10 prose-h1:text-violet-950 prose-img:rounded-xl'>
      <h1>{data.title}</h1>
      <Image
        src={data.coverImage.asset.url}
        alt={data.coverImage.alt}
        width={1200}
        height={500}
        placeholder='blur'
        className='h-[30rem] w-full object-cover object-center'
        blurDataURL={data.coverImage.asset.lqip}
      />
      <h3>{data.subtitle}</h3>
      <PortableText value={data.body} />
    </main>
  );
};

export default BlogPage;
