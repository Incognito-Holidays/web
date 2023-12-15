'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Card from './card';
import type { Cards } from '@lib/types';

type Props = {
  data: Cards[];
};
const PackageSwiperDomestic = ({ data }: Props) => {
  return (
    <div className=''>
      <div className='m-10'>
        <Swiper
          slidesPerView={1}
          // pagination={{
          //   clickable: true
          // }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10
            },
            1224: {
              slidesPerView: 4,
              spaceBetween: 10
            }
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          {data.map((slide) =>
            slide.type === 'domestic' ? (
              <SwiperSlide key={slide._id} className='flex flex-auto gap-6 p-2'>
                <Card
                  key={slide._id}
                  title={slide.title}
                  coverImage={slide.coverImage}
                  type={slide.type}
                  description={slide.description}
                  destinationSlug={slide.destinationSlug}
                  packageSlug={slide.packageSlug}
                />
              </SwiperSlide>
            ) : null
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default PackageSwiperDomestic;
