import Image from 'next/image';
import { GrLocation } from 'react-icons/gr';
import { getPackage } from '@lib/functions/holidays';
import Container from '@components/layout/container';
import PackageDetails from '@components/package-details';
import BookNowButton from '@components/booknow-button';
import Whychose from '@components/whychose';

const PackagePage = async ({ params }: { params: { packageSlug: string } }) => {
  const data = await getPackage(params.packageSlug);

  return (
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
                  {data.daysNights.days} days - {data.daysNights.nights} nigths
                </p>
                <button className='h-8 rounded-bl-lg rounded-tr-lg bg-blue-500 p-2 text-sm text-white'>
                  Popular
                </button>
              </div>
            </div>
            {data.price.map((item) => (
              <div key={item.type} className='ml-6 mt-2'>
                <p>From</p>
                <div className='flex gap-x-28'>
                  <p className='mt-1 text-2xl font-bold'>₹ {item.rate}</p>
                  <p className='mt-2 font-semibold'>{item.type}</p>
                </div>
                <div>per person</div>
              </div>
            ))}
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
      <div className='mt-5'>
        <Whychose />
      </div>
    </main>
  );
};

export default PackagePage;
