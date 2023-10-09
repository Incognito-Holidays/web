import { sanityFetch } from '@lib/sanity/fetch';
import { allBlogsQuery, blogQuery } from '@lib/sanity/queries';
import type { Blog, Blogs } from '@lib/types';

export function getAllBlogs() {
  return sanityFetch<Blogs[]>({ query: allBlogsQuery, tags: ['blog'] });
}

export function getBlog(slug: string) {
  return sanityFetch<Blog>({
    query: blogQuery,
    params: { slug },
    tags: [`blog:${slug}`]
  });
}
