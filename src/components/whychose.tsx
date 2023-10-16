/* eslint-disable react/no-unescaped-entities */
const Whychose: React.FC = () => {
  return (
    <div className='bg-violet-200'>
      <div className='pl-16 pr-16 pt-6 text-center text-3xl font-bold text-cyan-700 '>
        Why Incognito Holidays?
      </div>
      <div className='grid h-full gap-4 rounded-lg text-center sm:grid-cols-2 md:grid-cols-4 lg:p-10'>
        <div>
          <a
            href='#'
            className='block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'
          >
            <h5 className='mb-2 text-center text-xl font-bold tracking-tight text-red-500 dark:text-white'>
              Convenience
            </h5>
            <p className='line-clamp-6 text-center font-normal text-gray-700 hover:line-clamp-none dark:text-gray-400'>
              Your travel agency can handle all aspects of your trip planning,
              from booking your flights and accommodations to arranging for
              ground transportation and activities. This can save you a lot of
              time and hassle, especially if you're planning a complex trip.
            </p>
          </a>
        </div>
        <div>
          <a
            href='#'
            className='block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'
          >
            <h5 className='mb-2 text-center text-xl font-bold tracking-tight text-yellow-500 dark:text-white'>
              Expertise
            </h5>
            <p className='line-clamp-6 text-center font-normal text-gray-700 hover:line-clamp-none dark:text-gray-400'>
              Your travel agents are experts in the travel industry and have a
              deep knowledge of a wide range of destinations. They have years of
              experience planning trips to all corners of the globe, and they
              know the best places to go, what to see, and how to get there.
            </p>
          </a>
        </div>
        <div>
          <a
            href='#'
            className='block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'
          >
            <h5 className='mb-2 text-center text-xl font-bold tracking-tight text-green-500 dark:text-white'>
              Competitive prices
            </h5>
            <p className='line-clamp-6 text-center font-normal text-gray-700 hover:line-clamp-none dark:text-gray-400'>
              Your travel agency may be able to get you better deals on flights,
              hotels, and other travel arrangements than you could find on your
              own. This is because they have relationships with a variety of
              travel suppliers and can negotiate bulk discounts.
            </p>
          </a>
        </div>
        <div>
          <a
            href='#'
            className='block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'
          >
            <h5 className='mb-2 text-center text-xl font-bold tracking-tight text-blue-500 dark:text-white'>
              Personalized service
            </h5>
            <p className='line-clamp-6 text-center font-normal text-gray-700 hover:line-clamp-none dark:text-gray-400'>
              We take the time to get to know you and your travel needs, and we
              create a custom itinerary that's perfect for you. We'll handle all
              the details, from booking your flights and accommodations to
              arranging your transfers and activities.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Whychose;
