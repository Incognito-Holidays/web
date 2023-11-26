import type { PortableTextBlock } from 'sanity';

export type Blogs = {
  _id: string;
  title: string;
  slug: string;
  subtitle: string;
  coverImage: {
    alt: string;
    asset: {
      _id: string;
      url: string;
      lqip: string;
    };
  };
};

export type Blog = {
  _createdAt: string;
  _updatedAt: string;
  title: string;
  subtitle: string;
  coverImage: {
    alt: string;
    asset: {
      url: string;
      lqip: string;
      metadata: {
        type: string;
        height: number;
        width: number;
      };
    };
  };
  body: PortableTextBlock[];
};

export type Search = {
  _id: string;
  name: string;
  slug: string;
};

export type Cards = {
  _id: string;
  title: string;
  description: string;
  destinationSlug: string;
  packageSlug: string;
  coverImage: {
    alt: string;
    asset: {
      url: string;
      lqip: string;
    };
  };
};

export type Destinations = {
  _id: string;
  slug: string;
  name: string;
  image: {
    alt: string;
    asset: {
      url: string;
      lqip: string;
    };
  };
};

export type Destination = {
  name: string;
  image: {
    alt: string;
    asset: {
      url: string;
      lqip: string;
      metadata: {
        type: string;
        height: number;
        width: number;
      };
    };
  };
};

export type DestinationPackages = {
  _id: string;
  title: string;
  slug: string;
  coverImage: {
    alt: string;
    asset: {
      url: string;
      lqip: string;
    };
  };
  description: string;
  startingPrice: number;
};

export type Package = {
  title: string;
  destSlug: string;
  destinationName: string[];
  description: string;
  gallery: {
    alt: string;
    asset: {
      url: string;
      lqip: string;
      metadata: {
        type: string;
        height: number;
        width: number;
      };
    };
  }[];
  daysNights: {
    days: number;
    nights: number;
  };
  price: {
    type: string;
    rate: number;
  }[];
  itinerary: PortableTextBlock[];
  inclusionExclusion: PortableTextBlock[];
  termsConditions: PortableTextBlock[];
  hotel: {
    hotelName: string;
    rating: number;
  }[];
};
