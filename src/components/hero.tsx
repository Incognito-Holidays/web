'use client';

import 'swiper/css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Container from './layout/container';

const Hero = () => {
  const slideData = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1614591276564-7b3e69347a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
      alt: 'photo1'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1584732200355-486a95263014?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'photo2'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      alt: 'photo3'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1593261893060-7d88ec1681dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
      alt: 'photo4'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1491557345352-5929e343eb89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'photo5'
    }
  ];

  return (
    <div className='px-4'>
      <Container>
        <Swiper
          autoplay={{
            delay: 4000,
            disableOnInteraction: false
          }}
          loop
          modules={[Autoplay]}
          className='rounded-2xl'
        >
          {slideData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className='relative h-80 md:h-[28rem]'>
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority
                  className='object-cover object-center'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Hero;
