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
        BALI 3 NIGHTS & 4 DAYS
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
                    HOTEL 3* : Hardy Rofa Kuta
                  </h1>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Day 1:
                  </h1>
                  <h2 className='text-gray-800'>
                    <p>
                      Upon arrival meet & greet, welcome flowers garlands,
                      transfer to hotel (D)
                    </p>
                  </h2>
                </div>
                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Day 2:
                  </h1>
                  <h2 className='text-gray-800'>
                    <p>
                      Ubud & Kintamani Tour visit Celuk Gold & Silver Smith,Mas
                      Village the centre of wood carving, Agro Tourism,
                      Kintamani Volcano Sunset Dinner Cruise by Bounty (B/D)
                    </p>
                  </h2>
                </div>
                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Day 3:
                  </h1>
                  <h2 className='text-gray-800'>
                    <p>
                      Tanjung benoa water sport included 1x Banana Boat,turtle
                      Island other activities on own expenses , followed by
                      Uluwatu tour & Tanah lot tour (B/D)
                    </p>
                  </h2>
                </div>
                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Day 4:
                  </h1>
                  <h2 className='text-gray-800'>
                    <p>Transfer Out (B)</p>
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
                    <li>Transfer from Airport-hotel-Airport PVT</li>
                    <li>English Speaking Driver</li>
                    <li>
                      3 Nights stay with daily breakfast/Dinner At Indian
                      Restaurant
                    </li>
                    <li>Tours & Meals as per programs</li>
                    <li>Entrance Fee</li>
                    <li>Mineral Waters</li>
                    <li>Welcome Flowers garlands</li>
                    <li>VAT</li>
                  </ul>

                  {/* Exclusions details */}
                  <h1 className='text-lg font-semibold underline'>
                    Package Price Excludes
                  </h1>
                  <ul className='ml-6 list-disc'>
                    <li>Personal Expenses</li>
                    <li>Tipping Driver</li>
                    <li>Air ticket</li>
                    <li>SIM card</li>
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
                    <td className='px-6 py-4'>-</td>
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
