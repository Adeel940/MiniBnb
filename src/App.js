// import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./NavBar";
// import Experiences from "./components/Home/Experiences";
// import ListingDetails from "./components/Listings/ListingDetails.js";
// import BookingPage from "./components/Bookings/BookingPage.js";
// import Footer from "./Footer";

// function App() {
//   const [searchQuery, setSearchQuery] = useState("");

//   return (
//     <div className="App">
//       <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
//       <Routes>
//         <Route path="/" element={<Experiences searchQuery={searchQuery} />} />
//         <Route path="/listings/:id" element={<ListingDetails />} />
//         <Route path="/book/:id" element={<BookingPage />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
