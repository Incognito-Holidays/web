/* eslint-disable react/no-unescaped-entities */

'use client';

import Image from 'next/image';
import { Tab } from '@headlessui/react';
import bali1 from '@public/assets/package.jpeg';

const Page: React.FC = () => {
  function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <section className='max-w-6xl'>
      {/* Heading */}
      <h1 className='text-center text-3xl font-bold text-cyan-600'>
        BALI JAVA INDONESIA
      </h1>

      {/* Banner image */}
      <Image
        src={bali1}
        alt='bali1'
        quality={95}
        className='mt-6 h-96 w-full rounded-lg object-cover object-bottom'
      />
      <div className='mt-12 flex flex-col gap-x-10 md:flex-row'>
        <div className='space-y-8'>
          {/* Tour overview/summary */}
          <h2 className='text-2xl font-bold'>Tour Overview</h2>
          <p className='text-justify'>
            Bali Island stands as a captivating and compact landmass within
            Indonesia's expansive archipelago. It has gained global recognition
            as the most renowned Indonesian destination for tourism. This is
            primarily due to its stunning vistas and distinct cultural heritage,
            setting it apart from other locations. Nestled in a tropical
            setting, Bali is often regarded as a dreamlike paradise for
            vacations. Known as the "Island of the Gods," Bali boasts diverse
            topography featuring hills, mountains, rugged coastlines, and sandy
            beaches. The lush terraced rice fields and volcanic slopes
            contribute to a mesmerizing backdrop that beautifully complements
            its vibrant, profoundly spiritual, and one-of-a-kind culture. It's
            no exaggeration to consider Bali a slice of heaven on earth.
          </p>

          <Tab.Group>
            <Tab.List className='flex space-x-1 rounded-xl bg-blue-950 p-1'>
              {/* Itinerary heading */}
              <Tab
                className={({ selected }): string =>
                  classNames(
                    'w-full rounded-lg py-1 text-sm font-medium leading-5 sm:py-2.5',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white text-blue-900 shadow'
                      : 'text-white hover:bg-white/[0.12]'
                  )
                }
              >
                Itinerary
              </Tab>

              {/* Inclusions & Exclusions heading */}
              <Tab
                className={({ selected }): string =>
                  classNames(
                    'w-full rounded-lg py-1 text-sm font-medium leading-5 sm:py-2.5',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white text-blue-900 shadow'
                      : 'text-white hover:bg-white/[0.12]'
                  )
                }
              >
                Inclusions & Exclusions
              </Tab>

              {/* Terms & Conditions heading */}
              <Tab
                className={({ selected }): string =>
                  classNames(
                    'w-full rounded-lg py-1 text-sm font-medium leading-5 sm:py-2.5',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white text-blue-900 shadow'
                      : 'text-white hover:bg-white/[0.12]'
                  )
                }
              >
                Terms & Conditions
              </Tab>
            </Tab.List>
            <Tab.Panels className='!mt-4 rounded-2xl border-2 border-gray-300'>
              {/* Itinerary details */}
              <Tab.Panel
                className={classNames(
                  'space-y-4 rounded-xl bg-white p-3',
                  'focus:outline-none'
                )}
              >
                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Day 1: Kolkata – Jakarta
                  </h1>
                  <h2 className='text-gray-800'>
                    <p>
                      Arrival at Jakarta and after immigration process transfer
                      to hotel.
                    </p>
                    <p>Evening free for leisure. </p>
                    <p>Overnight stay at Jakarta.</p>
                  </h2>
                </div>
                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Day 2: Jakarta
                  </h1>
                  <h2 className='text-gray-800'>
                    <p>
                      After breakfast proceed to Jakarta City tour covering
                      Merdeka square, National Monument and National Museum,
                      which is reputed to be the finest in Southeast Asia. It
                      has the World's most complete collection of Han, Tang and
                      Ming porcelains.
                    </p>
                    <p>Overnight stay at Jakarta.</p>
                  </h2>
                </div>
                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Day 3: Jakarta - Yogyarta
                  </h1>
                  <h2 className='text-gray-800'>
                    <p>
                      After breakfast transfer to airport for flight to Yogyarta
                      at 8:05 am, and arrive Yogyakarta at 9:20 am and transfers
                      to hotel.
                    </p>
                    <p>
                      Then proceed to visit 9th century Hindu Temple of
                      Prambanan also famous as The Roro Jongrang Temple (the
                      slender virgin).
                    </p>
                    <p>
                      Then after proceed to Borobudur – One of the greatest
                      Boddhist monuments in Southeast Asia, biggest non-monastic
                      Buddhist Temple in the World.
                    </p>
                    <p>Overnight stay at Yogyakarta.</p>
                  </h2>
                </div>
                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Day 4: Yogyarta - Bali
                  </h1>
                  <h2 className='text-gray-800'>
                    <p>
                      After breakfast transfer to airport for flight to Bali at
                      8:25 am, and arrive Bali at 10:50 am and after immigration
                      process transfers to hotel.
                    </p>
                    <p>
                      Evening free for leisure and shopping. Overnight stay at
                      Bali.
                    </p>
                  </h2>
                </div>
                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Day 5: Bali – Full day Ubud – Kintamani Tour
                  </h1>
                  <h2 className='text-gray-800'>
                    <p>After breakfast proceed for full day tour.</p>
                    <p>
                      The highlights of this tour is the magnificent view of
                      Mount and Lake Batur with the rising Mount Agung in the
                      background.
                    </p>
                    <p>
                      Then visit to the heart of Balinese handicraft production
                      (Celek for silver, Mas for woodcarving and Ubud for
                      paintings), the holy springs of Tirta Empul at Tampak
                      Siring are included in this tour, which gives a complete
                      panorama of Balinese art, culture and beautiful landscape.
                    </p>
                    <p>Overnight stay at Bali.</p>
                  </h2>
                </div>
                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Day 6: Bali – Denpasar City Tour and Tanah Lot Temple
                  </h1>
                  <h2 className='text-gray-800'>
                    <p>
                      After breakfast proceed for Half day Denpasar city tour
                      which includes Art Center and Bali Museum – which has a
                      collection of ancient objects related to the history of
                      Bali.
                    </p>
                    <p>
                      Then proceed to Tanah Lot Temple which proudly stands
                      inside the Ocean on its rocky platform and where you will
                      see Bali’s most beautiful sunset.
                    </p>
                    <p>
                      Evening free for leisure and shopping. Overnight stay at
                      Bali.
                    </p>
                  </h2>
                </div>
                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Day 7: Bali
                  </h1>
                  <h2 className='text-gray-800'>
                    <p>
                      After breakfast free for leisure. Later transfer to
                      airport for flight to India.
                    </p>
                  </h2>
                </div>
              </Tab.Panel>
              <Tab.Panel
                className={classNames(
                  'space-y-4 rounded-xl bg-white p-3',
                  'focus:outline-none'
                )}
              >
                <div className='space-y-2'>
                  {/* Inclusions details */}
                  <h1 className='text-lg font-semibold underline'>
                    Package Price Includes
                  </h1>
                  <ul className='ml-6 list-disc'>
                    <li>Breakfast and dinner.</li>
                    <li>3 star accommodation Double/ Twin sharing basis.</li>
                    <li>All Transfers and Sightseeing</li>
                    <li>All Entry Fees</li>
                  </ul>

                  {/* Exclusions details */}
                  <h1 className='text-lg font-semibold underline'>
                    Package Price Excludes
                  </h1>
                  <ul className='ml-6 list-disc'>
                    <li>Return Airfare</li>
                    <li>Meals other than specified in the itinerary.</li>
                    <li>
                      Items of personal nature viz., drinks, laundry, call, etc.
                    </li>
                    <li>Anything not mentioned in the price includes.</li>
                    <li>Tips USD 2 per person per day.</li>
                    <li>GST + TCS 5%.</li>
                    <li>Insurance.</li>
                  </ul>
                </div>
              </Tab.Panel>
              <Tab.Panel
                className={classNames(
                  'space-y-4 rounded-xl bg-white p-3',
                  'focus:outline-none'
                )}
              >
                Terms and Conditions apply
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
        <div className='space-y-8'>
          {/* Price details */}
          <div className='mt-8 md:mt-0'>
            <h1 className='text-lg font-semibold'>Price Details:</h1>
            <div className='relative mt-4 overflow-x-auto'>
              <table className='w-full border-2 border-gray-300 text-center text-sm text-gray-800'>
                <thead className='bg-gray-50 text-xs uppercase text-gray-800'>
                  <tr>
                    <th scope='col' className='px-6 py-3'>
                      Economy/Standard
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Deluxe
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Luxury
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b bg-white'>
                    <td className='px-6 py-4'>
                      Rs. 56000/- per person on twin or double sharing basis
                    </td>
                    <td className='px-6 py-4'>-</td>
                    <td className='px-6 py-4'>-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Book button */}
          <button className='w-full rounded-md bg-cyan-600 p-3 text-white'>
            Book now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Page;
