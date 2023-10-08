import { sanityFetch } from '@lib/sanity/fetch';
import { destinationQuery } from '@lib/sanity/queries';
import type { Destination } from '@lib/types';

export function getAllDestination() {
  return sanityFetch<Destination[]>({
    query: destinationQuery,
    tags: ['destination']
  });
}
