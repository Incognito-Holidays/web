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
      asset -> {
        url,
        "lqip": metadata.lqip
      }
    },
    body
  }
`;

export const cardQuery = groq`
* [_type == "holiday"] {
  _id,
    title,
    description,
    "slug":slug.current,
    coverImage{
      alt,
      asset -> {
        url,
        "lqip":metadata.lqip
      }
    }
    
}
`;

export const destinationQuery = groq`
* [_type == "location"] {
  _id,
    "slug": slug.current,
    name,
    image{
      alt,asset -> {
        url,"lqip":metadata.lqip
      }
    }
}
`;
