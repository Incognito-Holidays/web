'use client';

import { useState } from 'react';
import Image from 'next/image';
import HotelModal from './hotel-modal';

type Props = {
  place: string;
  data: {
    alt: string;
    hotelName: string;
    asset: {
      url: string;
      lqip: string;
    };
  };
};

const HotelLogo = ({ data, place }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Image
        src={data.asset.url}
        alt={data.alt}
        height={250}
        width={250}
        placeholder='blur'
        blurDataURL={data.asset.lqip}
        className=' w-32 cursor-pointer rounded-lg'
        onClick={(): void => setIsModalOpen(true)}
      />
      <HotelModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        place={place}
        hotelName={data.hotelName}
      />
    </>
  );
};

export default HotelLogo;
