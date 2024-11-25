import React, { useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./NavBar";
import Experiences from "./components/Home/Experiences";
import ListingDetails from "./components/Listings/ListingDetails.js";
import BookingPage from "./components/Bookings/BookingPage.js";
import Footer from "./Footer";
import Register from "./Register.js";
import Login from "./Login.js";
import AdminPanel from './AdminPanel';

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  // Check if the current path is register or login
  const hideNavbarAndFooter =
    location.pathname === "/register" || location.pathname === "/login";

  const handleRegisterSuccess = () => {
    navigate("/login");
  };

  const handleLoginSuccess = (role) => {
    if (role === "Admin") {
      navigate("/AdminPanel"); // Redirect to admin panel
    } else {
      navigate("/"); // Redirect to user dashboard
    }
  };

  return (
    <div className="App">
      {!hideNavbarAndFooter && (
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      )}
      <Routes>
        <Route
          path="/"
          element={<Experiences searchQuery={searchQuery} />}
        />
        <Route
          path="/listings/:id"
          element={<ListingDetails />}
        />
        <Route
          path="/book/:id"
          element={<BookingPage />}
        />
        <Route
          path="/register"
          element={<Register onRegisterSuccess={handleRegisterSuccess} />}
        />
        <Route
          path="/login"
          element={<Login onLoginSuccess={handleLoginSuccess} />}
        />
        <Route path="/AdminPanel" element={<AdminPanel />} />
      </Routes>
      {!hideNavbarAndFooter && <Footer />}
    </div>
  );
}

export default App;
