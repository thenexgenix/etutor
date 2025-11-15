"use client";
import { useState } from "react";
import Footer from "@/components/Footer";
import { ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
const categories = [
  { id: "gen", title: "Nulla tempor odio ut fringilla." },
  { id: "pay", title: "Donec malesuada." },
  { id: "acc", title: "Quisque." },
  { id: "cou", title: "Tristique, in accumsan." },
  { id: "vid", title: "Ut rutrum." },
  { id: "oth", title: "Nullam non ante." },
  { id: "aux", title: "Etiam eu elementum." },
];

const faqs = [
  {
    id: 1,
    question:
      "Fusce placerat interdum magna, sit amet sodales phasellus pulvinar.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    question: "Proin lacinia lobortis metus, ut faucibus eros ullamcorper ut.",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    question:
      "Etiam a nibh dui. Integer sed eros sed leo blandit interdum eget nec.",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 4,
    question: "Nulla id ligula ligula.",
    answer: (
      <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
        <p>
          Aliquam aliquam, sapien eget aliquam imperdiet, elit erat tristique
          justo, sit amet sagittis dolor nisl vel enim. Vivamus sit amet sem non
          sapien ullamcorper ultricies. Cras in sem sem. Nunc pulvinar, mauris
          sed tempor ultricies, enim elit blandit augue, sit amet luctus augue
          lectus non elit.
        </p>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Sed a lorem, aliquam sed, aliquam tincidunt, blandit blandit, erat.
          </li>
          <li>Duis rhoncus, dignissim in, vehicula nec, vehicula.</li>
          <li>Donec dignissim, risus quis, faucibus nec, finibus a.</li>
        </ol>
        <p>
          Sed interdum dignissim vitae, vitae mollis nisl congue nec. A tellus
          metus, posuere nec odio ut, ullamcorper rutrum mi. Curabitur porta sem
          nec felis mollis, nec laoreet leo iaculis. Ut ac lacus non. In magna
          iaculis imperdiet et. Vivamus ante.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    question: "Etiam non tellus non dolor suscipit vehicula.",
    answer:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 6,
    question: "Vestibulum pellentesque ex magna.",
    answer:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
  {
    id: 7,
    question: "Ut ullamcorper est sit amet quam aliquet mattis.",
    answer:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
];
function FaqItem({ faq, isOpen, onToggle }) {
  if (isOpen) {
    return (
      <div className="rounded-md border-2 border-gray-200 overflow-hidden mb-5">
        <button
          onClick={onToggle}
          className="flex justify-between items-center w-full p-5 text-left bg-black"
        >
          <span className="font-medium text-white">{faq.question}</span>
          <ChevronUp size={20} className="text-white" />
        </button>
        <div className="p-5 bg-white">{faq.answer}</div>
      </div>
    );
  }

  // Collapsed State
  return (
    <div className="border rounded-md my-2 px-5 border-gray-200">
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full py-5 text-left"
      >
        <span className="font-semibold text-gray-800">{faq.question}</span>
        <ChevronDown size={20} className="text-gray-500" />
      </button>
    </div>
  );
}
export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("gen");
  const [openAccordion, setOpenAccordion] = useState(4); 

  return (
    <>
      {/*Header Section*/}
      <div className="bg-gray-50 py-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900">FAQs</h1>
          <div className="flex items-center justify-center text-sm text-gray-500 mt-2">
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>
            <ChevronRight size={16} className="mx-1" />
            <span className="text-black">FAQs</span>
          </div>
        </div>
      </div>

      {/* Main Content Section*/}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Categories*/}
          <div className="lg:col-span-4 mb-10 lg:mb-0">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Frequently asked questions
            </h2>
            <div className="space-y-1">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full text-left px-5 py-3 rounded-md font-medium text-sm transition-colors ${
                    activeCategory === category.id
                      ? "bg-[#FF6636] text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          {/*Accordion*/}
          <div className="lg:col-span-5">
            <div>
              {faqs.map((faq) => (
                <FaqItem
                  key={faq.id}
                  faq={faq}
                  isOpen={openAccordion === faq.id}
                  onToggle={() =>
                    setOpenAccordion(openAccordion === faq.id ? null : faq.id)
                  }
                />
              ))}
            </div>
          </div>

          {/* Sidebar Form*/}
          <div className="lg:col-span-3 mt-10 lg:mt-0">
            <div className="relative w-full mb-6">
              <select className="block w-full appearance-none border border-gray-200 rounded-md py-3 px-4 pr-12 text-gray-700 leading-tight focus:outline-none focus:border-gray-400 bg-white text-sm sm:text-base">
                <option>Student</option>
                <option>Instructor</option>
                <option>Guest</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                <ChevronDown size={20} />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 py-6 px-5 rounded-md border border-gray-200">
              <h3 className="font-bold text-lg text-gray-900">
                Don t find your answer!
              </h3>
              <p className="text-sm text-gray-600 mt-2 mb-4">
                Don t worry, write your question here and we will get back to
                you soon.
              </p>
              <form className="space-y-4">
                <div>
                  <textarea
                    rows="4"
                    placeholder="Message"
                    className="w-full text-sm p-3 border border-gray-200 rounded-md focus:outline-none focus:border-gray-400"
                  ></textarea>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full text-sm p-3 border border-gray-200 rounded-md focus:outline-none focus:border-gray-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#FF6636] text-white font-semibold py-3 rounded-md hover:bg-orange-600 transition-colors"
                >
                  Submit Question
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
