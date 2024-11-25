import React, { useState } from "react";
import { FaBars, FaLanguage, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const UserControls = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleNavigate = (path) => {
    setShowDropdown(false); // Close dropdown after navigation
    navigate(path);
  };

  return (
    <div className="flex items-center space-x-6">
      <a href="/" className="hover:text-black text-gray-700 font-semibold text-sm">
        Minibnb your home
      </a>
      <div className="flex items-center space-x-6 relative">
        <FaLanguage className="h-10 w-10 text-gray-700 hover:shadow-md hover:border hover:rounded-full p-1" />
        <div
          className="flex flex-row border-2 rounded-full border-gray-200 p-2 hover:shadow-md cursor-pointer"
          onClick={toggleDropdown}
        >
          <FaBars className="h-4 w-4 text-gray-700 mx-1 my-1" />
          <FaUserCircle className="h-6 w-6 text-gray-700 mx-1" />
        </div>
        {showDropdown && (
          <div className="absolute top-12 right-0 bg-white shadow-md rounded-lg w-40">
            <ul className="flex flex-col">
              <li
                className="px-2 pt-1 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleNavigate("/AdminPanel")}
              >
                Admin Panel
              </li>
              <li
                className="px-2 pt-1 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleNavigate("/login")}
              >
                Login
              </li>
              <li
                className="px-2 pt-1 pb-1 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleNavigate("/register")}
              >
                Register
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserControls;
