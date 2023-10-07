import type { PortableTextBlock } from 'sanity';

export type Blogs = {
  _id: string;
  title: string;
  slug: string;
  subtitle: string;
  coverImage: {
    alt: string;
    asset: {
      _id: string;
      url: string;
      lqip: string;
    };
  };
};

export type Blog = {
  title: string;
  subtitle: string;
  coverImage: {
    alt: string;
    asset: {
      url: string;
      lqip: string;
    };
  };
  body: PortableTextBlock[];
};
