'use client';

import 'swiper/css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import photo1 from '@public/assets/sliderimg/slider-1.jpg';
import photo2 from '@public/assets/sliderimg/slider-4-custom-tour.jpg';
import photo3 from '@public/assets/sliderimg/slider-3-hotels.jpg';
import photo4 from '@public/assets/sliderimg/slider-2-flight-ticket.jpg';

const Hero = () => {
  const slideData = [
    {
      id: 1,
      src: photo1,
      alt: 'photo1'
    },
    {
      id: 2,
      src: photo2,
      alt: 'photo2'
    },
    {
      id: 3,
      src: photo3,
      alt: 'photo3'
    },
    {
      id: 4,
      src: photo4,
      alt: 'photo4'
    }
  ];

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
        {slideData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className='relative h-80 md:h-[28rem]'>
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority
                className='object-center'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
