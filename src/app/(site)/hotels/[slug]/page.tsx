import 'swiper/css';
import { LuChevronRight } from 'react-icons/lu';
import { getAllHotelLogos } from '@lib/functions/hotels';
import { ogFields } from '@app/shared-metadata';
import HotelSwiper from '@components/hotel-swiper';
import Container from '@components/layout/container';
import HotelLogo from '@components/hotel-logo';
import NextBreadcrumb from '@components/breadcrumbs';
import type { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getAllHotelLogos(params.slug);

  return {
    title: data.name,
    alternates: {
      canonical: `/hotels/${params.slug}`
    },
    openGraph: {
      ...ogFields,
      title: data.name,
      url: `/hotels/${params.slug}`,
      images: [
        {
          url: data.image.asset.url,
          alt: data.image.alt,
          width: data.image.asset.metadata.width,
          height: data.image.asset.metadata.height,
          type: data.image.asset.metadata.type
        }
      ]
    }
  };
}

const HotelDetails = async ({ params }: { params: { slug: string } }) => {
  const data = await getAllHotelLogos(params.slug);

  return (
    <div>
      <NextBreadcrumb
        homeElement={'Home'}
        separator={
          <span className='flex items-center'>
            <LuChevronRight />
          </span>
        }
        activeClasses='text-amber-500'
        containerClasses='flex py-1'
        listClasses='hover:underline mx-2 font-bold text-sm'
        capitalizeLinks
      />
      <HotelSwiper slider={data.slider} />
      <Container>
        <div className='mb-6 mt-6'>
          <div className='grid grid-cols-2 place-items-center gap-1 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-6'>
            {data.logos.map((item) => (
              <HotelLogo key={item.asset.lqip} place={data.name} data={item} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
export default HotelDetails;
