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

import react, { useState, useRef, useEffect } from "react";
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
    <div className="min-h-screen flex flex-col bg-linear-to-br from-indigo-100 via-white to-purple-100 text-gray-800 scroll-smooth overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute top-40 right-0 w-72 h-72 bg-indigo-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>

      {/* HEADER */}
      <header className="w-full bg-white/80 backdrop-blur-md shadow-md fixed top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-indigo-600">UniSolvex</h1>

          <nav className="hidden md:flex gap-10 font-medium items-center">
            <Link href="#home" className="hover:text-indigo-600">
              Home
            </Link>
            <Link href="#courses" className="hover:text-indigo-600">
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
                  <p className="hover:text-indigo-600 cursor-pointer">CSE</p>
                  <p className="hover:text-indigo-600 cursor-pointer">IT</p>
                  <p className="hover:text-indigo-600 cursor-pointer">ECE</p>
                  <p className="hover:text-indigo-600 cursor-pointer">
                    Mechanical
                  </p>
                </div>
              )}
            </div>

            <Link href="#semester" className="hover:text-indigo-600">
              Semester
            </Link>
          </nav>

          <button className="md:hidden">
            <Menu />
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="home" className="pt-32 pb-20 px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold">
          Prepare Smarter with{" "}
          <span className="text-indigo-600">UniSolvex</span>
        </h2>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Course-wise and Semester-wise Previous Year Question Papers with
          Solutions.
        </p>
      </section>

      {/* COURSES SECTION */}
      <section id="courses" className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-12">Popular Categories</h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-indigo-50 p-8 rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition"
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
      <section className="px-6 py-16 bg-linear-to-r from-indigo-50 to-purple-100">
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
      <section className="px-6 py-16 bg-white text-center">
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
          Admin
        </Link>
      </footer>
    </div>
  );
};
export default Home;
