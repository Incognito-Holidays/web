import 'swiper/css';
import { getAllHotelLogos } from '@lib/functions/hotels';
import { ogFields } from '@app/shared-metadata';
import HotelSwiper from '@components/hotel-swiper';
import Container from '@components/layout/container';
import HotelLogo from '@components/hotel-logo';
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
