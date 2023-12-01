import { sanityFetch } from '@lib/sanity/fetch';
import {
  destinationBySlugQuery,
  destinationQuery,
  packageQuery,
  packagesByDestinationQuery,
  packagesCountByDestinationQuery
} from '@lib/sanity/queries';
import type {
  Destination,
  DestinationPackages,
  Destinations,
  Package
} from '@lib/types';

export function getAllDestinations() {
  return sanityFetch<Destinations[]>({
    query: destinationQuery,
    tags: ['location']
  });
}

export function getDestination(slug: string) {
  return sanityFetch<Destination>({
    query: destinationBySlugQuery,
    params: { slug },
    tags: [`location:${slug}`]
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
    tags: ['location', 'holiday']
  });
}

export function getPackage(slug: string) {
  return sanityFetch<Package>({
    query: packageQuery,
    params: { slug },
    tags: [`holiday:${slug}`]
  });
}
