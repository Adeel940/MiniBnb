import React from "react";
import Logo from "./components/logo";
import NavLinks from "./components/navLinks";
import UserControls from "./components/Navitems";
import SearchBar from "./components/SearchBar";


const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="flex justify-between items-center px-8 ">
       
        <Logo />
        <NavLinks />
        <UserControls />
      </div>
      <div className="w-full flex justify-center pb-4">
        <SearchBar />
      </div>
    </header>
  );
};

export default Navbar;

