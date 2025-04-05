"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  const [isAtTop, setIsAtTop] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    // Only add the scroll listener if we're on the /home route
    if (pathname !== "/home") return;

    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    // Check scroll position on mount in case page loads scrolled down
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  // When on /home and at the top, make the navbar transparent; otherwise, use white background with shadow
  const navClasses =
    pathname === "/home"
      ? `${
          isAtTop
            ? "bg-transparent text-white"
            : "bg-white shadow-md text-gray-700"
        }`
      : "bg-white shadow-md text-gray-700";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${navClasses}`}
      >
        <div className="flex justify-between items-center p-4">
          <div>
            <Link href="/home" className="text-lg font-bold">
              Logo
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/home">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </div>
          {/* Mobile Hamburger */}
          <div className={`md:hidden ${isDrawerOpen ? "hidden" : ""}`}>
            <button onClick={() => setIsDrawerOpen(true)}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Side Drawer */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? "translate-x-0 z-[99999]" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <span className="text-lg font-bold">Menu</span>
          <button onClick={() => setIsDrawerOpen(false)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="p-4 space-y-4">
          <li>
            <Link href="/home" onClick={() => setIsDrawerOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setIsDrawerOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/services" onClick={() => setIsDrawerOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setIsDrawerOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay for Side Drawer */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={() => setIsDrawerOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
