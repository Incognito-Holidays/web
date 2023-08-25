const Search: React.FC = () => {
  return (
    <div className='flex items-center space-x-5 py-6  '>
      <select className='w-96 appearance-none rounded-md border bg-white p-4 text-gray-500 shadow-sm outline-none focus:border-indigo-600'>
        <option>Choose Package</option>
        <option>Srilanka Package</option>
        <option>Bali Package</option>
        <option>Thailand Package</option>
        <option>Vietnam Package</option>
      </select>

      <button
        className='rounded border
         border-blue-700 bg-blue-500 px-4 py-2 
         font-bold text-white hover:bg-blue-700'
      >
        Search
      </button>
    </div>
  );
};

export default Search;
