'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

type Props = {
  slider: {
    alt: string;
    asset: {
      url: string;
      lqip: string;
    };
  }[];
};

const HotelSwiper = ({ slider }: Props) => {
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: false
        }}
        loop
        modules={[Autoplay]}
      >
        {slider.map((slide) => (
          <SwiperSlide key={slide.asset.lqip}>
            <div className='relative h-64 md:h-[25rem]'>
              <Image
                src={slide.asset.url}
                alt={slide.alt}
                blurDataURL={slide.asset.lqip}
                fill
                priority
                className='object-cover object-center'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HotelSwiper;
