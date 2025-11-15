import React from "react";
import Image from "next/image";
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

export default function Footer() {
  return (
    <div className="w-full bg-[#1D2026] text-gray-400 font-sans">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-center xl:text-justify">
          <div className="lg:col-span-3 flex flex-col gap-5 text-center xl:text-justify">
            <Link href="/" className="flex items-center gap-2 mx-auto xl:mx-0">
              <Image
                src="/navbar/GraduationCap.png"
                width={40}
                height={40}
                alt="Graduation Cap"
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
              <Link
                href="#"
                className="w-9 h-9 bg-gray-700 rounded-md flex items-center justify-center hover:bg-[#FF6636] transition-colors"
              >
                <Facebook size={16} className="text-white" />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 bg-gray-700 rounded-md flex items-center justify-center hover:bg-[#FF6636] transition-colors"
              >
                <Instagram size={16} className="text-white" />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 bg-gray-700 rounded-md flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                <Linkedin size={16} className="text-white" />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 bg-gray-700 rounded-md flex items-center justify-center hover:bg-[#FF6636] transition-colors"
              >
                <Twitter size={16} className="text-white" />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 bg-gray-700 rounded-md flex items-center justify-center hover:bg-[#FF6636] transition-colors"
              >
                <Youtube size={16} className="text-white" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-2 text-center xl:text-justify">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Top 4 Category
            </h3>
            <div className="flex flex-col gap-3 text-sm">
              <Link
                href="#"
                className="hover:text-white transition-colors hover:border-b-2 hover:border-b-[#FF6636]"
              >
                Development
              </Link>
              <Link
                href="#"
                className="hover:text-white transition-colors hover:border-b-2 hover:border-b-[#FF6636]"
              >
                Finance & Accounting
              </Link>
              <Link
                href="#"
                className="hover:text-white transition-colors hover:border-b-2 hover:border-b-[#FF6636]"
              >
                Design
              </Link>
              <Link
                href="#"
                className="hover:text-white transition-colors hover:border-b-2 hover:border-b-[#FF6636]"
              >
                Business
              </Link>
            </div>
          </div>
          <div className="lg:col-span-2 text-center xl:text-justify">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <div className="flex flex-col gap-3 text-sm">
              <Link
                href="#"
                className="hover:border-b-2 hover:border-b-[#FF6636] hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="#"
                className="mx-auto xl:mx-0 hover:border-b-2 hover:border-b-[#FF6636] flex items-center gap-1 text-white hover:text-white transition-colors"
              >
                Become Instructor
                <ChevronRight size={14} />
              </Link>
              <Link
                href="#"
                className=" hover:border-b-2 hover:border-b-[#FF6636] hover:text-white transition-colors"
              >
                Contact
              </Link>
              <Link
                href="#"
                className="hover:border-b-2 hover:border-b-[#FF6636] hover:text-white transition-colors"
              >
                Career
              </Link>
            </div>
          </div>

          {/*Support */}
          <div className="lg:col-span-2 text-center xl:text-justify">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Support
            </h3>
            <div className="flex flex-col gap-3 text-sm">
              <Link
                href="#"
                className="hover:border-b-2 hover:border-b-[#FF6636] hover:text-white transition-colors"
              >
                Help Center
              </Link>
              <Link
                href="#"
                className="hover:text-white transition-colors hover:border-b-2 hover:border-b-[#FF6636]"
              >
                FAQs
              </Link>
              <Link
                href="#"
                className="hover:text-white transition-colors hover:border-b-2 hover:border-b-[#FF6636]"
              >
                Terms & Conditions
              </Link>
              <Link
                href="#"
                className="hover:text-white transition-colors hover:border-b-2 hover:border-b-[#FF6636]"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="lg:col-span-3 text-center xl:text-justify">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Download Our App
            </h3>
            <div className="flex flex-col gap-4">
              <Link
                href="#"
                className="bg-[#363b4766] rounded-lg p-3 justify-center flex items-center gap-3 hover:bg-gray-600 transition-colors"
              >
                <Image
                  src="/footer/apple.png"
                  width={32}
                  height={32}
                  alt="playstore"
                />
                <div>
                  <span className="text-xs block">Download on the</span>
                  <span className="text-lg font-semibold text-white">
                    App Store
                  </span>
                </div>
              </Link>
              <Link
                href="#"
                className="bg-[#363b4766] rounded-lg justify-center p-3 flex items-center gap-3 hover:bg-gray-600 transition-colors"
              >
                <Image
                  src="/footer/playstore.png"
                  width={32}
                  height={32}
                  alt="playstore"
                />
                <div>
                  <span className="text-xs block">Download on the</span>
                  <span className="text-lg font-semibold text-white">
                    Play Store
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/*Sub-Footer*/}
      <div className="border-t border-gray-700 mx-auto xl:mx-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-center md:text-left">
            © 2021 E-tutor. Designed by{" "}
            <span className="text-white">TemplaCookie</span>. All rights
            reserved
          </p>
          <div className="relative group">
            <select className="appearance-none bg-transparent border-none text-gray-400 text-sm pr-6 focus:outline-none cursor-pointer group-hover:text-white">
              <option className="text-black" value="en">
                English
              </option>
              <option className="text-black" value="fr">
                French
              </option>
              <option className="text-black" value="es">
                Spanish
              </option>
            </select>
            <ChevronDown
              size={16}
              className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none group-hover:text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

