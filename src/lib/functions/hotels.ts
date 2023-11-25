import { sanityFetch } from '@lib/sanity/fetch';
import { hoteldestinationQuery, hotellogosQuery } from '@lib/sanity/queries';
import type { HotelDestinations, HotelLogos } from '@lib/types';

export function getAllHotelDestinations() {
  return sanityFetch<HotelDestinations[]>({
    query: hoteldestinationQuery,
    tags: ['hotel-location']
  });
}
export function getAllHotelLogos(slug: string) {
  return sanityFetch<HotelLogos>({
    query: hotellogosQuery,
    params: { slug },
    tags: ['hotel-logos']
  });
}
