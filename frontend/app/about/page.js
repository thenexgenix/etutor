"use client";
import Image from "next/image";

// Component to render a company logo box
const CompanyLogo = ({ name, src }) => {
  const logoClasses = `flex justify-center items-center h-32 bg-white rounded-lg shadow-sm`; 
  return (
    <div className={logoClasses}>
        <Image
            src={src}
            alt={name}
            width={100} 
            height={80} 
            className="object-contain" 
        />
    </div>
  );
};

// Stat item using image icons
const StatItem = ({ value, label, iconSrc, valueColor }) => (
    <div className="flex flex-col"> 
        <div className="flex items-center mb-1"> 
            <Image
                src={iconSrc}
                alt={label + " icon"}
                width={35}
                height={35}
                className="mr-2 object-contain"
            />
            <span className={`text-4xl font-semibold ${valueColor}`}>{value}</span> 
        </div>
        <span className="text-gray-600 text-sm ml-11">{label}</span> 
    </div>
);

export default function AboutPage() {
  const partnerCompanies = [
    { name: "Netflix", src: "/logos/netflix.png" },
    { name: "YouTube", src: "/logos/yt.png" },
    { name: "Google", src: "/logos/google.png" },
    { name: "Lenovo", src: "/logos/lenovo.png" },
    { name: "Slack", src: "/logos/slack.png" },
    { name: "Verizon", src: "/logos/varizon.png" },
    { name: "Lexmark", src: "/logos/lm.png" },
    { name: "Microsoft", src: "/logos/ms.png" },
  ];

  const statsData = [
    { value: "67.1k", label: "Students", iconSrc: "/logos/Users.png", valueColor: "text-gray-800" },
    { value: "26k", label: "Certified Instructor", iconSrc: "/logos/Notebook.png", valueColor: "text-gray-800" },
    { value: "72", label: "Country Language", iconSrc: "/logos/globe.png", valueColor: "text-gray-800" },
    { value: "99.9%", label: "Success Rate", iconSrc: "/logos/circle.png", valueColor: "text-gray-800" },
    { value: "57", label: "Trusted Companies", iconSrc: "/logos/Stack.png", valueColor: "text-gray-800" },
  ];


  const galleryImages = [
        { src: "/images/office-1.jpg", alt: "Office Space", classes: "col-span-2 row-span-1" },
        { src: "/images/team-mask.jpg", alt: "Team Working", classes: "col-span-1 row-span-1" },
        { src: "/images/headset.jpg", alt: "Support Agent", classes: "col-span-1 row-span-1" },
        { src: "/images/desk-work.jpg", alt: "Desk Work", classes: "col-span-1 row-span-2" },
        { src: "/images/meeting.jpg", alt: "Team Meeting", classes: "col-span-2 row-span-1" },
        { src: "/images/laptops.jpg", alt: "Laptops", classes: "col-span-1 row-span-1" },
        { src: "/images/solo-desk.jpg", alt: "Solo Desk", classes: "col-span-1 row-span-1" },
    ];

  return (
    <main className="bg-white text-gray-800">

      {/* Header */}
      <section className="text-center py-12 bg-gray-50">
        <p className="text-sm text-gray-500">Home / About</p>
        <h1 className="w-full text-xl font-semibold mt-2">About</h1>
      </section>

      {/* Intro */}
      <section className="border-t border-b border-gray-100 py-16">
        <div className="w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-6xl font-semibold text-gray-200">2007–2021</h2>
            <h3 className="text-4xl font-semibold text-gray-900 mt-3">
              We share knowledge <br/> with the world
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-[26rem] text-base">
              Interdum et malesuada fames ac ante ipsum primis in faucibus. 
              Praesent fermentum quam mauris. 
              Fusce tempor et augue a aliquet. 
              Donec non ipsum non risus egestas tincidunt at vitae nulla. 
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/human.png"
              width={500}
              height={350}
              alt="Team Image"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Partner Companies */}
      <section className="bg-white py-20">
        <div className="w-4xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4">
            <h3 className="text-3xl font-semibold text-gray-900">
              We Just keep growing <br/> with **6.3k Companies**
            </h3>
            <p className="text-gray-500 mt-4 max-w-sm">
              Nullam egestas tellus at enim ornare tristique. <br/> Class aptent taciti sociosqu ad litora torquent.
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-4 gap-6">
              {partnerCompanies.map((company, index) => (
                  <CompanyLogo
                      key={index}
                      name={company.name}
                      src={company.src}
                  />
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="w-4xl mx-auto pt-16">
          <div className="flex justify-between items-start flex-wrap gap-y-8">
            {statsData.map((stat, index) => (
              <StatItem
                key={index}
                value={stat.value}
                label={stat.label}
                iconSrc={stat.iconSrc}
                valueColor={stat.valueColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#FFEEE8]  w-full">
        <div className="w-3xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center items-end h-full">
            <Image
              src="/images/bus-part.png"
              width={500}
              height={500}
              alt="Mission Image"
              className="rounded-lg w-full h-75 object-cover block"
            />
          </div>
          <div>
            <p className="text-orange-600 text-sm font-semibold pt-8">OUR ONE BILLION MISSION</p>
            <h3 className="text-2xl font-bold mt-3 text-gray-900 ">
              Our one billion mission sounds bold, We agree.
            </h3>
            <p className=" text-gray-600 mt-4 leading-relaxed pb-8 pr-10">
              We cannot achieve our potential until we take on bold actions and
              ambitious goals. Our mission drives us to push boundaries and
              deliver exceptional value. We believe in global learning and
              sharing, creating a culture where knowledge has no borders.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
<section className="bg-gray-50 py-16">
  <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12 items-start px-4 md:px-6 lg:px-8">
    
    {/* Left Column: Text and Button */}
    <div>
      <p className="text-orange-600 text-sm font-normal mt-30 ml-20">OUR GALLERY</p>
      <h3 className="text-4xl font-bold mt-3 ml-20 text-gray-900 leading-tight">
        We’ve been here <br /> almost 17 years
      </h3>
      <p className="text-gray-600 mt-4 mb-8 ml-20 max-w-[26rem]">
        Fusce lobortis leo augue, sit amet tristique nisi commodo in. Aliquam ac libero quis tellus venenatis imperdiet. Sed nunc libero. Curabitur in urna ligula. torquent per conubia nostra.
      </p>
      <button className="bg-orange-500 text-white ml-20 px-6 py-3 rounded-md hover:bg-orange-600 transition font-medium">
        Join Our Team →
      </button>
    </div>

    {/* Right Column: Image Collage */}
    <div className="mr-15 flex flex-col gap-4 w-full">
      
      {/* 🔹 Top Row — 3 images, bottom aligned, different heights */}
      <div className="flex gap-4 items-end">
        <div className="relative w-[300px] h-[180px] rounded-lg overflow-hidden shadow-lg ml-15">
          <Image src="/images/desk.png" alt="Office Space" fill className="object-cover" />
        </div>
        <div className="relative w-[312px] h-[232px] rounded-lg overflow-hidden shadow-lg">
          <Image src="/images/r1-meet.png" alt="Team Working" fill className="object-cover" />
        </div>
        <div className="relative w-[140px] h-[163px] rounded-lg overflow-hidden shadow-lg">
          <Image src="/images/r1-man.png" alt="Support Agent" fill className="object-cover" />
        </div>
      </div>

      {/* 🔹 Middle Row — Asymmetric collage (2 large + 2 stacked small) */}
      <div className="flex gap-4 mt-4">
        {/* Left side – two large images side-by-side */}
        <div className="flex gap-4 w-2/3">
          <div
            className="relative w-[235px] h-[264px] rounded-lg overflow-hidden shadow-lg"
            
          >
            <Image src="/images/r2-desk.png" alt="Desk Work" fill className="object-cover" />
          </div>
          <div
            className="relative w-[424px] h-[312px] rounded-lg overflow-hidden shadow-lg"
            
          >
            <Image src="/images/r2-meet.png" alt="Team Meeting" fill className="object-cover" />
          </div>
        </div>

        {/* Right side – two smaller stacked images */}
        <div className="flex flex-col gap-4 w-1/3">
          <div
            className="relative w-[238px] h-[160px] rounded-lg overflow-hidden shadow-lg"
            
          >
            <Image src="/images/r2-c.png" alt="Laptops" fill className="object-cover" />
          </div>
          <div
            className="relative w-[124px] h-[128px] rounded-lg overflow-hidden shadow-lg"
            style={{ width: "100%", height: "120px" }}
          >
            <Image src="/images/r2-woman.png" alt="Solo Desk" fill className="object-cover" />
          </div>
        </div>
      </div>

    </div>
  </div>
</section>





      {/* Testimonials */}
<section className="bg-white py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-10 text-gray-700">
    {[
      {
        name: "Sundar Pichai",
       title: (
          <>
            Chief Chairman of{" "}
            <span style={{ color: "#564FFD" }}>Google</span>
          </>
        ),
        text: "Eduguard fit us like a glove. Their team curates fresh, up-to-date courses from their marketplace and makes them available to customers.",
      },
      {
        name: "Satya Nadella",
        title: (
          <>
            CEO of{" "}
            <span style={{ color: "#564FFD" }}>Microsoft</span>
          </>
        ),
        text: "Eduguard responds to the needs of the business in an agile and global manner. It's truly the best solution for our employees and their careers.",
      },
      {
        name: "Ted Sarandos",
        title: (
          <>
            Chief Executive Officer of{" "}
            <span style={{ color: "#564FFD" }}>Netflix</span>
          </>
        ),
        text: "In total, it was a big success, I would get emails about what a fantastic resource it was.",
      },
    ].map((item, i) => (
      <div key={i} className="flex flex-col items-center">
        {/* Quote Card with #F5F7FA Background */}
        <div className="bg-[#F5F7FA] px-2 py-8 rounded-xl relative text-center">
          {/* Opening Quote Mark */}
          <p className="text-orange-600 text-6xl leading-none absolute top-4 left-6">“</p>
          {/* Quote Text */}
          <p className="text-black mt-8 mb-6 px-4">{item.text}</p>
          {/* Closing Quote Mark */}
          <p className="text-orange-600 text-6xl leading-none absolute bottom-4 right-6 rotate-180">”</p>
          
          {/* Triangle Shape (Speech Bubble Tail) */}
          <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-[#F5F7FA]"></div>
        </div>
        
        {/* Name and Title Section */}
        <div className="mt-6 text-center">
          <p className="font-semibold text-gray-900">{item.name}</p>
          <p className="text-sm text-gray-500">{item.title}</p>
        </div>
      </div>
    ))}
  </div>
</section>
    </main>
  );
}
