import heroimg from "../../assets/images/Heroimg.png";
import { FaCheckCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <section className=" flex justify-center items-center bg-linear-to-r from-blue-50 via-white ">
      <div className="grid max-w-7xl px-4 py-8  mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        {/* <!-- Text Content --> */}
        <div className="mr-auto place-self-center lg:col-span-7">
          <span className="bg-gray-200 text-indigo-600 rounded-2xl text-sm border border-gray-200  font-semibold tracking-wide py-1 px-3">
            NEXT-GEN ACADEMIC ENGINE
          </span>
          <h1 className="max-w-2xl sm:my-4 my-6 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-900">
            Find Previous Year{" "}
            <span className="text-indigo-600">Question Papers</span> and Smart
            Solutions Instantly
          </h1>

          <p className="max-w-2xl mb-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl">
            UniSolveX helps students quickly find PYQs and solutions organized
            by course, branch, semester, and subject. Master your exams with
            precision.
          </p>

          {/* <!-- Primary Button --> */}
          <div className="flex flex-wrap gap-4 sm:my-6  my-8">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              Search Papers
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center sm:px-5 px-4 py-3 text-base font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
            >
              Browse Subject
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 
                  1.414l-6 6a1 1 0 01-1.414-1.414L14.586 
                  11H3a1 1 0 110-2h11.586l-4.293-4.293a1 
                  1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          <div className=" sm:h-20 h-16 flex justify-between items-center sm:w-10/12 p-3">
            <div>
              <h1 className="text-indigo-600 sm:text-3xl text-2xl font-semibold">
                45K+
              </h1>
              <p className="sm:text-base text-sm text-gray-500 font-medium">
                SOLVED PAPERS
              </p>
            </div>
            <div>
              <h1 className="text-indigo-600 sm:text-3xl text-2xl font-semibold">
                120+
              </h1>
              <p className="sm:text-base text-sm text-gray-500 font-medium">
                SUBJECTS
              </p>
            </div>
            <div>
              <h1 className="text-indigo-600 sm:text-3xl text-2xl font-semibold">
                98%
              </h1>
              <p className="sm:text-base text-sm text-gray-500 font-medium">
                ACCURACY RATE
              </p>
            </div>
          </div>
        </div>

        {/* <!-- Hero Image --> */}
        <div className="hidden relative lg:mt-0 lg:col-span-5 lg:flex">
          <img src={heroimg} alt="heroimg" />
          <div className="absolute -top-3 bg-white border border-gray-100 right-0 z-10 flex text-base justify-center items-center gap-2 font-semibold tracking-wide h-12 p-3 rounded-lg shadow-md">
            <FaCheckCircle className="text-green-600 text-lg" /> Verified
            Solution
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
