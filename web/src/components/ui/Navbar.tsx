"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { signIn, signOut, getProviders, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import ProfileImg from "@/assets/images/profile.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { data: session } = useSession();

  const [providers, setProviders] = useState<any>();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const fetchProviders = async () => {
      const providersData = await getProviders();
      setProviders(providersData);
      console.log(providersData);
    };
    fetchProviders();
  }, []);

  return (
    <nav className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 bg-gray-800 text-white">
      <Link href="/" className="flex-shrink-0">
        Logo
      </Link>
      {/* web view */}
      <ul className="hidden md:flex ml-10 flex items-baseline space-x-4">
        <li>
          <a
            href="/"
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/about"
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/services"
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
          >
            Contact
          </a>
        </li>

        <li>
          {session && session.user ? (
            <ul className="auth flex ml-20">
              <li>
                <Link
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                  href="/dashboard"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <button
                  onClick={() => signOut()}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                >
                  Logout
                </button>
              </li>
              <li>
                <Image
                  alt="profile_image"
                  src={ProfileImg}
                  width={30}
                  height={30}
                />
              </li>
            </ul>
          ) : (
            <ul className="flex gap-4">
              {providers &&
                Object.values(providers).map((provider: any) => (
                  <li key={provider?.name}>
                    <button type="button" onClick={() => signIn(provider?.id)}>
                      {provider.name} Sign In
                    </button>
                  </li>
                ))}
            </ul>
          )}
        </li>
      </ul>
      <button
        onClick={toggleMenu}
        className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* mobile view */}
      {isOpen && (
        <ul className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <li>
            <Link
              href="/"
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Contact
            </Link>
          </li>
          <li>
            {session && session.user ? (
              <ul className="auth flex flex-col items-start ">
                <li>
                  <Link
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                    href="/dashboard"
                    onClick={toggleMenu}
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      toggleMenu();
                      signOut();
                    }}
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                  >
                    Logout
                  </button>
                </li>
                <li>
                  <Image
                    alt="profile_image"
                    src={ProfileImg}
                    width={30}
                    height={30}
                  />
                </li>
              </ul>
            ) : (
              <ul>
                {providers &&
                  Object.values(providers).map((provider: any) => (
                    <li key={provider?.name}>
                      <button
                        type="button"
                        key={provider?.name}
                        onClick={() => signIn(provider?.id)}
                      >
                        Sign In
                      </button>
                    </li>
                  ))}
              </ul>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
