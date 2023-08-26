const Search: React.FC = () => {
  return (
    <div className='ml-11 mr-11 flex items-center  space-x-5 py-6'>
      <select className='w-full appearance-none rounded-md border bg-white p-4 text-blue-950 shadow-sm outline-none focus:border-blue-950'>
        <option>Choose Package</option>
        <option>Srilanka Package</option>
        <option>Bali Package</option>
        <option>Thailand Package</option>
        <option>Vietnam Package</option>
      </select>

      <button
        className='rounded border
         border-blue-950 bg-cyan-500 px-4 py-2 
         font-bold text-white 
          transition duration-200 hover:bg-blue-950 
         '
      >
        Search
      </button>
    </div>
  );
};

export default Search;
