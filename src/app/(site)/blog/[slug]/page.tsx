import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { LuChevronRight } from 'react-icons/lu';
import { getBlog } from '@lib/functions/blog';
import { ogFields } from '@app/shared-metadata';
import NextBreadcrumb from '@components/breadcrumbs';
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
    <div>
      <main className='prose prose-base max-w-none p-10 prose-h1:text-violet-950 prose-img:rounded-xl'>
        <h1>{data.title}</h1>
        <div className=''>
          <Image
            src={data.coverImage.asset.url}
            alt={data.coverImage.alt}
            width={1200}
            height={500}
            placeholder='blur'
            className='relative h-80 md:h-[28rem]'
            blurDataURL={data.coverImage.asset.lqip}
          />
          <NextBreadcrumb
            homeElement={'Home'}
            separator={
              <span className='flex items-center'>
                <LuChevronRight />
              </span>
            }
            activeClasses='text-amber-500'
            containerClasses='flex py-1'
            listClasses='hover:underline mx-2 font-bold text-sm'
            capitalizeLinks
          />
        </div>
        <h3>{data.subtitle}</h3>
        <PortableText value={data.body} />
      </main>
    </div>
  );
};

export default BlogPage;
