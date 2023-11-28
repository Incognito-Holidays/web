import { groq } from 'next-sanity';

export const allBlogsQuery = groq`
  *[_type == 'blog'] {
    _id,
    title,
    "slug": slug.current,
    subtitle,
    coverImage {
      alt,
      asset -> {
        url,
        "lqip": metadata.lqip
      }
    }
  }
`;

export const blogQuery = groq`
  *[_type == 'blog' && slug.current == $slug][0] {
    _createdAt,
    _updatedAt,
    title,
    subtitle,
    coverImage {
      asset -> {
        url,
        "lqip": metadata.lqip
      }
    },
    body
  }
`;

export const homePageSearchQuery = groq`
  *[_type == "location"] {
    _id,
    name,
    "slug": slug.current
  }
`;

export const cardQuery = groq`
  * [_type == "holiday"] {
    _id,
    title,
    description,
    "destinationSlug":destination[0] -> slug.current,
    "packageSlug":slug.current,
    coverImage {
      alt,
      asset -> {
        url,
        "lqip": metadata.lqip
      }
    }
  }
`;

export const destinationQuery = groq`
  * [_type == "location"] {
    _id,
    "slug": slug.current,
    name,
    image {
      alt,
      asset -> {
        url,
        "lqip": metadata.lqip
      }
    }
  }
`;

export const packagesCountByDestinationQuery = groq`
  count(*[_type == "holiday" && $slug in destination[]->slug.current])
`;

export const packagesByDestinationQuery = groq`
  *[_type == "holiday" && $slug in destination[]->slug.current] {
    _id,
    title,
    "slug": slug.current,
    coverImage {
      alt,
      asset -> {
        url,
        "lqip": metadata.lqip
      }
    },
    description,
    "startingPrice": price[0].rate
}
`;

export const packageQuery = groq`
  *[_type == "holiday" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    "destinationName": destination[]->name,
    description,
    gallery[] {
      alt,
      asset -> {
        url,
        "lqip": metadata.lqip
      }
    },
    daysNights,
    price[] {
      type,
      rate
    },
    itinerary,
    inclusionExclusion,
    termsConditions,
    hotel[] {
      hotelName,
      rating
    }
  }
`;

export const hoteldestinationQuery = groq`
  * [_type == "hotels"] {
    _id,
    "slug": slug.current,
    name,
    image {
      alt,
      asset -> {
        url,
        "lqip": metadata.lqip
      }
    }
  }
`;
export const hotellogosQuery = groq`
  * [_type == "hotels"  && slug.current == $slug][0] {
    _id,
    "slug": slug.current,
    logos[] {
      alt,
      asset -> {
        url,
        "lqip": metadata.lqip
      }
    },
    slider[] {
      alt,
      asset -> {
        url,
        "lqip": metadata.lqip
      }
    }
}`;
