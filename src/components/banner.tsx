'use client';
import Image from 'next/image';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import photo1 from '@public/assets/b1.png';
import photo2 from '@public/assets/p2.png';
import photo3 from '@public/assets/p4.png';
import photo4 from '@public/assets/p1.png';
import photo5 from '@public/assets/p5.png';

const Banner = () => {
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
      modules={[Autoplay]}
    >
      {slideData.map((slide) => (
        <SwiperSlide key={slide.id}>
          <Image
            src={slide.src}
            alt={slide.alt}
            quality={95}
            width={1800}
            height={500}
            className=' h-[35rem] w-full  object-cover object-center sm:h-[22rem] md:h-[27rem]'
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
