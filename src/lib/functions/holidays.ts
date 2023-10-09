import { sanityFetch } from '@lib/sanity/fetch';
import {
  destinationQuery,
  packageQuery,
  packagesByDestinationQuery,
  packagesCountByDestinationQuery
} from '@lib/sanity/queries';
import type { DestinationPackages, Destinations, Package } from '@lib/types';

export function getAllDestinations() {
  return sanityFetch<Destinations[]>({
    query: destinationQuery,
    tags: ['location']
  });
}

export function getPackagesCountByDestination(slug: string) {
  return sanityFetch<number>({
    query: packagesCountByDestinationQuery,
    params: { slug },
    tags: ['holiday']
  });
}

export function getPackagesByDestination(slug: string) {
  return sanityFetch<DestinationPackages[]>({
    query: packagesByDestinationQuery,
    params: { slug },
    tags: ['loaction', 'holiday']
  });
}

export function getPackage(slug: string) {
  return sanityFetch<Package>({
    query: packageQuery,
    params: { slug },
    tags: [`holiday:${slug}`]
  });
}
