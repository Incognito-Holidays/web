/* eslint-disable react/no-unescaped-entities */

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Tab } from '@headlessui/react';
import Modal from '@components/modal';
import bali1 from '@public/assets/package.jpeg';

const Page: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <section className='max-w-6xl'>
      <h1 className='text-center text-3xl font-bold text-cyan-600'>
        SRILANKA PACKAGE 4 NIGHTS / 5 DAYS
      </h1>
      <Image
        src={bali1}
        alt='bali1'
        quality={95}
        className='mt-6 h-96 w-full rounded-lg object-cover object-bottom'
      />
      <div className='mt-12 flex flex-col gap-x-10 md:flex-row'>
        <div className='space-y-8'>
          <h2 className='text-2xl font-bold'>Tour Overview</h2>
          <p className='text-justify'>{/* Overview */}</p>

          <Tab.Group>
            <Tab.List className='flex space-x-1 rounded-xl bg-blue-950 p-1'>
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
              <Tab.Panel
                className={classNames(
                  'space-y-4 rounded-xl bg-white p-3',
                  'focus:outline-none'
                )}
              >
                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Day 1: Airport - Kandy
                  </h1>
                  <h2 className='text-gray-800'>
                    <p>
                      En route Visit Pinnawala Elephant Orphanage in the evening
                      witness of cultural show, Visit Kandy Temple, Peradeniya
                      Botanical Garden, , Gem shop.
                    </p>
                  </h2>
                </div>
                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Day 2: Kandy - Nuwara Eliya
                  </h1>
                  <h2 className='text-gray-800'>
                    <p className='text-justify'>
                      Visit tea factory ,Seetha Temple , Gregory Lake ,
                      Nuwaraeliya City tour.
                    </p>
                  </h2>
                </div>
                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Day 3: Nuwara Eliya - Bentota
                  </h1>
                  <h2 className='text-gray-800'>
                    <p>
                      Visit Turtle Farm , Madhu river boat ride, water sports.
                    </p>
                  </h2>
                </div>
                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Day 4: Bentota – Colombo
                  </h1>
                  <h2 className='text-gray-800'>
                    <p>Colombo City tour & Shopping</p>
                  </h2>
                </div>
                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Day 5:
                  </h1>
                  <h2 className='text-gray-800'>
                    <p>Departure</p>
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
                  <h1 className='text-lg font-semibold underline'>
                    Inclusions
                  </h1>
                  <ul className='ml-6 list-disc'>
                    <li>Accommodation in hotels specified.</li>
                    <li>04Breakfasts + 04 Dinners at the hotel itself. </li>
                    <li>
                      Transportation in PRIVATE A/C Vehicle with a service of an
                      English speaking chauffer guide.
                    </li>
                    <li>Value added tax.</li>
                    <li>Meeting and Assistance at the airport.</li>
                    <li>All the government taxes.</li>
                  </ul>
                  <h1 className='text-lg font-semibold underline'>
                    Exclusions
                  </h1>
                  <ul className='ml-6 list-disc'>
                    <li>All entrance fees cost</li>
                    <li>Lunch</li>
                    <li>Early check in & late checkout. </li>
                    <li>Camera & video permits during the sightseeing.</li>
                    <li>
                      Visa & other charges(Entry Visa Fees, please visit
                      www.eta.gov.lk for more details / submit your individual
                      visa application)
                    </li>
                    <li>Any expenses of a personal nature. </li>
                    <li>Tips & Portages.</li>
                  </ul>
                </div>

                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold underline'>
                    Supplement cost for Entrance Fees (Per person)
                  </h1>
                  <ul className='ml-6 list-disc'>
                    <li>US$ 10 Pinnawala Elephant Orphanage.</li>
                    <li>US$ 05 Kandy Temple.</li>
                    <li>US$ 05 Cultural show.</li>
                    <li>US$ 12 Peradeniya Botanical Garden.</li>
                    <li>US$ 12 Hakgala Botanical Garden.</li>
                    <li>US$ 03 Victoria park.</li>
                    <li>Us$ 03 Gregory Lake boat ride</li>
                    <li>US$ 03 Turtle Farm, Kosgoda(Bentota)</li>
                    <li>Us$ 10 Madhuriver boat ride.</li>
                    <li>
                      US$ 20 water sports ( 01 banana boat ride and 01 jetski)
                    </li>
                    <li>US$ 02 Gangarama Tempe</li>
                  </ul>
                </div>
              </Tab.Panel>
              <Tab.Panel
                className={classNames(
                  'space-y-4 rounded-xl bg-white p-3',
                  'focus:outline-none'
                )}
              >
                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold underline '>
                    Terms & Conditions applied
                  </h1>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>

          <div>
            <h1 className='text-lg font-semibold'>Hotel Details:</h1>
            <div className='relative mt-4 overflow-x-auto'>
              <table className='w-full border-2 border-gray-300 text-left text-sm text-gray-800'>
                <thead className='bg-gray-50 text-xs uppercase text-gray-800'>
                  <tr>
                    <th scope='col' className='px-6 py-3'>
                      Data
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      No of Nights
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Places
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Hotels - 3 * or Similar
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Hotels - 4* or Similar
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Hotels - 5* or Similar
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b bg-white'>
                    <th
                      scope='row'
                      className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'
                    >
                      Day 1
                    </th>
                    <td className='px-6 py-4'>1N</td>
                    <td className='px-6 py-4'>Kandy</td>
                    <td className='px-6 py-4'>Rivendell</td>
                    <td className='px-6 py-4'>Topaz</td>
                    <td className='px-6 py-4'>Mahaweli Reach </td>
                  </tr>
                  <tr className='border-b bg-white'>
                    <th
                      scope='row'
                      className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'
                    >
                      Day 2
                    </th>
                    <td className='px-6 py-4'>1N</td>
                    <td className='px-6 py-4'>Nuwara Eliya</td>
                    <td className='px-6 py-4'>Hill Pride</td>
                    <td className='px-6 py-4'>Mirage Kings Cottage</td>
                    <td className='px-6 py-4'>Araliya Green City</td>
                  </tr>
                  <tr className='border-b bg-white'>
                    <th
                      scope='row'
                      className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'
                    >
                      Day 3
                    </th>
                    <td className='px-6 py-4'>1N</td>
                    <td className='px-6 py-4'>Bentota</td>
                    <td className='px-6 py-4'>Rockside Beach</td>
                    <td className='px-6 py-4'>The Palms</td>
                    <td className='px-6 py-4'>Citrus Waskaduwa</td>
                  </tr>
                  <tr className='border-b bg-white'>
                    <th
                      scope='row'
                      className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'
                    >
                      Day 4
                    </th>
                    <td className='px-6 py-4'>1N</td>
                    <td className='px-6 py-4'>Colombo </td>
                    <td className='px-6 py-4'>Best Western</td>
                    <td className='px-6 py-4'>Fairway</td>
                    <td className='px-6 py-4'>Movenpick</td>
                  </tr>
                  <tr className='border-b bg-white'>
                    <th
                      scope='row'
                      className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'
                    >
                      Day 5
                    </th>
                    <td className='px-6 py-4'></td>
                    <td className='px-6 py-4'>Departure </td>
                    <td className='px-6 py-4'></td>
                    <td className='px-6 py-4'></td>
                    <td className='px-6 py-4'></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className='space-y-8'>
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
                      Rs. 26300/- Per person on twin / triple share
                    </td>
                    <td className='px-6 py-4'>Rs. 28500/- per person</td>
                    <td className='px-6 py-4'>Rs. 35700/- per person</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <button
            onClick={(): void => setIsModalOpen(true)}
            className='w-full rounded-md bg-cyan-600 p-3 text-white'
          >
            Book now
          </button>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        selectedPackage='Srilanka 4 nights 5 days'
      />
    </section>
  );
};

export default Page;
