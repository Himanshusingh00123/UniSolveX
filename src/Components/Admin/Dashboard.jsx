import { IoIosSchool } from "react-icons/io";
import { FaCodeBranch } from "react-icons/fa6";
import { IoNewspaperSharp } from "react-icons/io5";
import { BsClipboard2CheckFill } from "react-icons/bs";
import { FaChartLine } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="md:p-2  ">
      <div
        className="md:bg-white  md:h-48 sm:h-80 h-screen  md:border
                  md:shadow-sm border-gray-300 rounded-xl grid
                  xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 p-3 gap-3"
      >
        <div className="auto-rows-fr  bg-linear-to-br from-slate-900 via-slate-800 to-slate-900   cursor-pointer md:hover:scale-103 duration-400 transition  rounded-xl shadow-lg px-5 py-4 ">
          <h1 className="text-3xl text-gray-300 font-semibold mb-2 flex gap-2  items-center">
            <IoIosSchool className="text-gray-200 text-4xl" />
            Total Courses
          </h1>
          <h3 className="text-5xl text-gray-300 font-bold mb-4 md:mb-0">4</h3>
          <div className=" flex justify-between items-center mt-2">
            <h4 className="text-green-500 text-2xl font-semibold flex items-center gap-2">
              <FaChartLine />
              8%
            </h4>
            <p className="bg-green-600 text-white font-bold px-3 py-1 text-md rounded-full flex justify-center items-center">
              Active
            </p>
          </div>
        </div>
        <div className=" bg-linear-to-br  from-indigo-900 via-indigo-800 to-slate-900  cursor-pointer md:hover:scale-103 duration-400 transition rounded-xl shadow-lg  px-5 py-4">
          <h1 className="text-3xl text-gray-300 font-semibold mb-2 flex items-center gap-2">
            <FaCodeBranch className="text-gray-200" />
            Total Branches
          </h1>
          <h3 className="text-5xl text-gray-300 font-bold">24</h3>
          <div className=" flex justify-between items-center mt-2">
            <h4 className="text-green-400 text-2xl font-semibold flex gap-2 items-center">
              <FaChartLine />
              12%
            </h4>
            <p className="bg-green-600 text-white font-bold px-3 py-1 text-md rounded-full flex justify-center items-center">
              Active
            </p>
          </div>
        </div>
        <div className=" bg-linear-to-br from-blue-900 via-slate-800 to-slate-900  cursor-pointer md:hover:scale-103 duration-400 transition rounded-xl shadow-lg  px-5 py-4">
          <h1 className="text-3xl font-semibold text-gray-300 mb-2 flex gap-2 items-center">
            <IoNewspaperSharp className=" text-gray-200" />
            Total Papers
          </h1>
          <h3 className="text-5xl font-bold text-gray-300">25</h3>
          <div className=" flex text-xl justify-end items-center mt-2 ">
            <h4 className="text-green-500 text-2xl font-semibold mr-3 flex gap-2 items-center">
              <FaChartLine />
              29%
            </h4>
            <h3 className=" text-gray-200 font-semibold ">This Month</h3>
          </div>
        </div>
        <div className=" bg-linear-to-br from-violet-900 via-slate-800 to-slate-900 cursor-pointer md:hover:scale-103 duration-400 transition  rounded-xl shadow-lg  px-5 py-4">
          <h1 className="text-3xl font-semibold text-gray-300 mb-2 flex gap-2 items-center">
            <BsClipboard2CheckFill className="text-gray-200" />
            Total Solutions
          </h1>
          <h3 className="text-5xl font-bold text-gray-300 ">22</h3>
          <div className=" flex text-xl justify-end items-center mt-2 ">
            <h4 className="text-green-500 text-2xl font-semibold mr-3 flex gap-2 items-center">
              <FaChartLine />
              19%
            </h4>
            <h3 className=" text-gray-200 font-semibold ">This Month</h3>
          </div>
        </div>
      </div>

      <div className=" h-110 rounded w-full grid md:grid-cols-2 pt-3 gap-3">
        {/* -------------------------------------------------------------Question chart-------------------------------------------------- */}

        <div className="bg-gray-50 border border-gray-300 h-full  rounded-xl shadow-sm">
          <div className=" h-4/12 px-4 py-2">
            <h1 className="text-xl font-bold text-gray-700 mb-2">
              Papers Overview
            </h1>
            <div className="h-9/12 flex gap-3">
              <div className="bg-white w-4/12 border shadow-sm border-gray-300 rounded-2xl py-3 px-4 flex-cols justify-center items-center">
                <h1 className="text-3xl font-semibold text-gray-700 flex gap-3 items-center">
                  8,320
                  <span className="text-sm font-extrabold text-green-600 flex gap-1 justify-center items-center">
                    ^<h3 className="text-md font-bold ">10.0%</h3>
                  </span>
                </h1>
                <h2 className="text-lg font-medium text-gray-500">
                  Question Papers
                </h2>
              </div>

              <div className="bg-white w-4/12 border shadow-sm border-gray-300 rounded-2xl py-3 px-4 flex-cols justify-center items-center">
                <h1 className="text-3xl font-semibold text-gray-700 flex gap-3 items-center">
                  4,864
                  <span className="text-sm font-extrabold text-green-600 flex gap-1 justify-center items-center">
                    +<h3 className="text-md font-bold ">5.5%</h3>
                  </span>
                </h1>
                <h2 className="text-lg font-medium text-gray-500">B.Tech</h2>
              </div>

              <div className="bg-white w-4/12 border shadow-sm border-gray-300 rounded-2xl py-3 px-4 flex-cols justify-center items-center">
                <h1 className="text-3xl font-semibold text-gray-700 flex gap-3 items-center">
                  3,264
                  <span className="text-sm font-extrabold text-green-600 flex gap-1 justify-center items-center">
                    +<h3 className="text-md font-bold ">3.8%</h3>
                  </span>
                </h1>
                <h2 className="text-lg font-medium text-gray-500">BCA</h2>
              </div>
            </div>
          </div>

          <div className=" h-8/12"></div>
        </div>

        {/*---------------------------------------------------------- Solution chart----------------------------------------------------------- */}

        <div className="bg-gray-50 border border-gray-300 h-full  rounded-xl shadow-sm">
          <div className=" h-4/12 px-4 py-2">
            <h1 className="text-xl font-bold text-gray-700 mb-2">
              Solutions Statistics
            </h1>
            <div className="h-9/12 flex gap-3">
              <div className="bg-white w-4/12 border shadow-sm border-gray-300 rounded-2xl py-3 px-4 flex-cols justify-center items-center">
                <h1 className="text-3xl font-semibold text-gray-700 flex gap-3 items-center">
                  6,320
                  <span className="text-sm font-extrabold text-green-600 flex gap-1 justify-center items-center">
                    ^<h3 className="text-md font-bold ">9.2%</h3>
                  </span>
                </h1>
                <h2 className="text-lg font-medium text-gray-500">
                  Total Solutions
                </h2>
              </div>

              <div className="bg-white w-4/12 border shadow-sm border-gray-300 rounded-2xl py-3 px-4 flex-cols justify-center items-center">
                <h1 className="text-3xl font-semibold text-gray-700 flex gap-3 items-center">
                  2,864
                  <span className="text-sm font-extrabold text-green-600 flex gap-1 justify-center items-center">
                    +<h3 className="text-md font-bold ">3.7%</h3>
                  </span>
                </h1>
                <h2 className="text-lg font-medium text-gray-500">B.Tech</h2>
              </div>

              <div className="bg-white w-4/12 border shadow-sm border-gray-300 rounded-2xl py-3 px-4 flex-cols justify-center items-center">
                <h1 className="text-3xl font-semibold text-gray-700 flex gap-3 items-center">
                  1,264
                  <span className="text-sm font-extrabold text-green-600 flex gap-1 justify-center items-center">
                    +<h3 className="text-md font-bold ">2.3%</h3>
                  </span>
                </h1>
                <h2 className="text-lg font-medium text-gray-500">BCA</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
