import Image from 'next/image';
import bali from '@public/assets/cat1.jpg';

const Categories = () => {
  return (
    <div className='h-auto  bg-violet-200 '>
      <h1 className='pl-16 pt-6 text-center text-3xl font-bold text-cyan-700'>
        Categories
      </h1>
      <div
        className='flex gap-9 overflow-x-auto pb-16 pl-16 pr-16 pt-6 
       '
      >
        <div className='relative flex h-56 w-56 items-end lg:h-[17rem] lg:w-[17rem]'>
          <Image
            className='rounded-xl transition-all duration-200 group-hover:scale-95 '
            objectFit='cover'
            layout='fill'
            src={bali}
            alt='Sunset in the mountains'
          />
          <div
            className='
              z-20
              w-full
              rounded-b-xl
               bg-gray-900
               bg-opacity-30
               p-4
               text-center
               font-bold 
               text-white
             '
          >
            Mountain
          </div>
        </div>

        <div className='relative flex h-56 w-56 items-end lg:h-[17rem] lg:w-[17rem]'>
          <Image
            className='rounded-xl transition-all duration-200 group-hover:scale-95'
            objectFit='cover'
            layout='fill'
            src={bali}
            alt='Sunset in the mountains'
          />
          <div
            className='
              z-20
              w-full
              rounded-b-xl
               bg-gray-900
               bg-opacity-30
               p-4
               text-center
               font-bold 
               text-white
             '
          >
            Mountain
          </div>
        </div>
        <div className='relative flex h-56 w-56 items-end lg:h-[17rem] lg:w-[17rem]'>
          <Image
            className='rounded-xl transition-all duration-200 group-hover:scale-95'
            objectFit='cover'
            layout='fill'
            src={bali}
            alt='Sunset in the mountains'
          />
          <div
            className='
              z-20
              w-full
              rounded-b-xl
               bg-gray-900
               bg-opacity-30
               p-4
               text-center
               font-bold 
               text-white
             '
          >
            Mountain
          </div>
        </div>
        <div className='relative flex h-56 w-56 items-end lg:h-[17rem] lg:w-[17rem]'>
          <Image
            className='rounded-xl transition-all duration-200 group-hover:scale-95'
            objectFit='cover'
            layout='fill'
            src={bali}
            alt='Sunset in the mountains'
          />
          <div
            className='
              z-20
              w-full
              rounded-b-xl
               bg-gray-900
               bg-opacity-30
               p-4
               text-center
               font-bold 
               text-white
             '
          >
            Mountain
          </div>
        </div>
        <div className='relative flex h-56 w-56 items-end lg:h-[17rem] lg:w-[17rem]'>
          <Image
            className='rounded-xl transition-all duration-200 group-hover:scale-95'
            objectFit='cover'
            layout='fill'
            src={bali}
            alt='Sunset in the mountains'
          />
          <div
            className='
              z-20
              w-full
              rounded-b-xl
               bg-gray-900
               bg-opacity-30
               p-4
               text-center
               font-bold 
               text-white
             '
          >
            Mountain
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
