"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const [isAtTop, setIsAtTop] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClasses =
    pathname === "/home"
      ? isAtTop
        ? "bg-transparent text-white"
        : "bg-white shadow-md text-gray-700"
      : "bg-white shadow-md text-gray-700";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${navClasses}`}
      >
        <div className="relative max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Link href="/home" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Logo" width={40} height={40} />
              <span className="font-bold text-xl text-white md:text-gray-900">
                
              </span>
            </Link>
          </div>

          {/* Centered Nav Menu (absolute center) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/home" className="hover:text-blue-300">
              Home
            </Link>
            <Link href="/aboutus" className="hover:text-blue-300">
              About us
            </Link>
            <div className="relative group">
              <button className="hover:text-blue-300 flex items-center gap-1">
                Page
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute hidden group-hover:block bg-white text-gray-700 shadow-lg mt-2 rounded w-40 py-2 z-50">
                <Link href="/page1" className="block px-4 py-2 hover:bg-gray-100">
                  Page 1
                </Link>
                <Link href="/page2" className="block px-4 py-2 hover:bg-gray-100">
                  Page 2
                </Link>
              </div>
            </div>
            <Link href="/services" className="hover:text-blue-300">
              Service
            </Link>
            <Link href="/contact" className="hover:text-blue-300">
              Contact
            </Link>
            <Link href="/blog" className="hover:text-blue-300">
              Blog
            </Link>
          </div>

          {/* Right: CTA button */}
          <div className="hidden md:block">
          <Link
  href="/quote"
  className="text-[#F26522] font-regular text-xs bg-[#FFF3EC]  px-3 py-2 rounded transition duration-300 hover:bg-[#F26522] hover:text-white"
>
  Get a quote
</Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsDrawerOpen(true)}>
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <span className="text-lg font-bold">Menu</span>
          <button onClick={() => setIsDrawerOpen(false)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="p-4 space-y-4">
          <li><Link href="/home" onClick={() => setIsDrawerOpen(false)}>Home</Link></li>
          <li><Link href="/about" onClick={() => setIsDrawerOpen(false)}>About us</Link></li>
          <li><Link href="/page1" onClick={() => setIsDrawerOpen(false)}>Page 1</Link></li>
          <li><Link href="/page2" onClick={() => setIsDrawerOpen(false)}>Page 2</Link></li>
          <li><Link href="/services" onClick={() => setIsDrawerOpen(false)}>Service</Link></li>
          <li><Link href="/contact" onClick={() => setIsDrawerOpen(false)}>Contact</Link></li>
          <li><Link href="/blog" onClick={() => setIsDrawerOpen(false)}>Blog</Link></li>
          <li>
            <Link
              href="/quote"
              onClick={() => setIsDrawerOpen(false)}
              className="block w-full text-center border border-blue-500 text-blue-500 px-4 py-1 rounded hover:bg-blue-500 hover:text-white"
            >
              Get a quote
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
