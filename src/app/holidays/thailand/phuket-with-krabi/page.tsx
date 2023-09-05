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
        PHUKET WITH KRABI
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
          <p className='text-justify'>
            Thailand officially the Kingdom of Thailand and historically known
            as Siam is a country in Southeast Asia on the Indochinese Peninsula.
            With a population of almost 70 million, it spans 513,120 square
            kilometres (198,120 sq mi). Thailand is bordered to the north by
            Myanmar and Laos, to the east by Laos and Cambodia, to the south by
            the Gulf of Thailand and Malaysia, and to the west by the Andaman
            Sea; it also shares maritime borders with Vietnam to the southeast,
            and Indonesia and India to the southwest. Bangkok is the nation's
            capital and largest city. Thailand is a middle power in global
            affairs and a founding member of Asian, and ranks very high in the
            Human Development Index. It has the second-largest economy in
            Southeast Asia and the 24th-largest in the world by PPP and ranks
            85th by nominal GDP per capital. Thailand is classified as a newly
            industrialised economy, with manufacturing, agriculture, and tourism
            as leading sectors.
          </p>

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
                    Day 1: Arrival Phuket Airport-Phuket Hotel
                  </h1>
                  <h2 className='text-gray-800'>
                    <p className='text-justify'>
                      Upon arrival in Phuket airport, you will be transferred to
                      the hotel. Check-in at the hotel and get refreshed. This
                      day is free at leisure. You can go for Phuket Fantasea
                      show (own choice own cost) this evening which is inspired
                      by Thailand's exotic heritage. The show has a carnival
                      village with handcrafts, games and shopping with much
                      more! After that came back to hotel & Overnight stay in
                      the hotel.(Breakfast)
                    </p>
                  </h2>
                </div>
                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Day 2: Phi Phi Island Trip with Lunch
                  </h1>
                  <h2 className='text-gray-800'>
                    <p className='text-justify'>
                      Today after breakfast pick-up from your hotel and
                      transportation to the pier in Phang Nga province. VisitPhi
                      Phi Island has pristine beaches, stunning rock formations,
                      and vivid turquoise waters teeming with colourful marine
                      life. The larger and inhabited Phi Phi Don attracts
                      hundreds of travellers to its lovely shores, while the
                      smaller uninhabited Phi Phi Leh has beautiful bays and
                      beaches, including the iconic Maya Bay. (Breakfast, Lunch)
                    </p>
                  </h2>
                </div>
                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Day 3: Phuket - Krabi
                  </h1>
                  <h2 className='text-gray-800'>
                    <p>
                      Today after early breakfast check out from Phuket hotel
                      &transfer to Krabi hotel. (Breakfast)
                    </p>
                  </h2>
                </div>
                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Day 4: Krabi 4 Island Tour
                  </h1>
                  <h2 className='text-gray-800'>
                    <p>
                      After breakfast visit to full day Krabi 4 Island tour by
                      long tail boat & afternoon enjoy a delicious Indian lunch
                      served at the Krabi island. Evening came back to hotel
                      then evening relax. overnight stay at hotel in Krabi.
                      (Breakfast, Lunch)
                    </p>
                  </h2>
                </div>
                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Day 5: Krabi Departure
                  </h1>
                  <h2 className='text-gray-800'>
                    <p>
                      This day after breakfast check-out hotel &dropped to the
                      airport for fly back (Breakfast)
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
                  <h1 className='text-lg font-semibold underline'>
                    Inclusions
                  </h1>
                  <ul className='ml-6 list-disc'>
                    <li>
                      Accommodation in 3* /4* / 5*category hotel (As per choice)
                    </li>
                    <li>2N stay in Phuket</li>
                    <li>2N stay in Krabi</li>
                    <li>
                      Daily breakfast 02 lunch (except on arrival day breakfast)
                    </li>
                    <li>
                      All tours and sightseeing are on SIC (seat in a coach)
                      basis
                    </li>
                    <li>Private airport transfer</li>
                    <li>Phi Phi island trip Phuket</li>
                    <li>Krabi 4 Island Tour</li>
                  </ul>
                  <h1 className='text-lg font-semibold underline'>
                    Exclusions
                  </h1>
                  <ul className='ml-6 list-disc'>
                    <li>Which is not mentioned in above inclusions</li>
                    <li>Phi Phi island national park fees</li>
                    <li>Krabi 4 Island national park fees</li>
                    <li>Any International or domestic air fare </li>
                    <li>
                      Any hotel fees if applicable need to be paid on actual by
                      guest
                    </li>
                    <li>
                      Hotels may take refundable security deposit upon check-in
                    </li>
                    <li>Any visa </li>
                    <li>Any tips</li>
                    <li>COVID 19 insurance as required</li>
                    <li>Any additional usage of vehicle other than included</li>
                    <li>Any meal not specified in inclusions</li>
                    <li>
                      Any expenses of personal nature such as porterage, laundry
                      expenses, mini-bar, mineral water, telephone charges, food
                      & drink that are not a part of the package
                    </li>
                    <li>
                      Any Increase in the fuel surcharge or any kind of taxes
                      levied by the respective government or statutory bodies
                    </li>
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
                  <h1 className='text-lg font-semibold underline'>
                    PAYMENT POLICY:
                  </h1>
                  <ul className='ml-6 list-disc'>
                    <li>40% Advance payment along with the confirmation</li>
                    <li>40% prior to 30 days before travel date</li>
                    <li>Remaining 20% payment 15 days before departure date</li>
                  </ul>
                  <h1 className='text-lg font-semibold underline'>
                    CANCELLATION POLICY:
                  </h1>
                  <ul className='ml-6 list-disc'>
                    <li>
                      20% cancellation charges if cancelled 30 days before the
                      tour.
                    </li>
                    <li>
                      40% cancellation charges if cancelled between 20 – 30 Days
                      before the tour.
                    </li>
                    <li>
                      60% cancellation charges if cancelled between 10 – 15 Days
                      before the tour.
                    </li>
                    <li>
                      No refund if cancelled before 10 days of trip start.
                    </li>
                    <li>
                      No Refund or Compensation on any changes on an ongoing
                      trip.
                    </li>
                    <li>
                      Any changes done on the trip; applicable charges will be
                      charged.
                    </li>
                    <li>No refund on unutilized services.</li>
                  </ul>
                  <h1 className='text-lg font-semibold underline'>
                    ADDITIONAL INFORMATION:
                  </h1>
                  <ul className='ml-6 list-disc'>
                    <li>
                      ROE will be calculated at the rate prevailing on the date
                      of final payment.
                    </li>
                    <li>
                      GST & TCS will be charged @5% on overseas tour packages.
                    </li>
                  </ul>
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
                      Destination
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Hotel Name 3 star
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Hotel name 4 star
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Hotel name 5 star
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b bg-white'>
                    <th
                      scope='row'
                      className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'
                    >
                      Phuket
                    </th>
                    <td className='px-6 py-4'>Patong Palace Hotel / Similar</td>
                    <td className='px-6 py-4'>
                      Deevana Patong Resort / Similar
                    </td>
                    <td className='px-6 py-4'>Holiday Inn / similar</td>
                  </tr>
                  <tr className='border-b bg-white'>
                    <th
                      scope='row'
                      className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'
                    >
                      Krabi
                    </th>
                    <td className='px-6 py-4'>Aonang cozy place/ Similar</td>
                    <td className='px-6 py-4'>
                      Aonang Cliff Beach Resort/ Similar
                    </td>
                    <td className='px-6 py-4'>Amari Vogue Krabi / Similar</td>
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
                      Deluxe
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Luxury
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Premium
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b bg-white'>
                    <td className='px-6 py-4'>Rs. 25100/- per person</td>
                    <td className='px-6 py-4'>Rs. 35790/- per person</td>
                    <td className='px-6 py-4'>Rs. 47338/- per person</td>
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
        selectedPackage='Phuket with Krabi'
      />
    </section>
  );
};

export default Page;
