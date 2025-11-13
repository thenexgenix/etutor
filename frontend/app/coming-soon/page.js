"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const calculateTimeLeft = () => {
    const launchDate = new Date("2025-12-11T00:00:00");
    const now = new Date();
    const difference = launchDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        mins: Math.floor((difference / 1000 / 60) % 60),
        secs: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const countdownBoxes = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.mins },
    { label: "Sec", value: timeLeft.secs },
  ];

  return (
    <main className="bg-[#FFFFFF] flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-900 ">
{/* Header */}
<header className="bg-[#FFFFFF] w-full   border-b border-gray-200 m-0 p-0">
  <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
    {/* Logo */}
    <div className="flex items-center space-x-2">
        <img
            src="/logos/cap.png"
            alt="E-tutor logo"
            className="w-8 h-8 object-contain"
        />
      <h1 className="font-bold text-lg text-gray-900">E-tutor</h1>
    </div>

    {/* Social Icons */}
    <div className="flex items-center space-x-3">
      {[
        { img: "/logos/facebook.png", href: "#", hover: "hover:bg-blue-600" },
        { img: "/logos/twitter.png", href: "#", hover: "hover:bg-sky-400" },
        { img: "/logos/youtube.png", href: "#", hover: "hover:bg-red-600" },
        { img: "/logos/instagram.png", href: "#", hover: "hover:bg-pink-500" },
      ].map((social, i) => (
        <a
          key={i}
          href={social.href}
          className={`p-2 bg-gray-100 rounded-sm transition ${social.hover}`}
        >
          <img
            src={social.img}
            alt="social icon"
            className="w-5 h-5 object-contain invert-[.2] hover:invert-0 transition"
          />
        </a>
      ))}
    </div>
  </div>
</header>



      {/* Content */}
      <div className="grid md:grid-cols-2 gap-8 items-center mt-30 max-w-6xl ml-6">
        {/* Left Section */}
        <div>
          <p className="text-orange-600 font-semibold uppercase tracking-wide mb-2">
            Coming Soon
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
            We are going to launch our website very soon. Stay tune.
          </h1>

          {/* Countdown */}
          <div className="flex space-x-4 mb-8">
            {countdownBoxes.map(({ label, value }, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md rounded-md text-center p-4 w-20"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={value}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-2xl font-bold text-gray-900"
                  >
                    {value ?? "00"}
                  </motion.div>
                </AnimatePresence>
                <p className="text-xs text-gray-500 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Illustration with Overlapping Form */}
        <div className="relative flex flex-col items-center justify-center">
          <img
            src="/images/Saly-2.png"
            alt="E-tutor illustration"
            className="w-80 md:w-[500px] lg:w-[600px] transition-all duration-500"
          />

          {/* Overlapping Form */}
          <div className="absolute -bottom-10 w-100 md:w-96 bg-white shadow-lg rounded-lg p-4 mb-8">
            <p className="font-semibold mb-3 text-center text-left">
              Get notified when we launch
            </p>
                <form className="flex flex-col sm:flex-row gap-3">
                    <input
                        type="email"
                        placeholder="Email address"
                        className="border border-gray-300 rounded-md sm:rounded-l-md sm:rounded-r-none px-4 py-3 flex-grow focus:outline-none w-full"
                    />
                    <button
                        type="submit"
                        className="bg-orange-500 text-white font-semibold px-6 py-3  hover:bg-orange-600 w-full sm:w-auto min-w-[130px]"
                    >
                        Notify Me
                    </button>
                </form>
            <p className="text-xs text-gray-500 mt-2 text-left">
              *Don’t worry we will not spam you 😊
            </p>
          </div>
        </div>
      </div>

     
    </main>
  );
}
