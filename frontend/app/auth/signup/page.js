"use client";
import Image from "next/image";

export default function SignupPage() {
  return (
    <div className="flex w-[1920px] h-[992px] overflow-hidden mx-auto shadow-lg rounded-2xl bg-white">
      {/* Left side */}
      <div className="relative w-1/2 bg-[#F1ECFF] flex items-center justify-center">
        <div className="relative w-[750px] h-[750px]">
          <Image
            src="/signupbg.svg"
            alt="Signup Illustration"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Right side */}
      <div className="w-1/2 flex items-center justify-center bg-[#FFFFFF]">
        <div className="w-[648px] space-y-6">
          <h2 className="text-[40px] font-semibold text-[#1D2026] text-center mb-6">
            Create your account
          </h2>

          {/* Signup*/}
          <form className="space-y-4">
            {/* Full Name */}
            <div className="flex gap-3">
              <div className="w-1/2">
                <label className="block text-[14px] text-[#1D2026] mb-1">
                  First name
                </label>
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full px-4 py-2 border border-[#E9EAF0] rounded-lg text-[16px] text-[#8C94A3] focus:outline-none focus:ring-2 focus:ring-[#D6D7E1]"
                />
              </div>

              <div className="w-1/2">
                <label className="block text-[14px] text-[#1D2026] mb-1">
                  Last name
                </label>
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full px-4 py-2 border border-[#E9EAF0] rounded-lg text-[16px] text-[#8C94A3] focus:outline-none focus:ring-2 focus:ring-[#D6D7E1]"
                />
              </div>
            </div>

            {/* Username */}
            <div>
              <label className="block text-[14px] text-[#1D2026] mb-1">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full px-4 py-2 border border-[#E9EAF0] rounded-lg text-[16px] text-[#8C94A3] focus:outline-none focus:ring-2 focus:ring-[#D6D7E1]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-[14px] text-[#1D2026] mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-2 border border-[#E9EAF0] rounded-lg text-[16px] text-[#8C94A3] focus:outline-none focus:ring-2 focus:ring-[#D6D7E1]"
              />
            </div>

            {/* Password */}
            <div className="flex gap-3">
              <div className="w-1/2">
                <label className="block text-[14px] text-[#1D2026] mb-1">
                  Create password
                </label>
                <input
                  type="password"
                  placeholder="Create password"
                  className="w-full px-4 py-2 border border-[#E9EAF0] rounded-lg text-[16px] text-[#8C94A3] focus:outline-none focus:ring-2 focus:ring-[#D6D7E1]"
                />
              </div>

              <div className="w-1/2">
                <label className="block text-[14px] text-[#1D2026] mb-1">
                  Confirm password
                </label>
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="w-full px-4 py-2 border border-[#E9EAF0] rounded-lg text-[16px] text-[#8C94A3] focus:outline-none focus:ring-2 focus:ring-[#D6D7E1]"
                />
              </div>
            </div>

            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-2 text-[14px] text-[#6E7485] mt-[37px] ">
                <input type="checkbox" className="accent-[#564FFD]" />
                <span>
                  I agree with all your{" "}
                  <a href="/terms" className="text-[#564FFD]">
                    Terms & Conditions
                  </a>
                </span>
              </div>

              <button
                type="submit"
                className="bg-[#FF6636] text-[#FFFFFF] text-[16px] px-6 py-3 mt-[24px] transition-all text-nowrap"
              >
                Create Account →
              </button>
            </div>
          </form>

          <div className="mt-[40px] flex gap-2 items-center justify-center">
            <div className="h-[1px] w-1/2 bg-[#E9EAF0]"></div>
            <div className=" text-[#8C94A3] text-[14px] text-nowrap ">
              SIGN UP WITH
            </div>
            <div className="h-[1px] w-1/2 bg-[#E9EAF0]"></div>
          </div>
          {/* Social buttons */}
          <div className="flex gap-6 justify-center mt-2">
            {/* Google */}
            <button className="flex items-center gap-2 border border-[#E9EAF0]  rounded-lg  transition text-[14px] text-[#1D2026] w-[200px]">
              <Image
                src="/goggle.svg"
                alt="Google"
                width={44}
                height={44}
                className="object-contain"
              />
              <span className="py-2 px-4">Google</span>
            </button>

            {/* Facebook */}
            <button className="flex items-center gap-2 border border-[#4267B2] rounded-lg transition text-[14px] text-[#1D2026] w-[200px]">
              <Image
                src="/fb.svg"
                alt="Facebook"
                width={44}
                height={44}
                className="object-contain"
              />
              <span className="py-2 px-4 ">Facebook</span>
            </button>

            {/* Apple */}
            <button className="flex items-center w-[200px] gap-2 border border-[#E9EAF0] rounded-lg  transition text-[14px] text-[#1D2026]">
              <Image
                src="/apple.svg"
                alt="Apple"
                width={44}
                height={44}
                className="object-contain"
              />
              <span className="py-2 px-4">Apple</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
