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
      <h1 className='text-center text-3xl font-bold text-cyan-600'>
        BEST OF SRI LANKA AND MALDIVES (9 DAYS)
      </h1>
      <Image
        src={bali1}
        alt='bali1'
        quality={95}
        className='mt-6 h-96 w-full rounded-lg object-cover object-bottom'
      />
      <div className='mt-12 flex flex-col gap-x-10 md:flex-row'>
        <div className='space-y-8'>
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
                    Day 1: Male
                  </h1>
                  <h2 className='text-gray-800'>
                    <p>
                      Today reach at Male airport via Colombo Stay at Male.
                      Enjoy the beautiful Island. (Dinner).
                    </p>
                  </h2>
                </div>
                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Day 2: Male
                  </h1>
                  <h2 className='text-gray-800'>
                    <p className='text-justify'>
                      After Breakfast in the hotel visit to Island trip
                      Himafushi and Hurah by Traditional speed boat Dhoni. In
                      the Evening go to male city trip by Walk. (Breakfast,
                      Dinner)
                    </p>
                  </h2>
                </div>
                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Day 3: Male: Airport – Negombo
                  </h1>
                  <h2 className='text-gray-800'>
                    <p className='text-justify'>
                      After Breakfast transfer to Male Airport for flight to
                      Colombo. Arrive at Colombo Bandaranaike International
                      Airport and transfer to hotel at Negombo, check in to the
                      hotel and Leisure at the hotel. Overnight stay at Negombo.
                      (Breakfast, Dinner)
                    </p>
                  </h2>
                </div>
                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Day 4: Negombo - Anuradhapura
                  </h1>
                  <h2 className='text-gray-800'>
                    <p className='text-justify'>
                      Enjoy a delicious breakfast at hotel.Proceed to
                      Anuradhapura. Anuradhapura is one of the ancient capitals
                      of Sri Lanka, famous for its well-preserved ruins of
                      ancient Lankan civilization. The city, now a UNESCO World
                      Heritage Site, lies on the banks of the historic Malvathu
                      River. From the 4th century BC, it was the capital of Sri
                      Lanka until the beginning of the 11th century AD. During
                      this period it remained one of the most stable and durable
                      centers of political power and urban life in South Asia.
                      The ancient city, considered sacred to the Buddhist world,
                      is today surrounded by monasteries covering an area of
                      over sixteen square miles (40 km²). Anuradhapura is also
                      significant in Hindu legend as the fabled capital of the
                      Asura King Ravana in the Ramayana. Sri Mahabodhi the
                      sacred tree shrine of the Mahaviharaya, planted in the 3rd
                      Century BC still remains its vitality and receives
                      veneration of the Buddhist world all year around.
                      Overnight stay at Anuradhapura. (Breakfast, Dinner)
                    </p>
                  </h2>
                </div>
                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Day 5: Anuradhapura - Dambulla - Sigiria
                  </h1>
                  <h2 className='text-gray-800'>
                    <p className='text-justify'>
                      After breakfast After breakfast travel to Dambulla.
                      Dambulla is one of the ancient cities of Sri Lanka. The
                      city also boasts to have the largest rose quartz mountain
                      range in South Asia, and the Iron wood forest. Ibbankatuwa
                      prehistoric burial site near Dambulla cave temple
                      complexes is the latest archaeological site found in
                      Dambulla. Dambulla along with nearby Sigiriya. Overnight
                      stay at Sigiria. (Breakfast,Dinner)
                    </p>
                  </h2>
                </div>
                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Day 6: Sigiria - Nuwara Eliya
                  </h1>
                  <h2 className='text-gray-800'>
                    <p className='text-justify'>
                      Enjoy a delicious breakfast at hotel. Today you proceed to
                      Nuwara Eliya.Nuwara Eliya (City of Lights), blessed with
                      salubrious climate, breathtaking views of valleys,
                      meadows, mountains and greenery; Surrounded by hills and
                      tea plantations, the town of Nuwara Eliya enjoys
                      spring-like weather throughout the year. It is also known
                      as “Little England”, which was the favorite hill station
                      of the British who tried to create Nuwara Eliya into a
                      typical English Village. The old brick Post office,
                      country house like hill club with its hunting pictures,
                      trophies and the 18 whole golf courses, horse race course,
                      etc., all remind you of “England”. And see the Sitha Eliya
                      Temple. Overnight stay at Nuwara Eliya. (Breakfast,
                      Dinner)
                    </p>
                  </h2>
                </div>
                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Day 7: Nuwara Eliya – Kandy
                  </h1>
                  <h2 className='text-gray-800'>
                    <p className='text-justify'>
                      Enjoy a delicious breakfast at hotel Then proceed to
                      Kandy.Lying amidst the hills, Kandy is the last capital of
                      the ancient kings of Sri Lanka. While being the second
                      largest city in Sri Lanka it is also famous for its
                      immense beauty and is named as one of the seven UNESCO
                      declared World Heritage sites in the country. With its
                      luxuriant prairie, picturesque lake, longest river of the
                      country and misty mountains, Kandy successfully mesmerizes
                      every visitor unsurprisingly. While on your city tour you
                      will visit one of the world heritages as well as a sacred
                      place for the Buddhists all over the world; namely the
                      Temple of tooth Relic known to the Sri Lankans as Dalada
                      Maligawa. In the evening you will witness a traditional
                      cultural dance show. Overnight stay at Kandy. (Breakfast,
                      Dinner).
                    </p>
                  </h2>
                </div>
                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Day 8: Kandy - Pinnawala – Bentota - Galle
                  </h1>
                  <h2 className='text-gray-800'>
                    <p className='text-justify'>
                      Enjoy a delicious breakfast at your hotel. Pinnawala
                      Elephant Orphanage: Enroute to your destination, you can
                      visit one of the most important tourist attraction in Sri
                      Lanka, the Pinnawala Elephant Orphanage. Volunteers and
                      caretakers provide shelter and take care of orphaned,
                      abandoned and injured elephants within the park. You can
                      watch caretakers feed, bathe and help these gentle giants.
                      You want walk with the herd to the nearby river to watch
                      the elephants bathe and play around in water. Proceed to
                      Galle via Bentota. Overnight stay at Galle. (Breakfast,
                      Dinner).
                    </p>
                  </h2>
                </div>
                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Day 9: Galle – Colombo
                  </h1>
                  <h2 className='text-gray-800'>
                    <p className='text-justify'>
                      Enjoy a delicious breakfast at hotel. Galle is a beautiful
                      city to witness the sun and sand. Galle Harbor was
                      frequented by Chinese and Arabians sailors before the
                      Portuguese occupied Galle in the 16th century. The Dutch
                      captured Galle in 1640 and handed it over to the British
                      in 1796. History reveals that the Chinese Admiral Zheng
                      He, who commanded seven great voyages through the South
                      China Seas and the Indian Ocean between 1405 and 1433,
                      erected a tablet in 1409 in Galle in commemoration of his
                      second visit to Sri Lanka. The trilingual tablet
                      discovered in 1911 has inscriptions in Chinese, Tamil and
                      Arabic languages, suggesting that the Chinese were dealing
                      with a cosmopolitan trading community at that time. Then
                      proceed to Colombo.
                      <br />
                      Colombo is the largest city and commercial capital of Sri
                      Lanka. Located on the west coast, it is a busy and vibrant
                      city with a mixture of modern and colonial impressions.
                      Colombo has wildly varying architecture that span
                      centuries and depict various styles. Many colonial
                      buildings influenced by the Portuguese, Dutch and British
                      exist alongside structures built in Buddhist, Hindu,
                      Islamic, Indian and Contemporary architectural styles. No
                      other place is this more evident in the heart of the city
                      the Fort area. Colombo also boasts many shopping malls and
                      department stores that offer brand name clothing at highly
                      discounted prices. Therefore, it has become an important
                      shopping destination among tourists. City Tour: While on
                      your city tour in Colombo you may visit famous places
                      including Galle Face Green, the Viharamahadevi Park, Twin
                      World Trade Center towers, Old Parliament Building, Fort
                      district, Independence Hall at Independence Square, Hindu,
                      Islam and Christian places of worship. For shopping, you
                      may visit Odel, etc.Overnight stay at your hotel in
                      Colombo. (Breakfast, Dinner).
                    </p>
                  </h2>
                </div>
                <div className='space-y-2'>
                  <h1 className='text-lg font-semibold text-gray-900'>
                    Day 9: Airport Colombo to Kolkata
                  </h1>
                  <h2 className='text-gray-800'>
                    <p>
                      Early morning travel to Airport for departure flight to
                      India.
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
                      Accommodation Double/Tripple Bed room with (Breakfast &
                      Dinner){' '}
                    </li>
                    <li>
                      Transportation (whole tour) by a fully air-conditioned
                      private tourist Vehicle
                    </li>
                    <li>Service of an English speaking tourist Guide</li>
                    <li>Entrance fee as per Itinerary.</li>
                  </ul>
                  <h1 className='text-lg font-semibold underline'>
                    Exclusions
                  </h1>
                  <ul className='ml-6 list-disc'>
                    <li>Return Economy Air Fair Kolkata to Kolkata</li>
                    <li>Visa charges and airport taxes</li>
                    <li>Insurance</li>
                    <li>
                      Activities Items of personal nature such as, laundry,
                      telephone calls etc
                    </li>
                    <li>Compulsory Tips</li>
                    <li>Other beverages throughout the tour</li>
                    <li>TCS + GST 5%</li>
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
                    TERMS & CONDITIONS APPLY
                  </h1>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>

          <div>
            <h1 className='text-lg font-semibold'>Hotel Details: 3 Star</h1>
            <div className='relative mt-4 overflow-x-auto'>
              <table className='w-full border-2 border-gray-300 text-left text-sm text-gray-800'>
                <thead className='bg-gray-50 text-xs uppercase text-gray-800'>
                  <tr>
                    <th scope='col' className='px-6 py-3'>
                      Hotel
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Destination
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-2 bg-white'>
                    <th
                      scope='row'
                      className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'
                    >
                      Hotel Maldivian/Similar
                    </th>
                    <td className='px-6 py-4'>Maldives (2n)</td>
                  </tr>
                  <tr className='border-2 bg-white'>
                    <th
                      scope='row'
                      className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'
                    >
                      Hotel Tamarind Tree/Similar
                    </th>
                    <td className='px-6 py-4'>Negombo (1n)</td>
                  </tr>
                  <tr className='border-2 bg-white'>
                    <th
                      scope='row'
                      className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'
                    >
                      Hotel Alakamanda/Similar
                    </th>
                    <td className='px-6 py-4'>Anuradhapura (1n)</td>
                  </tr>
                  <tr className='border-2 bg-white'>
                    <th
                      scope='row'
                      className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'
                    >
                      Hotel Pelvehera/Similar
                    </th>
                    <td className='px-6 py-4'>Sigiriya (1n)</td>
                  </tr>
                  <tr className='border-2 bg-white'>
                    <th
                      scope='row'
                      className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'
                    >
                      Hotel Stamford Star/Similar
                    </th>
                    <td className='px-6 py-4'>Nuwara Eliya (1n)</td>
                  </tr>
                  <tr className='border-2 bg-white'>
                    <th
                      scope='row'
                      className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'
                    >
                      Hotel Devon/Similar
                    </th>
                    <td className='px-6 py-4'>Kandy (1n)</td>
                  </tr>
                  <tr className='border-2 bg-white'>
                    <th
                      scope='row'
                      className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'
                    >
                      Hotel Coco Royal Beach/Similar
                    </th>
                    <td className='px-6 py-4'>Bentota (1n)</td>
                  </tr>
                  <tr className='border-2 bg-white'>
                    <th
                      scope='row'
                      className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'
                    >
                      Hotel Berjaya/Similar
                    </th>
                    <td className='px-6 py-4'>Colombo (1n)</td>
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
                      Standard
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
                    <td className='px-6 py-4'>Rs. 89999/- per person</td>
                    <td className='px-6 py-4'>-</td>
                    <td className='px-6 py-4'>-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <button className='w-full rounded-md bg-cyan-600 p-3 text-white'>
            Book now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Page;
