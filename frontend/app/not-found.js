"use client";
import React from "react";
import Image from "next/image";
function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800 font-sans">
      {/* Main content area */}
      <main className="flex-1 flex items-center justify-center py-0 xl:py-20  px-4 sm:px-4 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
            {/* Left Column*/}
            <div className="text-center lg:text-left">
              <p className="-mt-15 xl:-mt-0 font-semibold text-5xl xl:text-7xl text-gray-300 uppercase tracking-wider">
                Error 404
              </p>
              <h1 className="mt-2 text-4xl md:text-5xl font-semibold text-gray-700 tracking-tight">
                Oops! page not found
              </h1>
              <p className="mt-6 text-base text-gray-600 max-w-md mx-auto lg:mx-0 font-medium">
                Something went wrong. It is look that your requested could not
                be found. It is look like the link is broken or the page is
                removed.
              </p>

              {/* Go Back Button */}
              <button
                onClick={() => window.history.back()}
                className="mt-8 inline-flex items-center gap-2 bg-[#FF6636] text-white font-semibold px-6 py-3 rounded-md hover:bg-orange-600 transition-colors duration-300 shadow-sm"
              >
                Go Back
              </button>
            </div>

            {/*Right Column*/}
            <div className="flex items-center justify-center order-first lg:order-none">
              <Image
                src="/notfound/404.png"
                alt="404 Page Not Found Illustration"
                width={600}
                height={450}
                className="w-full max-w-lg h-auto"
              />
            </div>
          </div>
        </div>
      </main>

      {/* --- Footer --- */}
      <footer className="w-full py-6 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p className="text-center md:text-left">
            © 2021 - Eduguard. Designed by{" "}
            <span className="text-black">TemplaCookie</span> . All rights
            reserved
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-900 transition-colors">
              FAQs
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Terms & Condition
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default function App() {
  return <NotFoundPage />;
}
