import 'swiper/css';
import { getAllHotelLogos } from '@lib/functions/hotels';
import HotelSwiper from '@components/hotel-swiper';
import Container from '@components/layout/container';
import HotelLogo from '@components/hotel-logo';

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
