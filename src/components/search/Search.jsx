import React from 'react';
import { SearchImage } from '../../assets';

const Search = () => {
  return (
    <div className='flex items-center justify-center p-4 w-full'>
      <div className='relative w-full max-w-lg'>
        <input
          type="text"
          className="w-full pl-4 pr-12 py-6 border rounded-lg focus:outline-none focus:border-blue-500 text-gray-700"
          placeholder="Search..."
        />
        <button className="absolute inset-y-0 right-1 pr-0 flex items-center text-gray-600 hover:text-gray-800">
          <img src={SearchImage} alt="search" className="w-18 h-18" />
        </button>
      </div>
    </div>
  )
}

export default Search;
