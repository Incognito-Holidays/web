/* eslint-disable @typescript-eslint/no-unsafe-call */
import { PortableText } from '@portabletext/react';
import { groq } from 'next-sanity';
import Image from 'next/image';
import { sanityFetch } from '@lib/sanity/fetch';
import type { PortableTextBlock } from 'sanity';

type BlogProps = {
  title: string;
  subtitle: string;
  coverImage: { url: string; lqip: string };
  slug: string;
  body: PortableTextBlock[];
};

const query = groq`
*[_type == 'blog' && slug.current == $slug][0]{
  title,
  subtitle,
  "slug": slug.current,
  'coverImage': coverImage.asset->{
    url,
    "lqip":metadata.lqip
  },
    body
}
`;
const Page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const data = await sanityFetch<BlogProps>({
    query,
    params: { slug },
    tags: ['blog']
  });
  return (
    <div>
      <h1>{data.title}</h1>
      <Image
        src={data.coverImage.url}
        alt='coverImage'
        width={1000}
        height={1000}
      ></Image>
      <h3>{data.subtitle}</h3>
      <PortableText value={data.body} />
    </div>
  );
};

export default Page;
