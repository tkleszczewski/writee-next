import { FC } from 'react';

const Search: FC = () => {
  return (
    <div className='flex justify-center mb-12'>
      <div className='min-w-full sm:min-w-[70%] lg:min-w-[50%] relative'>
        <input
          className='border-2 border-gray w-full pl-4 pr-2 py-2 focus:outline-gray-dark rounded'
          placeholder='Search posts ...'
        />
        <button
          id='search-button'
          className='absolute right-0 top-0 h-full rounded text-primary px-4 transition-colors duration-100 bg-secondary hover:bg-secondary-light'
        >
          Search
        </button>
      </div>
    </div>
  );
};

export { Search };
