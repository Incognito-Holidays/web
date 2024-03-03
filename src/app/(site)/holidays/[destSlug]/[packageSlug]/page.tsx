import { LuChevronRight } from 'react-icons/lu';
import Image from 'next/image';
import { GrLocation } from 'react-icons/gr';
import { getPackage } from '@lib/functions/holidays';
import { ogFields } from '@app/shared-metadata';
import Container from '@components/layout/container';
import PackageDetails from '@components/package-details';
import BookNowButton from '@components/booknow-button';
import NextBreadcrumb from '@components/breadcrumbs';
import type { Metadata } from 'next';

type Props = {
  params: { packageSlug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getPackage(params.packageSlug);

  return {
    title: `${data.title} Package`,
    alternates: {
      canonical: `/holidays/${data.destSlug}/${params.packageSlug}`
    },
    openGraph: {
      ...ogFields,
      title: `${data.title} Package`,
      url: `/holidays/${data.destSlug}/${params.packageSlug}`,
      images: [
        {
          url: data.gallery[0].asset.url,
          alt: data.gallery[0].alt,
          width: data.gallery[0].asset.metadata.width,
          height: data.gallery[0].asset.metadata.height,
          type: data.gallery[0].asset.metadata.type
        }
      ]
    }
  };
}

const HolidayPackagePage = async ({ params }: Props) => {
  const data = await getPackage(params.packageSlug);

  return (
    <div>
      <NextBreadcrumb
        homeElement={'Home'}
        separator={
          <span className='flex items-center'>
            <LuChevronRight />
          </span>
        }
        activeClasses='text-amber-500'
        containerClasses='flex py-1'
        listClasses='hover:underline mx-2 font-bold text-sm'
        capitalizeLinks
      />
      <main className='p-4 md:py-6'>
        <Container>
          <h1 className='text-left text-3xl font-bold text-neutral-700'>
            {data.title}
          </h1>
          <p className='mt-3 flex items-center gap-1 text-sm font-semibold lg:text-base'>
            <GrLocation />
            {data.destinationName.map((item) => (
              <span key={item}>{item},</span>
            ))}
          </p>
          <div className='grid grid-cols-1 gap-x-6 md:grid-cols-3'>
            <div className='relative mt-6 max-w-sm rounded-lg border border-gray-200 bg-white shadow'>
              <Image
                src={data.gallery[0].asset.url}
                alt={data.gallery[0].alt}
                fill
                placeholder='blur'
                blurDataURL={data.gallery[0].asset.lqip}
                className='rounded-lg object-cover'
              />
            </div>
            <div className='mt-6 max-w-sm'>
              <div className='grid grid-cols-2 grid-rows-2 gap-4'>
                {data.gallery.slice(1).map((item) => (
                  <div key={item.asset.url} className='relative h-52'>
                    <Image
                      src={item.asset.url}
                      alt={item.alt}
                      fill
                      placeholder='blur'
                      blurDataURL={item.asset.lqip}
                      className='rounded-lg object-cover'
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className='mt-6 max-w-sm rounded-lg border border-gray-200 bg-white shadow'>
              <div className='ml-6'>
                <div className='flex justify-between'>
                  <p className='mt-4 text-2xl font-semibold'>
                    {data.daysNights.nights} Nights {data.daysNights.days} Days
                  </p>
                  <button className='h-8 rounded-bl-lg rounded-tr-lg bg-blue-500 p-2 text-sm text-white'>
                    Popular
                  </button>
                </div>
              </div>
              {/* {data.price.map((item) => (
                <div key={item.type} className='ml-6 mt-2'>
                  <p>From</p>
                  <div className='flex gap-x-28'>
                    <p className='mt-1 text-2xl font-bold'>₹ {item.rate}</p>
                    <p className='mt-2 font-semibold'>{item.type}</p>
                  </div>
                  <div>per person</div>
                </div>
              ))} */}
              <div>
                <div className='m-6'>
                  <BookNowButton title={data.title} />
                </div>
              </div>
            </div>
          </div>
          <div className='mt-12 md:pr-96'>
            <div className='space-y-8'>
              <h2 className='text-2xl font-bold'>Tour Overview</h2>
              <p className='text-justify'>{data.description}</p>
              <PackageDetails
                itinerary={data.itinerary}
                inclusionExclusion={data.inclusionExclusion}
                termsConditions={data.termsConditions}
                hotel={data.hotel}
              />
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default HolidayPackagePage;
