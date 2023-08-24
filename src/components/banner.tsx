'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import photo1 from '../images/Spiritual.jpg';
import photo2 from '../images/Dubai.jpg';

export default function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        loop={true}
        // pagination={{
        //   clickable: true
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        //className="mySwiper"
      >
        <SwiperSlide>
          <Image src={photo1} alt='photo1' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={photo2} alt='photo2' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={photo1} alt='photo1' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={photo2} alt='photo2' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={photo1} alt='photo1' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={photo2} alt='photo2' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
