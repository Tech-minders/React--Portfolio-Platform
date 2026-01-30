import React from 'react';

function SearchBar({ onSearch }) {
  function handleChange(e) {
    onSearch(e.target.value.toLowerCase());
  }

  return (
    <div className="relative mb-6">
      <input 
        type="text" 
        placeholder="Search projects..." 
        onChange={handleChange}
        className="w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm  transition-all duration-200"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 ">
        <svg 
          className="w-5 h-5 text-gray-400" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  );
}

export default SearchBar;
