'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';
import photo1 from '@public/assets/p1.png';
import photo2 from '@public/assets/p2.png';
import photo3 from '@public/assets/p3.png';
import photo4 from '@public/assets/p4.png';
import photo5 from '@public/assets/p5.png';

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
    },
    {
      id: 5,
      src: photo5,
      alt: 'photo5'
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
