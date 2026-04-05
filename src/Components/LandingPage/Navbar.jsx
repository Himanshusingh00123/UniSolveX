import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-15">
      <nav className="bg-white border-gray-200 px-3 lg:px-6 py-2.5 shadow-sm ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-7xl">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} className=" h-12 sm:h-13 w-auto" alt="Logo" />
            <span className="self-center sm:text-3xl  text-2xl -ml-2 font-bold whitespace-nowrap text-gray-900">
              UniSolve<span className="text-amber-500">X</span>
            </span>
          </Link>

          {/* Right buttons */}
          <div className="flex sm:w-75 items-center lg:order-2">
            <form className="max-w-md mx-auto max-sm:hidden sm:flex-1  ">
              <label
                htmlFor="search"
                className="block mb-2.5 text-sm font-medium text-gray-900 sr-only"
              >
                Search
              </label>

              <div className="relative">
                {/* Icon */}
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2"
                      d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>

                {/* Input */}
                <input
                  type="search"
                  id="search"
                  className="block w-full p-3 pl-9 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-indigo-500 focus:border-indigo-500 shadow-sm"
                  placeholder="Search PYQ, subjects..."
                  required
                />

                {/* Button */}
                <button
                  type="button"
                  className="absolute right-1.5 bottom-2 cursor-pointer text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded text-xs px-3 py-1.5"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Mobile menu button */}
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          {/* Menu */}
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  href="#"
                  className="block py-2 pr-4 pl-3 text-indigo-600 lg:p-0 border-b-2 border-indigo-600"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 hover:text-indigo-600 lg:p-0 hover:border-b-2 hover:border-indigo-600"
                >
                  PYQ Library
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 hover:text-indigo-600 lg:p-0 hover:border-b-2 hover:border-indigo-600"
                >
                  Subjects
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 hover:text-indigo-600 lg:p-0 hover:border-b-2 hover:border-indigo-600"
                >
                  Solutions
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 hover:text-indigo-600 lg:p-0 hover:border-b-2 hover:border-indigo-600"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 hover:text-indigo-600 lg:p-0 hover:border-b-2 hover:border-indigo-600"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
