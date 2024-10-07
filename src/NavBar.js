import React from "react";
import Logo from "./components/logo";
import NavLinks from "./components/navLinks";
import UserControls from "./components/Navitems";
import SearchBar from "./components/SearchBar";

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
