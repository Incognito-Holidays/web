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
    title,
    subtitle,
    coverImage {
      alt,
      asset -> {
        url,
        "lqip": metadata.lqip
      }
    },
    body
  }
`;
