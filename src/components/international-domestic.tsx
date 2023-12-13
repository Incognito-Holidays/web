'use client';
import { Tab } from '@headlessui/react';
import { cn } from '@lib/utils';
import PackagesCard from './packages-card';
import type { Destinations } from '@lib/types';

type Props = {
  data: Destinations[];
};
const InternationalDomestic = ({ data }: Props) => {
  return (
    <div>
      <Tab.Group>
        <Tab.List className='flex space-x-1 rounded-xl bg-blue-950 p-1'>
          <Tab
            className={({ selected }): string =>
              cn(
                'w-full rounded-lg py-1 text-sm font-medium leading-5 sm:py-2.5',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white text-blue-900 shadow'
                  : 'text-white hover:bg-white/[0.12]'
              )
            }
          >
            All Packages
          </Tab>
          <Tab
            className={({ selected }): string =>
              cn(
                'w-full rounded-lg py-1 text-sm font-medium leading-5 sm:py-2.5',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white text-blue-900 shadow'
                  : 'text-white hover:bg-white/[0.12]'
              )
            }
          >
            India & Around
          </Tab>
          <Tab
            className={({ selected }): string =>
              cn(
                'w-full rounded-lg py-1 text-sm font-medium leading-5 sm:py-2.5',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white text-blue-900 shadow'
                  : 'text-white hover:bg-white/[0.12]'
              )
            }
          >
            International Packages
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <div className='mt-8 grid place-items-center gap-4 gap-y-7 md:grid-cols-3 md:gap-y-10'>
              {data.map((item) => (
                <PackagesCard
                  key={item._id}
                  name={item.name}
                  slug={item.slug}
                  type={item.type}
                  image={item.image}
                />
              ))}
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className='mt-8 grid place-items-center gap-4 gap-y-7 md:grid-cols-3 md:gap-y-10'>
              {data
                .filter((item) => item.type === 'domestic')
                .map((item) => (
                  <PackagesCard
                    key={item._id}
                    name={item.name}
                    slug={item.slug}
                    type={item.type}
                    image={item.image}
                  />
                ))}
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className='mt-8 grid place-items-center gap-4 gap-y-7 md:grid-cols-3 md:gap-y-10'>
              {data
                .filter((item) => item.type === 'international')
                .map((item) => (
                  <PackagesCard
                    key={item._id}
                    name={item.name}
                    slug={item.slug}
                    type={item.type}
                    image={item.image}
                  />
                ))}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default InternationalDomestic;
