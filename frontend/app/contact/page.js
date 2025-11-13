"use client";
import Image from "next/image";

export default function Contact() {
  return (
    <main className="bg-gray-50">
      {/* Breadcrumb */}
      <div className="text-center py-6 text-sm text-gray-500">
        <span className="text-black font-semibold">Contact</span>
      </div>

      {/* Connect Section */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-8 py-2 px-6 bg-white">
        <div className="max-w-lg text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Connect with us</h2>
          <p className="text-gray-600 mb-6 max-w-sm">
            Want to chat? We’d love to hear from you! Get in touch with our Customer Success Team to inquire about speaking events, advertising rates, or just say hello.
          </p>
          <button className="bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600 flex items-center gap-2">
            <img
              src="/logos/Envelope.png"
              alt="Email Icon"
              className="w-5 h-5"
            />
            Copy Email
          </button>
        </div>
        <Image
          src="/images/contact-person.png"
          alt="Contact Person"
          width={500}
          height={500}
          className="rounded-lg object-contain md:self-end translate-y-2"
        />
      </section>

      {/* Branches */}
      <section className="py-12 px-6 text-center bg-gray-50">
        <h3 className="text-2xl font-bold mb-2">Our branches all over the world.</h3>
        <p className="text-gray-600 mb-10">
          We’re proud to have offices across the globe.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              city: "Los Angeles, California",
              img: "/images/la.png",
              address: "1702 Olympic Boulevard Santa Monica, CA 90404",
            },
            {
              city: "Tokyo, Japan",
              img: "/images/tokyo.jpg",
              address: "901 N Pitt Str., Suite 170 Tokyo, VA 22314, Japan",
            },
            {
              city: "Moscow, Russia",
              img: "/images/moscow.jpg",
              address: "Anjeliersstraat 470H, 1015 NL Moscow, Russia",
            },
            {
              city: "Mumbai, India",
              img: "/images/mumbai.jpg",
              address: "36 East 20th St, 6th Floor Mumbai, India",
            },
          ].map((branch, i) => (
            <div
              key={i}
              className="relative rounded-lg overflow-hidden h-64 shadow-sm hover:shadow-md transition group"
            >
              <Image
                src={branch.img}
                alt={branch.city}
                fill
                className="object-cover brightness-110 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent"></div>
              <div className="absolute inset-0 flex justify-center items-end pb-6">
                <div className="bg-white text-center px-4 py-3 rounded-md shadow-md max-w-[95%] group-hover:scale-105 transition-transform duration-300">
                  {branch.city === "Los Angeles, California" && (
                    <p className="text-sm mt-1" style={{ color: "#FF6636" }}>
                      Main Branch
                    </p>
                  )}
                  <h4 className="font-semibold text-gray-800 text-lg">
                    {branch.city}
                  </h4>
                  <p className="text-sm text-gray-600">{branch.address}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-[#F5F7FA] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-10 text-center">Contact Us</h3>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Left Column - Table */}
            <div className="flex flex-col justify-start items-start">
              <p className="text-gray-600 mb-6">
                Will you be in Los Angeles or any other branches any time soon? 
                Stop by the office! We'd love to meet.
              </p>
              <div className="w-full max-w-md">
                <table className="w-full text-left border-collapse">
                  <tbody>
                    <tr>
                      <td className="py-2 font-normal text-[#FF6636] border-b border-gray-200">ADDRESS:</td>
                      <td className="py-2 border-b border-gray-200">1702 Olympic Boulevard <br/> Santa Monica, CA 90404</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-normal text-[#FF6636] border-b border-gray-200">PHONE NUMBERS:</td>
                      <td className="py-2 border-b border-gray-200">(480) 555-0103 <br/> (219) 555-0114</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-normal text-[#FF6636]">EMAIL ADDRESS:</td>
                      <td className="py-2">help.eduguard@gmail.com <br/> career.eduguard@gamil.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right Column - Form */}
            <form className="bg-[#FFFFFF] p-6 ">
              <h4 className="font-normal text-lg mb-2 text-left">Get in touch</h4>
              <p className="text-gray-600 mb-4 text-left">
                Feel free to contact with us, we love to make new partners & friends
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="firstName" className="mb-1 font-normal">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    className="p-3 border border-gray-300 "
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="lastName" className="mb-1 font-normal">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    className="p-3 border border-gray-300 "
                  />
                </div>
              </div>

              <div className="flex flex-col mt-4">
                <label htmlFor="email" className="mb-1 font-normal">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 "
                />
              </div>

              <div className="flex flex-col mt-4">
                <label htmlFor="subject" className="mb-1 font-normal">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Message Subject"
                  className="w-full p-3 border border-gray-300 "
                />
              </div>

              <div className="flex flex-col mt-4">
                <label htmlFor="message" className="mb-1 font-normal">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Message"
                  className="w-full p-3 border border-gray-300 "
                ></textarea>
              </div>

              <button className="flex items-center justify-center bg-orange-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-orange-600 w-[40%]">
                Send Message
                <img 
                  src="/logos/send-icon.png"
                  alt="Send"
                  className="w-5 h-5 ml-2"
                />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Google Map (iframe for testing without API key) */}
      <section className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.2741278283!2d-118.69192050762487!3d34.02016130616162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c0f8aabf3b8b%3A0x7f92b2ff9e2bbf7a!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1699999999999!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </main>
  );
}
