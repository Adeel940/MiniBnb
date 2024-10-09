import React from "react";
import Logo from "./components/logo";
import NavLinks from "./components/navLinks";
import UserControls from "./components/Navitems";
import SearchBar from "./components/SearchBar";
import Categories from "./components/Categories";


const Navbar = () => {
  return (
    <header className="w-full bg-white">
      <div className="border">
        <div className="flex justify-between items-center px-8 ">

          <Logo />
          <NavLinks />
          <UserControls />
        </div>
        <div className="w-full flex justify-center pb-4">
          <SearchBar />
        </div>
      </div>
      <Categories />
    </header>
  );
};

export default Navbar;

