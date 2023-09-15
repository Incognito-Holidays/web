'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import g1 from '@public/assets/g1.jpg';
import g2 from '@public/assets/g2.jpg';
import g3 from '@public/assets/g3.jpg';
import g4 from '@public/assets/g4.jpg';

const TravelBlogs: React.FC = () => {
  const slideData = [
    {
      id: 1,
      src: g3,
      alt: 'g3',
      heading: 'Thailand',
      desc: "With our all-inclusive package, discover Thailand's beauty! Explore historic temples, unwind on stunning beaches, and indulge in genuine Thai food. A memorable journey is guaranteed by experienced guides, flawless planning, and custom itineraries. Reserve your ideal trip to Thailand today!"
    },
    {
      id: 2,
      src: g4,
      alt: 'g4',
      heading: 'Vietnam',
      desc:
        "Flee to Vietnam's captivating beauty! Explore the rich tapestry of cuisine and culture, from frantic Hanoi to tranquil Ha Long Bay. Spend time in Hoi An's historic streets and enjoy the friendliness of the people there. Discover the unusual. " +
        '"Unveil Vietnam!"'
    },
    {
      id: 3,
      src: g2,
      alt: 'g2',
      heading: 'Sri Lanka',
      desc: "Explore Sri Lanka's wonderland! Enjoy the gorgeous surroundings, which range from golden beaches to misty tea fields. Experience Sigiriya's rich history while indulging in mouthwatering cuisine. Witness the remarkable benevolence of locals. Explore Sri Lanka, a place where tranquilly and adventure coexist."
    },
    {
      id: 4,
      src: g1,
      alt: 'g1',
      heading: 'Bali',
      desc: "In Bali's wonderland, let your wanderlust loose! Give in to the temptation of the bustling nightlife, picturesque rice terraces, and sun-kissed beaches. Enjoy every mouthful of the finest Balinese flavors, experience the magical aura of historic temples, and rejuvenate tranquilly at opulent resorts."
    }
  ];

  return (
    <div className='bg-slate-100 pb-2 pt-2'>
      <div className='m-10 rounded-lg bg-white p-4 shadow-xl ring-1 ring-slate-900/5'>
        <h1 className='text-center text-3xl font-bold text-cyan-700'>
          Travel Stories
        </h1>
        <Swiper
          slidesPerView={1}
          pagination={{
            clickable: true
          }}
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
            }
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          {slideData.map((slide) => (
            <SwiperSlide key={slide.id} className='flex flex-auto gap-2 p-8'>
              <div className='max-w-sm rounded-lg border border-gray-200 bg-white shadow'>
                <a href='#'>
                  <Image
                    src={slide.src}
                    className='rounded-t-lg'
                    alt={slide.alt}
                  />
                </a>
                <div className='p-5'>
                  <a href='#'>
                    <h5 className='mb-2 text-xl font-bold tracking-tight text-black '>
                      {slide.heading}
                    </h5>
                  </a>
                  <p className='mb-3 text-sm font-normal text-gray-900'>
                    {slide.desc.substring(0, 205)}...
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TravelBlogs;
