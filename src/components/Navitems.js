import React from "react";

const UserControls = () => {
  return (
    <div className="flex items-center space-x-4">
      <a href="/" className="hover:text-black text-gray-700">Airbnb your home</a>
      <div className="flex items-center space-x-2">
        <svg className="h-6 w-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM6 12l6 6 6-6H6z" />
        </svg>
        <svg className="h-6 w-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM6 12l6 6 6-6H6z" />
        </svg>
      </div>
    </div>
  );
};

export default UserControls;
