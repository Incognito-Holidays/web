const Subscribe: React.FC = () => {
  return (
    <div className='items-center justify-center p-10 md:flex md:space-x-4'>
      <h2 className='text-center text-3xl text-cyan-600'>
        Stay up
        <span className='font-bold italic text-cyan-700'> to Date</span>
      </h2>
      <form>
        <div className='flex-shrink-0 items-center md:flex'>
          <input
            className='mr-3 mt-2 h-10 w-full appearance-none rounded-md border border-blue-950 bg-transparent px-2 py-1 leading-tight text-gray-700 focus:outline-none md:mt-0 md:w-60'
            type='text'
            placeholder='Jane Doe'
            aria-label='Full name'
          />
          <input
            className='mr-3 mt-2 h-10 w-full appearance-none rounded-md border border-blue-950 bg-transparent px-2 py-1 leading-tight text-gray-700 focus:outline-none md:mt-0 md:w-60'
            type='number'
            placeholder='Phone Number'
            aria-label='Phone Number'
          />

          <button
            className='mt-2 w-full rounded-lg bg-cyan-600 p-2 text-center text-white transition duration-200 hover:opacity-80 md:mt-0'
            type='button'
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Subscribe;
