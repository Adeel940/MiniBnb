import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="flex items-center bg-white rounded-full shadow-md pb-2 px-3 space-x-3 w-3/5 border border-gray-100">
      <div className="border-r pr-3">
        <span className="text-xs font-semibold text-gray-500">Where</span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search destinations"
          className="text-sm text-gray-900 outline-none w-full"
        />
      </div>
      <div className="border-r px-3">
        <span className="text-xs font-semibold text-gray-500">Check in</span>
        <input
          type="text"
          placeholder="Add dates"
          className="text-sm text-gray-900 outline-none w-full"
        />
      </div>
      <div className="border-r px-3">
        <span className="text-xs font-semibold text-gray-500">Check out</span>
        <input
          type="text"
          placeholder="Add dates"
          className="text-sm text-gray-900 outline-none w-full"
        />
      </div>
      <div className="px-3">
        <span className="text-xs font-semibold text-gray-500">Who</span>
        <input
          type="text"
          placeholder="Add guests"
          className="text-sm text-gray-900 outline-none w-full"
        />
      </div>
      <button className="bg-blue-400 p-2 rounded-full mt-2">
        <FaSearch className="text-white h-4 w-4" />
      </button>
    </div>
  );
};

export default SearchBar;
