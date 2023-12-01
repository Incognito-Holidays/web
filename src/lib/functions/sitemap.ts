import { sanityFetch } from '@lib/sanity/fetch';
import { sitemapQuery } from '@lib/sanity/queries';
import type { Sitemap } from '@lib/types';

export function getSitemap() {
  return sanityFetch<Sitemap>({
    query: sitemapQuery,
    tags: ['location', 'holiday', 'hotels', 'blog']
  });
}
