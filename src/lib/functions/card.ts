import { sanityFetch } from '@lib/sanity/fetch';
import { cardQuery } from '@lib/sanity/queries';
import type { Cards } from '@lib/types';

export function getAllCards() {
  return sanityFetch<Cards[]>({ query: cardQuery, tags: ['holiday'] });
}
