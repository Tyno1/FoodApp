"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { signIn, signOut, getProviders, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import ProfileImg from "../../assets/images/profile.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isUserLoggedIn = true;

  const [providers, setProviders] = useState<any>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const result = await getProviders();
      setProviders(result);
    };
    fetchProviders();
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex-shrink-0">
            Logo
          </Link>
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
                <Link
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                  href="/dashboard"
                >
                  Dashboard
                </Link>
                <button className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                  Logout
                </button>
                <Image
                  alt="profile_image"
                  src={ProfileImg}
                  width={30}
                  height={30}
                />
              </div>
            ) : (
              <>
                {providers &&
                  Object.values(providers).map((provider) => (
                    <button
                      type="button"
                      key={provider?.name}
                      onClick={() => signIn(provider?.id)}
                    >
                      Sign In
                    </button>
                  ))}
              </>
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
            <Link
              href="/"
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              About
            </Link>
            <Link
              href="/services"
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Services
            </Link>
            <Link
              href="/contact"
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Contact
            </Link>

            {isUserLoggedIn ? (
              <div className="auth flex flex-col items-start ">
                <Link
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                  href="/dashboard"
                  onClick={toggleMenu}
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    toggleMenu();
                    signOut();
                  }}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                >
                  Logout
                </button>
                <Image
                  alt="profile_image"
                  src={ProfileImg}
                  width={30}
                  height={30}
                />
              </div>
            ) : (
              <>
                {providers &&
                  Object.values(providers).map((provider) => (
                    <button
                      type="button"
                      key={provider?.name}
                      onClick={() => signIn(provider?.id)}
                    >
                      Sign In
                    </button>
                  ))}
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
