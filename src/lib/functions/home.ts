import { sanityFetch } from '@lib/sanity/fetch';
import { cardQuery, homePageSearchQuery } from '@lib/sanity/queries';
import type { Cards, Search } from '@lib/types';

export function getHomePageSearch() {
  return sanityFetch<Search[]>({
    query: homePageSearchQuery,
    tags: ['location']
  });
}

export function getAllCards() {
  return sanityFetch<Cards[]>({ query: cardQuery, tags: ['holiday'] });
}
