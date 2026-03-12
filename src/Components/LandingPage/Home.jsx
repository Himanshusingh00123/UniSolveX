// import { Link } from "react-router-dom";
// const Home = () => {
//   return (
//     <div>
//       <h1 className="text-center text-5xl font-bold my-10"> hello himanshu</h1>
//       <Link to="/admin">
//         <button className="border p-3 items-center m-auto  justify-center hover:bg-blue-500 hover:text-white text-lg font-bold rounded-full  flex">
//           Go to admin
//         </button>
//       </Link>
//     </div>
//   );
// };
// export default Home;

import Spline from "@splinetool/react-spline";
import React, { useState, useRef, useEffect } from "react";
import { Menu, ChevronDown, BookOpen, FileText, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const [branchOpen, setBranchOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setBranchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const cards = [
    {
      title: "B.Tech",
      desc: "Access semester-wise previous year question papers with solutions.",
      btn: "Explore",
    },
    {
      title: "CSE Branch",
      desc: "Find subject-wise PYQs organized year by year.",
      btn: "View Subjects",
    },
    {
      title: "Semester 5",
      desc: "Download and practice solved question papers easily.",
      btn: "Browse Papers",
    },
  ];

  const features = [
    { icon: <BookOpen />, title: "Verified Solutions" },
    { icon: <FileText />, title: "Organized Structure" },
    { icon: <Download />, title: "Easy Downloads" },
  ];

  return (
    <div className="min-h-screen flex relative flex-col  text-gray-800 scroll-smooth overflow-hidden">
      {/* HEADER */}
      <header className="w-full    max-sm:shadow-md max-sm:bg-gray-200 fixed  z-30 ">
        <div className="max-w-7xl mx-auto flex justify-between text-xl  items-center px-6 py-4">
          <h1 className="text-3xl font-extrabold ">
            UniSolve<span className="text-amber-600">X</span>
          </h1>

          <nav className="hidden md:flex gap-10 font-medium  items-center">
            <Link href="#home" className="hover:text-blue-600">
              Home
            </Link>
            <Link href="#courses" className="hover:text-blue-600">
              Courses
            </Link>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setBranchOpen(!branchOpen)}
                className="flex items-center gap-1 hover:text-indigo-600"
              >
                Branch <ChevronDown size={16} />
              </button>
              {branchOpen && (
                <div className="absolute top-8 left-0 bg-white shadow-xl rounded-xl p-4 space-y-2 w-40">
                  <p className="hover:text-blue-600 cursor-pointer">CSE</p>
                  <p className="hover:text-blue-600 cursor-pointer">IT</p>
                  <p className="hover:text-blue-600 cursor-pointer">ECE</p>
                  <p className="hover:text-blue-600 cursor-pointer">
                    Mechanical
                  </p>
                </div>
              )}
            </div>

            <Link href="#semester" className="hover:text-blue-600">
              Semester
            </Link>
          </nav>

          <button className="md:hidden">
            <Menu />
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      {/* HERO SECTION */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center text-center overflow-hidden"
      >
        {/* Spline Background */}
        <div className="absolute inset-0 ">
          <Spline scene="https://prod.spline.design/IXrB7hDgdYVQzCVB/scene.splinecode" />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30 -z-10 "></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl px-6">
          <h2 className="text-4xl md:text-6xl font-extrabold text-emerald-600 leading-tight">
            Prepare Smarter with{" "}
            <span className=" text-purple-400">UniSolveX</span>
          </h2>

          <div className="mt-8 flex justify-center gap-4">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition">
              Explore Papers
            </button>

            <button className="px-6 py-3 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-gray-200 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* COURSES SECTION */}
      <section id="courses" className="px-6 py-16 bg-neutral-300">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-12">Popular Categories</h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition"
              >
                <h4 className="text-xl font-semibold mb-4">{card.title}</h4>
                <p className="text-gray-600 text-sm">{card.desc}</p>
                <button className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-xl hover:scale-105 transition">
                  {card.btn}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="px-6 py-16 bg-neutral-300">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-12">Why Choose Us?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <div className="flex justify-center mb-4 text-indigo-600">
                  {feature.icon}
                </div>
                <h4 className="font-semibold">{feature.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="px-6 py-16 bg-neutral-300 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">About UniSolvex</h3>
          <p className="text-gray-600 text-lg">
            UniSolvex helps students prepare effectively by providing structured
            and solved previous year papers. Our goal is to simplify exam
            preparation with organized academic resources.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="semester"
        className="relative bg-gray-900 text-gray-300 py-10 px-6"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h4 className="text-xl font-bold text-white mb-4">UniSolvex</h4>
          <p className="text-sm mb-6">Solve Smart. Score High.</p>
          <div className="text-xs border-t border-gray-700 pt-4">
            © 2026 UniSolvex | All Rights Reserved
          </div>
        </div>

        <Link
          to="/admin"
          className="absolute bottom-6 right-6 px-5 py-2 bg-indigo-600 text-white rounded-full shadow-lg hover:scale-110 hover:shadow-indigo-500/50 transition"
        >
          *
        </Link>
      </footer>
    </div>
  );
};
export default Home;
