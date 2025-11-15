"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Bell,
  Heart,
  ShoppingCart,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full flex flex-col font-sans relative z-50">
      {/*DESKTOP HEADER  */}
      <div className="hidden lg:block">
        {/*Top Bar*/}
        <div className="bg-[#1D2026] text-gray-300 text-sm border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-12">
            {/* Left Navigation Links */}
            <div className="flex gap-6 h-full">
              {[
                "Home",
                "Courses",
                "About",
                "Contact",
                "Become an Instructor",
              ].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                  className="h-full flex items-center border-t-2 border-transparent hover:border-[#FF6636] hover:text-white transition-all duration-200"
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Right Selectors */}
            <div className="flex gap-4 items-center">
              <div className="relative group">
                <select className="appearance-none bg-transparent border-none text-gray-300 text-sm pr-4 focus:outline-none cursor-pointer group-hover:text-white">
                  <option className="text-black" value="USD">
                    USD
                  </option>
                  <option className="text-black" value="EUR">
                    EUR
                  </option>
                </select>
                <ChevronDown
                  size={14}
                  className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
                />
              </div>
              <div className="relative group">
                <select className="appearance-none bg-transparent border-none text-gray-300 text-sm pr-4 focus:outline-none cursor-pointer group-hover:text-white">
                  <option className="text-black" value="en">
                    English
                  </option>
                  <option className="text-black" value="fr">
                    French
                  </option>
                </select>
                <ChevronDown
                  size={14}
                  className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/*Main Header*/}
        <header className="w-full bg-white shadow-sm py-4">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="w-8 h-8 flex items-center justify-center">
                <Image
                  src="/navbar/GraduationCap.png"
                  width={40}
                  height={40}
                  alt="Graduation Cap"
                />
              </div>
              <span className="text-2xl font-bold text-[#1D2026]">E-tutor</span>
            </Link>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl">
              <div className="flex border border-gray-200 rounded-md overflow-hidden items-center bg-gray-50 h-11">
                <div className="relative border-r border-gray-200 h-full hidden md:block">
                  <select className="appearance-none h-full bg-transparent pl-4 pr-8 text-gray-600 text-sm font-medium focus:outline-none cursor-pointer hover:bg-gray-100 transition">
                    <option value="">Browse</option>
                    <option value="dev">Development</option>
                    <option value="des">Design</option>
                  </select>
                  <ChevronDown
                    size={16}
                    className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500"
                  />
                </div>
                <div className="relative flex-1 bg-white h-full">
                  <Search
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="What do you want learn..."
                    className="w-full h-full pl-10 pr-4 outline-none text-sm text-gray-700 placeholder-gray-400"
                  />
                </div>
              </div>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-5 text-gray-600">
              <div className="relative hover:text-[#FF6636] cursor-pointer transition">
                <Bell size={24} />
                <span className="absolute top-0 right-0 w-2 h-2 bg-[#FF6636] rounded-full border-2 border-white translate-x-1/2 -translate-y-1/2"></span>
              </div>

              {/* Heart Icon */}
              <Heart
                size={24}
                className="hover:text-[#FF6636] cursor-pointer transition"
              />

              {/* Cart Icon */}
              <div className="relative hover:text-[#FF6636] cursor-pointer transition">
                <ShoppingCart size={24} />
                <span className="absolute -top-2 -right-2 bg-[#FF6636] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  2
                </span>
              </div>

              {/*Avatar*/}
              <div className="ml-2">
                <div className="w-10 h-10 rounded-full bg-gray-200 border border-gray-300 overflow-hidden">
                  <Image
                    src="/navbar/Avatar.png"
                    alt="Profile"
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/*MOBILE HEADER*/}
      <div className="lg:hidden bg-white shadow-sm py-3 px-4 flex justify-between items-center sticky top-0 z-40">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 flex items-center justify-center">
            <Image
              src="/navbar/GraduationCap.png"
              width={40}
              height={40}
              alt="Graduation Cap"
            />
          </div>
          <span className="text-xl font-bold text-[#1D2026]">E-tutor</span>
        </Link>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="text-gray-700 hover:text-[#FF6636]"
        >
          <Menu size={28} />
        </button>
      </div>

      {/*MOBILE MENU OVERLAY*/}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="absolute top-0 right-0 w-[80%] max-w-sm h-full bg-white shadow-xl p-5 flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <span className="font-bold text-lg text-gray-800">Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-500 hover:text-red-500"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Search */}
            <div className="relative w-full">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-md outline-none text-sm"
              />
            </div>

            {/* Mobile Links */}
            <nav className="flex flex-col gap-4">
              {[
                "Home",
                "Courses",
                "About",
                "Contact",
                "Become an Instructor",
              ].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                  className="text-gray-700 font-medium hover:text-[#FF6636] border-b border-gray-100 pb-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </nav>

            {/* Mobile*/}
            <div className="flex flex-col gap-4 mt-auto border-t border-gray-100 pt-4">
              <select className="w-full p-2 border border-gray-200 rounded bg-white text-gray-600">
                <option>English</option>
                <option>French</option>
              </select>
              <select className="w-full p-2 border border-gray-200 rounded bg-white text-gray-600">
                <option>USD</option>
                <option>EUR</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
