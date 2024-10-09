import React from "react";
import { FaBars, FaLanguage, FaUserCircle } from "react-icons/fa";

const UserControls = () => {
  return (
    <div className="flex items-center space-x-6">
      <a href="/" className="hover:text-black text-gray-700 font-semibold text-sm">Minibnb your home</a>
      <div className="flex items-center space-x-6">
        <FaLanguage className="h-10 w-10  text-gray-700 hover:shadow-md hover:border hover:rounded-full p-1" />
        <div className="flex flex-row border-2 rounded-full border-gray-200 p-2 hover:shadow-md">
          <FaBars className="h-4 w-4 text-gray-700 mx-1 my-1" />
          <FaUserCircle className="h-6 w-6 text-gray-700 mx-1" />
        </div>
        
      </div>
    </div>
  );
};

export default UserControls;
