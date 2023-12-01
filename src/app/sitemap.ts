import { getSitemap } from '@lib/functions/sitemap';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base =
    process.env.VERCEL_ENV === 'production'
      ? 'https://www.incognitoholidays.com'
      : 'https://beta.incognitoholidays.com';

  const data = await getSitemap();

  const holidayLocationUrls = data.holiday.locations.map((slug) => {
    return {
      url: `${base}/holidays/${slug}`,
      lastModified: new Date()
    };
  });

  const holidayPackageUrls = data.holiday.packages.flatMap((x) =>
    x.destination.map((y) => {
      return {
        url: `${base}/holidays/${y.package}`,
        lastModified: new Date()
      };
    })
  );

  const hotelLocationUrls = data.hotel.map((slug) => {
    return {
      url: `${base}/hotels/${slug}`,
      lastModified: new Date()
    };
  });

  const blogUrls = data.blog.map((slug) => {
    return {
      url: `${base}/blog/${slug}`,
      lastModified: new Date()
    };
  });

  return [
    {
      url: base,
      lastModified: new Date()
    },
    {
      url: `${base}/holidays`,
      lastModified: new Date()
    },
    {
      url: `${base}/hotels`,
      lastModified: new Date()
    },
    {
      url: `${base}/flights`,
      lastModified: new Date()
    },
    {
      url: `${base}/trains`,
      lastModified: new Date()
    },
    {
      url: `${base}/blog`,
      lastModified: new Date()
    },
    {
      url: `${base}/about`,
      lastModified: new Date()
    },
    {
      url: `${base}/contact`,
      lastModified: new Date()
    },
    ...holidayLocationUrls,
    ...holidayPackageUrls,
    ...hotelLocationUrls,
    ...blogUrls
  ];
}
