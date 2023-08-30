/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import bali1 from '@public/assets/package.jpeg';

const page: React.FC = () => {
  return (
    <section className='mx-auto max-w-3xl space-y-8'>
      <h1 className='text-center text-3xl font-bold italic text-cyan-600'>
        BEAUTIFUL BALI
      </h1>
      <Image src={bali1} alt='bali1' className='mx-auto' quality={95} />
      <h2 className='text-2xl font-bold'>Tour Overview</h2>
      <p className='text-justify'>
        Bali Island is a small beautiful island and a part of Indonesia's
        archipelago, and the most famous of Indonesian tourism in the world. It
        owns the panorama and unique culture that makes this island exclusive to
        others. Furthermore, Its location is in the tropical situation as Dream
        Island for a vacation. Bali, the famed Island of the Gods, with its
        varied landscape of hills and mountains, rugged coastlines and sandy
        beaches, lush rice terraces, and volcanic hillsides all providing a
        picturesque backdrop to its colourful, deeply spiritual, and unique
        culture stakes a serious claim to be paradise on earth.Bali has
        something for everyone, from adventure activities to spiritual retreats
        to cultural experiences. The island's natural beauty, rich culture, and
        warm hospitality make it a must-visit destination for travellers from
        all around the world.
      </p>
    </section>
  );
};

export default page;
