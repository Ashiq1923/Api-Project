// components/SearchBar.js
import React from 'react';

const SearchBar = ({ searchTerm, handleSearchChange, clearSearch }) => {
  return (
    <div className="flex items-center">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        className="text-black p-2 border border-gray-300 rounded"
        placeholder="Search by Title"
      />
      {searchTerm && (
        <button
          className="ml-[10px] text-xl text-red-500"
          onClick={clearSearch}
        >
          <i className="mr-[10px] fa-solid fa-x"></i>
        </button>
      )}
    </div>
  );
};

export default SearchBar;
