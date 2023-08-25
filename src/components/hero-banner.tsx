'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';
import photo1 from '@public/assets/spiritual.jpg';
import photo2 from '@public/assets/dubai.jpg';

const HeroBanner: React.FC = () => {
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
    }
  ];

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
      loop={true}
      navigation={true}
      modules={[Autoplay, Navigation]}
    >
      {slideData.map((slide) => (
        <SwiperSlide key={slide.id}>
          <Image src={slide.src} alt={slide.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroBanner;
