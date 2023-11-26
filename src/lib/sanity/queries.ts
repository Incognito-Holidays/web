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
      alt,
      asset -> {
        url,
        "lqip": metadata.lqip,
        "metadata": {
          "type": mimeType,
          "height": metadata.dimensions.height,
          "width": metadata.dimensions.width
        }
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

export const destinationBySlugQuery = groq`
  *[_type == "location" && $slug == slug.current][0] {
    name,
    image {
      alt,
      asset -> {
        url,
        "lqip": metadata.lqip,
        "metadata": {
          "type": mimeType,
          "height": metadata.dimensions.height,
          "width": metadata.dimensions.width
        }
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
    "destSlug": destination[0]->slug.current,
    "destinationName": destination[]->name,
    description,
    gallery[] {
      alt,
      asset -> {
        url,
        "lqip": metadata.lqip,
        "metadata": {
          "type": mimeType,
          "height": metadata.dimensions.height,
          "width": metadata.dimensions.width
        }
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
