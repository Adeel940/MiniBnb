import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import UserControls from "./UserControls";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-8 shadow-lg">
      <Logo />
      <div className="flex space-x-6">
        <NavLinks />
        <SearchBar />
      </div>
      <UserControls />
    </div>
  );
};

export default Navbar;
