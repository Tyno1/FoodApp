"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { signIn, signOut, getProviders, useSession } from "next-auth/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isUserLoggedIn = true;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex-shrink-0">
            Logo
          </a>
          <div className="hidden md:flex">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="/"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
              >
                Home
              </a>
              <a
                href="/about"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
              >
                About
              </a>
              <a
                href="/services"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
              >
                Services
              </a>
              <a
                href="/contact"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
              >
                Contact
              </a>
            </div>
            {isUserLoggedIn ? (
              <div className="auth flex ml-20">
                <a
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                  href="/dashboard"
                >
                  Dashboard
                </a>
                <button className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                  Logout
                </button>
              </div>
            ) : (
              <div className="auth flex ml-20">
                <a
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                  href="/login"
                >
                  Login
                </a>
                <a
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                  href="/register"
                >
                  Register
                </a>
              </div>
            )}
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Home
            </a>
            <a
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              About
            </a>
            <a
              href="/services"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Services
            </a>
            <a
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Contact
            </a>
          </div>
          <div>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
