import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="container mx-auto px-6 py-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Support Section */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">AirCover</a></li>
              <li><a href="#" className="hover:underline">Anti-discrimination</a></li>
              <li><a href="#" className="hover:underline">Disability support</a></li>
              <li><a href="#" className="hover:underline">Cancellation options</a></li>
              <li><a href="#" className="hover:underline">Report neighborhood concern</a></li>
            </ul>
          </div>

          {/* Hosting Section */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Hosting</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">MiniBnb your home</a></li>
              <li><a href="#" className="hover:underline">AirCover for Hosts</a></li>
              <li><a href="#" className="hover:underline">Hosting resources</a></li>
              <li><a href="#" className="hover:underline">Community forum</a></li>
              <li><a href="#" className="hover:underline">Hosting responsibly</a></li>
              <li><a href="#" className="hover:underline">MiniBnb-friendly apartments</a></li>
              <li><a href="#" className="hover:underline">Join a free Hosting class</a></li>
              <li><a href="#" className="hover:underline">Find a co-host</a></li>
            </ul>
          </div>

          {/* Airbnb Section */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Airbnb</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Newsroom</a></li>
              <li><a href="#" className="hover:underline">New features</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Investors</a></li>
              <li><a href="#" className="hover:underline">Gift cards</a></li>
              <li><a href="#" className="hover:underline">MiniBnb.org emergency stays</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-300 pt-6 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm">&copy; 2024 MiniBnb, Inc. · <a href="#" className="hover:underline">Terms</a> · <a href="#" className="hover:underline">Sitemap</a> · <a href="#" className="hover:underline">Privacy</a></p>
          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-gray-900"><FaFacebook size={20} /></a>
            <a href="#" className="hover:text-gray-900"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-gray-900"><FaInstagram size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;