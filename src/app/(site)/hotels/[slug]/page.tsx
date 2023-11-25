import 'swiper/css';
import Image from 'next/image';
import { getAllHotelLogos } from '@lib/functions/hotels';
import HotelSwiper from '@components/hotel-swiper';
import Container from '@components/layout/container';

const HotelDetails = async ({ params }: { params: { slug: string } }) => {
  const data = await getAllHotelLogos(params.slug);

  return (
    <div>
      <HotelSwiper />
      <Container>
        <div className='mt-6'>
          <div className='grid grid-cols-2 place-items-center gap-1 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-6'>
            {data.logos.map((item) => (
              <div key={item.asset.url}>
                <Image
                  src={item.asset.url}
                  alt={item.alt}
                  height={250}
                  width={250}
                  placeholder='blur'
                  blurDataURL={item.asset.lqip}
                  className=' w-32 rounded-lg'
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
export default HotelDetails;
