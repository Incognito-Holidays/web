/* eslint-disable react/no-unescaped-entities */

'use client';

import { useState } from 'react';
// import Image from 'next/image';
import { Tab } from '@headlessui/react';
import Modal from '@components/modal';
// import bali1 from '@public/assets/package.jpeg';

const Page: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <section className='max-w-6xl'>
      {/* <h1 className='text-center text-3xl font-bold text-cyan-600'>
        BEST OF VIETNAM WITH CAMBODIA 4N/5D
      </h1>
      <Image
        src={bali1}
        alt='bali1'
        quality={95}
        className='mt-6 h-96 w-full rounded-lg object-cover object-bottom'
      /> */}
      <div className="flex h-96 items-end rounded-xl bg-[url('/assets/p2.png')]  bg-cover">
        <h1 className='text-bold w-full rounded-xl bg-neutral-800 bg-opacity-70 p-8 text-center text-5xl text-white'>
          BEST OF VIETNAM WITH CAMBODIA 4N/5D
        </h1>
      </div>
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
                    Day 1: Arrival to Ho Chi Minh city – Half day city tour (B)
                  </h1>
                  <h2 className='text-gray-800'>
                    <p>
                      Arrive in Ho Chi Minh city (Saigon), pickup and transfer
                      to the city center & check in hotel with breakfast, relax
                      and refresh after flight. Today you will visit half day
                      Saigon city tour, the first place is The Independence
                      Palace symbolizes Vietnam's victory, peace, and
                      territorial integrity. This place has a glamorous design,
                      hundreds of rooms equipped with luxurious furnishings and
                      decorations, and an enormous and gorgeous exterior space;
                      next is War Remnants Museum: Formerly known as the Museum
                      of American War Crimes, this is a poignant display of the
                      futility of war, the museum is a call for peace and hopes
                      that history does not repeat itself; continue to Notre
                      Dame Cathedral and Old Post Office: Built between 1877 and
                      1883 this is one of the best examples of classical French
                      colonial architecture. End of the tour is Ben Thanh
                      Market: This bustling market is very popular with
                      tourists, primarily due to its central location. It has a
                      wide selection of goods ranging from fake Nike shoes to
                      beautiful silk Ao Dais. Overnight in Ho Chi Minh city.
                    </p>
                  </h2>
                </div>
                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Day 2: Ho Chi Minh city – Cu Chi Tunnel & Mekong Delta – Ho
                    Chi Minh city (B) - SIC
                  </h1>
                  <h2 className='text-gray-800'>
                    <p className='text-justify'>
                      Morning, we will drive overland to Cu Chi Tunnels, an
                      incredible underground network constructed by Vietnamese
                      guerrillas to protect the region against the American
                      attacks during the Vietnam War. The tunnels were used by
                      Viet Cong soldiers as hiding spots during combat, as well
                      as serving as communication and supply routes, hospitals,
                      food and weapon caches and living quarters for numerous
                      North Vietnamese fighters. The tunnel systems were of
                      great importance to the Viet Cong in their resistance to
                      American forces, and helped to counter the growing
                      American military effort. We can even crawl a part inside
                      the tunnel, visit their infirmary, kitchen to discover how
                      people had survived hereby. Then, we will visit to Mekong
                      Delta. Mekong delta is known as The Nine Dragon River
                      delta since it is formed by nine rivers. The background of
                      this area is the largest site of endless paddy fields,
                      coconut farms, tropical gardens. Morning, drive to My Tho,
                      known as the "rice basket" in Vietnam. Upon arrival
                      cruising through Mekong River, passing a fishing village.
                      Visiting some small islets such as Turtle, Dragon, Phoenix
                      Island, under a green canopy of water coconut
                      trees.Walking through some villages to a fruit garden.
                      Taste tropical fruits, while having live traditional
                      music. Have honey tea. Short rowing boat ride, enjoy the
                      nice boat ride through natural island and canals in BenTre
                      under the shadow of the water coconut trees Return and
                      Over night in Ho Chi Minh city.
                    </p>
                  </h2>
                </div>
                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Day 3: Ho Chi Minh city - Departure & Arrival Phnom Penh
                    Cambodia
                  </h1>
                  <h2 className='text-gray-800'>
                    <p>
                      Free at leisure on beach till transfer to airport for
                      flight to your next destination. Fly into Phnom Penh, our
                      driver picks you up and transfer to hotel (check in time:
                      2pm). Then, relax and free by your own way. Phnom Penh is
                      a city that retains its traditional Khmer andcolonial
                      charm. French villas along tree-lined boulevards remind
                      the visitor that the city was onceconsidered the ‘pearl’
                      of Southeast Asia. Recent political changes have triggered
                      an economic boom, with new hotels, restaurants, bars and
                      night clubs springing up across the city.
                    </p>
                  </h2>
                </div>
                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Day 4: Phnom Penhpast's & presents (B)
                  </h1>
                  <h2 className='text-gray-800'>
                    <p>
                      Visit the Royal Palace compound build in 1866 by the
                      predecessors of King Norodom, it is themost conspicuous
                      feature and also one of the impressive colorful
                      Khmer-style Palaces. Near side the Royal Palace Silver
                      Pagoda (The Emerald Buddha temple), displays plenty of
                      Buddha statues that are decorated and made by diamond,
                      emerald, gold and silver. Travelers will proceedto visit
                      Independence Monument which was constructed in 1954 after
                      Cambodian took their country back from French colony,
                      continuing to National Museum, the distinctive red
                      building with a beautiful Khmer architecture was built in
                      1917 and contains more than 5000 art objects made of
                      sandstone, bronze, silver, copper, wood and others. This
                      afternoon we will learn about the dark side of Cambodia –
                      Its more recent turbulent and harrowing history. Initially
                      you visit the Toul Sleng Genocide Museum (also known as
                      S21), ironically a former school, located in a quiet Phnom
                      Penh suburb, this was the infamous KhmerRouge prison /
                      torture center. Once you have gained an initial insight of
                      the brutality of the Khmer Rouge regime you will be driven
                      15 km from Phnom Penh to visit the ‘Killing Fields’. This
                      is where Toul Sleng prisoners were forcibly marched and
                      then executed; it is now a memorial site located in a
                      beautiful tranquil setting. Visit the Wat Phnom “hill of
                      Pagoda”, central market and walking a long bank of Mekong
                      riverside connecting with Tonle sap lake during sunset
                      tour in front of the Royal Palace. Then, back to hotel and
                      overnight stay.
                    </p>
                  </h2>
                </div>
                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Day 5: PhnomPenh – Departure (B)
                  </h1>
                  <h2 className='text-gray-800'>
                    <p>
                      Breakfast at hotel. Transfer to Phnom Penh airport for
                      departure to next destination. It’s time to say goodbye,
                      we thank you for traveling with us and warmly welcome you
                      to come again.
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
                      All road transportation in Air - conditional vehicle
                    </li>
                    <li>
                      Airport transfer in every city by private vehicle
                      (noguide)
                    </li>
                    <li>
                      4 nights hotel accommodation on Twin/double sharing with
                      daily breakfast.
                    </li>
                    <li>Boat trip in Mekong Delta</li>
                    <li>Entrance fees as per above program</li>
                    <li>English speaking guide during sight seeing</li>
                    <li>
                      2 drinking water bottle of 500ml during the
                      tour/person/day
                    </li>
                  </ul>
                  <h1 className='text-lg font-semibold underline'>
                    Exclusions
                  </h1>
                  <ul className='ml-6 list-disc'>
                    <li>All flights / airport tax.</li>
                    <li>Vietnam tourist visa</li>
                    <li>Cambodia tourist visa</li>
                    <li>Other meals & beverages not mentioned above.</li>
                    <li>Earlycheck-in / Latecheck-out</li>
                    <li>
                      Personal expense such as laundry, meals or drinks during,
                      etc.
                    </li>
                    <li>
                      All meals are mentioned in the program (Lunch, Dinner)
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
                    Payment Policy
                  </h1>
                  <ul className='ml-6 list-disc'>
                    <li>20% Advance payment along with the confirmation.</li>
                    <li>40% prior to 30days before travel date.</li>
                    <li>
                      Remaining 40% payment 15 days before departure date.
                    </li>
                  </ul>
                  <h1 className='text-lg font-semibold underline'>
                    Cancellation Policy
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
                    Additional Information
                  </h1>
                  <ul className='ml-6 list-disc'>
                    <li>
                      ROE will be calculated at the rate prevailing on the date
                      of final payment
                    </li>
                    <li>
                      GST & TCS will be charged @5% on overseas tour packages.
                    </li>
                    <li> * Terms & Conditions apply </li>
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
                      Location
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Hotel 3 *
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b bg-white'>
                    <td className='px-6 py-4'>Ho Chi Minh City</td>
                    <td className='px-6 py-4'>Victory Hotel</td>
                  </tr>
                  <tr className='border-b bg-white'>
                    <td className='px-6 py-4'>Phnompenh</td>
                    <td className='px-6 py-4'>Okey Boutique Hotel</td>
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
                    <td className='px-6 py-4'>-</td>
                    <td className='px-6 py-4'>Rs. 25149/- per person</td>
                    <td className='px-6 py-4'>-</td>
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
        selectedPackage='Best of Vietnam with Cambodia (4 nights 5 days)'
      />
    </section>
  );
};

export default Page;
