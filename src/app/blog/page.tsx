/* eslint-disable curly */
/* eslint-disable react/no-unescaped-entities */

'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import type { MutableRefObject } from 'react';

const useTruncateElement = ({
  ref
}: {
  ref: MutableRefObject<HTMLParagraphElement | null>;
}) => {
  const [isTruncated, setIsTruncated] = useState(false);
  const [isShowingMore, setIsShowingMore] = useState(false);

  useLayoutEffect(() => {
    const { offsetHeight, scrollHeight } = ref.current ?? {};

    if (offsetHeight && scrollHeight && offsetHeight < scrollHeight) {
      setIsTruncated(true);
    } else {
      setIsTruncated(false);
    }
  }, [ref]);

  const toggleIsShowingMore = () => {
    setIsShowingMore((prev) => !prev);
  };

  return {
    isTruncated,
    isShowingMore,
    toggleIsShowingMore
  };
};

const BlogPage = () => {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const { isTruncated, isShowingMore, toggleIsShowingMore } =
    useTruncateElement({ ref });
  return (
    <div className='content-center p-6'>
      <div className='p-5 text-3xl font-bold'># Travel Vlogs</div>
      <div className='w-full  rounded-lg border border-gray-200 bg-white p-4  shadow dark:border-gray-700 dark:bg-gray-800 sm:p-8'>
        <h5 className='mb-2 text-3xl font-bold text-gray-900 dark:text-white'>
          Andaman: A paradise for nature lovers and adventure seekers
        </h5>
        <p
          ref={ref}
          className={`break-words text-xl ${!isShowingMore && 'line-clamp-4'}`}
        >
          Andaman: A paradise for nature lovers and adventure seekers The
          Andaman and Nicobar Islands, a union territory of India, are a chain
          of islands located in the Bay of Bengal. The islands are known for
          their stunning beaches, crystal-clear waters, lush forests, and
          diverse marine life. If you're looking for a vacation that combines
          relaxation with adventure, the Andamans are the perfect destination
          for you. Here are a few of the things you can do on your trip: Spend
          your days sunbathing on pristine beaches like Radhanagar Beach, which
          is often ranked among the best beaches in the world. Go snorkeling or
          diving in the crystal-clear waters of the Andaman Sea. Take a boat
          trip to one of the many uninhabited islands in the archipelago. Go
          trekking in the lush forests of Mount Harriet National Park. Visit the
          ruins of Ross Island, a former British settlement. Learn about the
          unique culture and traditions of the indigenous people of the
          Andamans. Here is a possible itinerary for a 3-day trip to the
          Andamans: Day 1: Arrive in Port Blair, the capital of the Andaman and
          Nicobar Islands. Check into your hotel and spend the afternoon
          relaxing on Radhanagar Beach. Day 2: Take a boat trip to North Bay
          Island, a popular spot for water sports such as snorkeling and diving.
          In the evening, visit the Cellular Jail, a former British prison that
          is now a popular tourist attraction. Day 3: Visit Mount Harriet
          National Park for a day of trekking and enjoying the scenic views. In
          the afternoon, take a cooking class to learn how to make some of the
          delicious local dishes. The Andamans are a truly special place, and no
          matter what your interests are, you're sure to find something to love
          on your trip. So pack your bags and start planning your adventure
          today!
        </p>
        {isTruncated && (
          <button
            onClick={toggleIsShowingMore}
            className='text-blue-500 hover:text-blue-700'
          >
            {isShowingMore ? 'Show less' : 'Show more'}
          </button>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
