import React from "react";

const SearchBar = () => {
  return (
    <div className="flex items-center bg-white rounded-full shadow-md py-2 px-4 space-x-4">
      <div className="border-r pr-4">
        <span className="text-xs font-semibold text-gray-500">Where</span>
        <input
          type="text"
          placeholder="Search destinations"
          className="text-sm text-gray-900 outline-none"
        />
      </div>
      <div className="border-r px-4">
        <span className="text-xs font-semibold text-gray-500">Check in</span>
        <input
          type="text"
          placeholder="Add dates"
          className="text-sm text-gray-900 outline-none"
        />
      </div>
      <div className="border-r px-4">
        <span className="text-xs font-semibold text-gray-500">Check out</span>
        <input
          type="text"
          placeholder="Add dates"
          className="text-sm text-gray-900 outline-none"
        />
      </div>
      <div className="px-4">
        <span className="text-xs font-semibold text-gray-500">Who</span>
        <input
          type="text"
          placeholder="Add guests"
          className="text-sm text-gray-900 outline-none"
        />
      </div>
      <button className="bg-blue-400 p-2 rounded-full">
        <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M12.9 14.32a8 8 0 111.42-1.42l4.24 4.24-1.42 1.42-4.24-4.24zM8 14a6 6 0 100-12 6 6 0 000 12z" />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
