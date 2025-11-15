"use client";
import React, { useState } from "react";
import {
  ChevronDown,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  ChevronRight,
  Instagram,
} from "lucide-react";
import Link from "next/link";
import Image from 'next/image'
function CustomSelect({ items, defaultValue, className = "" }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);

  return (
    <div className={`relative group ${className}`}>
      <div
        onClick={() => setOpen(!open)}
        className="appearance-none bg-transparent border-none text-sm pr-6 cursor-pointer flex items-center h-full select-none"
      >
        {value}
        <ChevronDown
          size={16}
          className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
        />
      </div>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute bottom-full left-0 mb-1 bg-white rounded shadow-lg z-50 border border-gray-100 min-w-[120px]">
          {items.map((item) => (
            <div
              key={item.value}
              onClick={() => {
                setValue(item.label);
                setOpen(false);
              }}
              className="px-4 py-2 text-sm text-gray-800 hover:bg-[#FF6636] hover:text-white cursor-pointer transition-colors"
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
      {open && (
        <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
      )}
    </div>
  );
}
export default function Footer() {
  return (
    <div className="w-full bg-[#1D2026] text-gray-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-center xl:text-justify">
          <div className="lg:col-span-3 flex flex-col gap-5 text-center xl:text-justify">
            <Link href="/" className="flex items-center gap-2 mx-auto xl:mx-0">
              <Image
                src="/navbar/GraduationCap.png"
                width={40}
                height={40}
                alt="Graduation Cap"
                className="h-10 w-10 object-contain"
              />
              <span className="text-2xl font-bold text-white mx-auto xl:mx-0">
                E-tutor
              </span>
            </Link>
            <p className="text-sm leading-relaxed mx-auto xl:mx-0">
              Aliquam rhoncus ligula est, non pulvinar elit sodales. Donec
              curabitur, egestas sodales leo sed.
            </p>
            <div className="flex gap-3 mt-2 mx-auto xl:mx-0">
              <a
                href="#"
                className="w-9 h-9 bg-gray-700 rounded-md flex items-center justify-center hover:bg-[#FF6636] transition-colors"
              >
                <Facebook size={16} className="text-white" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-700 rounded-md flex items-center justify-center hover:bg-[#FF6636] transition-colors"
              >
                <Instagram size={16} className="text-white" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-700 rounded-md flex items-center justify-center hover:bg-[#FF6636] transition-colors"
              >
                <Linkedin size={16} className="text-white" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-700 rounded-md flex items-center justify-center hover:bg-[#FF6636] transition-colors"
              >
                <Twitter size={16} className="text-white" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-700 rounded-md flex items-center justify-center hover:bg-[#FF6636] transition-colors"
              >
                <Youtube size={16} className="text-white" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-2 text-center xl:text-justify">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Top 4 Category
            </h3>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="#"
                className="hover:text-white transition-colors hover:border-b-2 hover:border-b-[#FF6636]"
              >
                Development
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors hover:border-b-2 hover:border-b-[#FF6636]"
              >
                Finance & Accounting
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors hover:border-b-2 hover:border-b-[#FF6636]"
              >
                Design
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors hover:border-b-2 hover:border-b-[#FF6636]"
              >
                Business
              </a>
            </div>
          </div>
          <div className="lg:col-span-2 text-center xl:text-justify">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="#"
                className="hover:border-b-2 hover:border-b-[#FF6636] hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="mx-auto xl:mx-0 hover:border-b-2 hover:border-b-[#FF6636] flex items-center gap-1 text-white hover:text-white transition-colors"
              >
                Become Instructor
                <ChevronRight size={14} />
              </a>
              <a
                href="#"
                className=" hover:border-b-2 hover:border-b-[#FF6636] hover:text-white transition-colors"
              >
                Contact
              </a>
              <a
                href="#"
                className="hover:border-b-2 hover:border-b-[#FF6636] hover:text-white transition-colors"
              >
                Career
              </a>
            </div>
          </div>

          {/*Support */}
          <div className="lg:col-span-2 text-center xl:text-justify">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Support
            </h3>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="#"
                className="hover:border-b-2 hover:border-b-[#FF6636] hover:text-white transition-colors"
              >
                Help Center
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors hover:border-b-2 hover:border-b-[#FF6636]"
              >
                FAQs
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors hover:border-b-2 hover:border-b-[#FF6636]"
              >
                Terms & Conditions
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors hover:border-b-2 hover:border-b-[#FF6636]"
              >
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="lg:col-span-3 text-center xl:text-justify">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Download Our App
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="#"
                className="bg-[#363b4766] rounded-lg p-3 justify-center flex items-center gap-3 hover:bg-gray-600 transition-colors"
              >
                <Image
                  src="/footer/apple.png"
                  width={32}
                  height={32}
                  alt="playstore"
                  className="h-8 w-8 object-contain"
                />
                <div>
                  <span className="text-xs block">Download on the</span>
                  <span className="text-lg font-semibold text-white">
                    App Store
                  </span>
                </div>
              </a>
              <a
                href="#"
                className="bg-[#363b4766] rounded-lg justify-center p-3 flex items-center gap-3 hover:bg-gray-600 transition-colors"
              >
                <Image
                  src="/footer/playstore.png"
                  width={32}
                  height={32}
                  alt="playstore"
                  className="h-8 w-8 object-contain"
                />
                <div>
                  <span className="text-xs block">Download on the</span>
                  <span className="text-lg font-semibold text-white">
                    Play Store
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/*Sub-Footer*/}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-center md:text-left">
            © 2021 E-tutor. Designed by{" "}
            <span className="text-white">TemplaCookie</span>. All rights
            reserved
          </p>
          <CustomSelect
            defaultValue="English"
            className="text-gray-400 group-hover:text-white"
            items={[
              { label: "English", value: "en" },
              { label: "French", value: "fr" },
              { label: "Spanish", value: "es" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
