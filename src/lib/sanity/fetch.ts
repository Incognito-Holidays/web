import 'server-only';

import { client } from './client';
import { revalidateSecret } from './api';
import type { QueryParams } from '@sanity/client';

const DEFAULT_PARAMS = {} as QueryParams;
const DEFAULT_TAGS = [] as string[];

export async function sanityFetch<QueryResponse>({
  query,
  params = DEFAULT_PARAMS,
  tags = DEFAULT_TAGS
}: {
  query: string;
  params?: QueryParams;
  tags: string[];
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, params, {
    cache: revalidateSecret ? 'force-cache' : 'no-store',
    next: { tags }
  });
}
