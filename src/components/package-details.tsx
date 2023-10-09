'use client';

import { Tab } from '@headlessui/react';
import { PortableText } from '@portabletext/react';
import { FaStar } from 'react-icons/fa';
import type { PortableTextBlock } from 'sanity';

type Props = {
  itinerary: PortableTextBlock[];
  inclusionExclusion: PortableTextBlock[];
  termsConditions: PortableTextBlock[];
  hotel: {
    hotelName: string;
    rating: number;
  }[];
};

const PackageDetails = ({
  itinerary,
  inclusionExclusion,
  termsConditions,
  hotel
}: Props) => {
  function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ');
  }
  return (
    <div>
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
              'prose space-y-4 rounded-xl bg-white p-3',
              'focus:outline-none'
            )}
          >
            <PortableText value={itinerary} />
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              ' prose space-y-4 rounded-xl bg-white p-3',
              'focus:outline-none'
            )}
          >
            <PortableText value={inclusionExclusion} />
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              'prose space-y-4 rounded-xl bg-white p-3',
              'focus:outline-none'
            )}
          >
            <PortableText value={termsConditions} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

      {hotel && (
        <div className='mt-4'>
          <h1 className='text-lg font-semibold'>Hotel Details:</h1>
          <div className='relative mt-4 overflow-x-auto rounded-xl'>
            <table className='w-full border-2 border-gray-300 text-left text-sm text-gray-800'>
              <thead className='bg-gray-50 text-xs uppercase text-gray-800'>
                <tr>
                  <th scope='col' className='px-6 py-3'>
                    Hotel Name
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Rating
                  </th>
                </tr>
              </thead>
              <tbody>
                {hotel.map((item) => (
                  <tr key={item.hotelName} className='border-b bg-white'>
                    <td className='px-6 py-4'>{item.hotelName}</td>
                    <td className='flex items-center gap-1 px-6 py-4'>
                      {item.rating}
                      <FaStar className='text-yellow-500' />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default PackageDetails;
