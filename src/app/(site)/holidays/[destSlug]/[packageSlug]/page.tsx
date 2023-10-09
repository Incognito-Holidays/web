import Image from 'next/image';
// import { Tab } from '@headlessui/react';
import { GrLocation } from 'react-icons/gr';
import { getPackage } from '@lib/functions/holidays';
import Container from '@components/layout/container';
// import Modal from '@components/modal';

const PackagePage = async ({ params }: { params: { packageSlug: string } }) => {
  const data = await getPackage(params.packageSlug);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // function classNames(...classes: string[]): string {
  //   return classes.filter(Boolean).join(' ');
  // }

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
                <button
                  // onClick={(): void => setIsModalOpen(true)}
                  className='h-10 w-full rounded-3xl bg-blue-500 text-white'
                >
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-12 md:pr-96'>
          <div className='space-y-8'>
            <h2 className='text-2xl font-bold'>Tour Overview</h2>
            <p className='text-justify'>{data.description}</p>

            {/* <Tab.Group>
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
                      Day 1: Airport – Hotel
                    </h1>
                    <h2 className='text-gray-800'>
                      <p>Hotel Stay: As Chosen Hotel</p>
                      <p>Highlight: Check In</p>
                      <p>
                        Arrive at Ngurah Rai International Airport. Pick up from
                        airport and transfer to hotel
                      </p>
                      <p>
                        Arrive at hotel and check in, after check in, free
                        program at own leisure
                      </p>
                      <p>Lunch and Dinner will be at own expenses</p>
                    </h2>
                  </div>
                  <div className='space-y-2'>
                    <h1 className='text-lg font-semibold text-gray-900'>
                      Day 2: Kintamani – Ubud (Breakfast)
                    </h1>
                    <h2 className='text-gray-800'>
                      <p>Hotel Stay: As Chosen Hotel</p>
                      <p>
                        Highlight: Tour to Kintamani and exploring Ubud center
                      </p>
                      <p>
                        Breakfast at hotel. After breakfast, pick up from hotel
                        and transfer to visit:
                      </p>
                      <p>1) Tirta Empul – Holy Spring Temple.</p>
                      <p>
                        2) Kintamani – The beautiful of Mount Batur Volcano and
                        Batur Lake view.
                      </p>
                      <p>3) Tegalalang – Rice field view.</p>
                      <p>
                        4) Coffee Farm Plantation – You can find the Local
                        Coffee Maker.
                      </p>
                      <p>5) Ubud Market and Ubud Palace.</p>
                      <p>Drop back to hotel and free program.</p>
                      <p>Lunch and Dinner will be at own expenses.</p>
                    </h2>
                  </div>
                  <div className='space-y-2'>
                    <h1 className='text-lg font-semibold text-gray-900'>
                      Day 3: Half Day Tanah Lot (Breakfast)
                    </h1>
                    <h2 className='text-gray-800'>
                      <p>Hotel Stay: As Chosen Hotel</p>
                      <p>Highlight: Visiting to Tanah Lot</p>
                      <p>Breakfast at hotel.</p>
                      <p>
                        After Breakfast, pick up from hotel and transfer to
                        visit:
                      </p>
                      <p>1) Taman Ayun – The old temple in Mengwi Village.</p>
                      <p>
                        2) Tanah Lot – The unique temple that standing on the
                        rock in the middle of the ocean.
                      </p>
                      <p>Drop back to hotel and free program.</p>
                      <p>Lunch and Dinner will be at own expenses.</p>
                    </h2>
                  </div>
                  <div className='space-y-2'>
                    <h1 className='text-lg font-semibold text-gray-900'>
                      Day 4: Tanjung Benoa (Breakfast)
                    </h1>
                    <h2 className='text-gray-800'>
                      <p>Hotel Stay: As Chosen Hotel</p>
                      <p>Highlight: Watersport at Tanjung Benoa</p>
                      <p>Breakfast at hotel.</p>
                      <p>
                        After Breakfast, pick up from hotel and transfer to
                        visit:
                      </p>
                      <ol>
                        <li>
                          1) Tanjung Benoa – Watersport activities such as:
                        </li>
                        <ul className='ml-8 list-disc'>
                          <li>Banana Boat - (Duration : 15 Minutes).</li>
                          <li>Flying Fish - (Duration : 2 x Fly)</li>
                          <li>Jet Ski - (Duration : 15 Minutes)</li>
                        </ul>
                      </ol>
                      <p>Drop back to hotel and free program.</p>
                      <p>Lunch and Dinner will be at own expenses</p>
                    </h2>
                  </div>
                  <div className='space-y-2'>
                    <h1 className='text-lg font-semibold text-gray-900'>
                      Day 5: Hotel – Airport (Breakfast)
                    </h1>
                    <h2 className='text-gray-800'>
                      <p>Hotel Stay: As Chosen Hotel</p>
                      <p>Highlight: Checkout</p>
                      <p>Breakfast at hotel.</p>
                      <p>After breakfast, free program at own leisure.</p>
                      <p>Checkout from hotel and transfer to airport.</p>
                      <p>Arrive at airport and check in.</p>
                      <p>Depart back to Own Country.</p>
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
                        04 Nights’ accommodation with breakfast in choice of
                        selected hotel category
                      </li>
                      <li>
                        Return Airport Transfers from Bali Airport to Bali Hotel
                        on Private Basis
                      </li>
                      <li>Full Day Ubud & Kintamani Tour on Private Basis</li>
                      <li>Daily Buffet Breakfast at Hotel</li>
                      <li>
                        All Local Taxes & Charges Package government tax and
                        service charge.
                      </li>
                      <li>
                        All Local Taxes & Charges Package government tax and
                        service charge.
                      </li>
                      <li>1 Bottle Mineral water/pax/day</li>
                      <li>English speaking tour guide cum driver.</li>
                      <li>All the entrance fee.</li>
                      <li>Petrol & Parking fees.</li>
                    </ul>
                    <h1 className='text-lg font-semibold underline'>
                      Exclusions
                    </h1>
                    <ul className='ml-6 list-disc'>
                      <li>Which is not mentioned in above inclusions</li>
                      <li>
                        Any airfare, airport taxes international/ domestic
                      </li>
                      <li>
                        Any city tax or hotel fees if applicable need to be paid
                        on actual by guest
                      </li>
                      <li>
                        Hotels may take refundable security deposit upon
                        check-in
                      </li>
                      <li>Any visa, Any tips & Photography</li>
                      <li>COVID 19 insurance as required</li>
                      <li>
                        Any additional usage of vehicle other than included
                      </li>
                      <li>Any meal not specified in inclusions</li>
                      <li>
                        Any admission fees or expenses in personal nature as
                        applicable
                      </li>
                      <li>Lunch and Dinner</li>
                      <li>
                        Any expenses of personal nature such as porterage,
                        laundry expenses, mini-bar, mineral water, telephone
                        charges, food & drink that are not a part of the package
                      </li>
                      <li>
                        Any Increase in the fuel surcharge or any kind of taxes
                        levied by the respective government or statutory bodies.
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
                      <li>40% prior to 30days before travel date</li>
                      <li>
                        Remaining 20% payment 15 days before departure date
                      </li>
                    </ul>
                    <h1 className='text-lg font-semibold underline'>
                      CANCELLATION POLICY:
                    </h1>
                    <ul className='ml-6 list-disc'>
                      <li>
                        20% cancellation charges if cancelled 45 days before the
                        tour.
                      </li>
                      <li>
                        40% cancellation charges if cancelled between 20 – 30
                        Days before the tour.
                      </li>
                      <li>
                        60% cancellation charges if cancelled between 10 – 15
                        Days before the tour.
                      </li>
                      <li>
                        No refund if cancelled before 10 days of trip start.
                      </li>
                      <li>
                        No Refund or Compensation on any changes on an ongoing
                        trip
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
                        ROE will be calculated at the rate prevailing on the
                        date of final payment
                      </li>
                      <li>
                        GST & TCS will be charged @5% on overseas tour packages
                        .
                      </li>
                    </ul>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group> */}

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
                        Bali
                      </th>
                      <td className='px-6 py-4'>
                        Adi Dharma Hotel Legian /NEO+ Hotel Legian/similar
                      </td>
                      <td className='px-6 py-4'>
                        Fairfield by Marriot Bali South Kuta/ Ramayana Suite
                        Kuta/ similar
                      </td>
                      <td className='px-6 py-4'>
                        Bali Dynasty Resort Kuta / Anvaya Beach Resort / Similar
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* <Modal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          selectedPackage='Beautiful Bali'
        /> */}
      </Container>
    </main>
  );
};

export default PackagePage;
