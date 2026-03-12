import { IoMdAdd } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useState } from "react";

const QuestionPaper = () => {
  const [bg, setBg] = useState(true);

  return (
    <div className="md:p-2">
      <div className="sm:flex max-sm:flex-col  sm:justify-between items-center sm:py-3 sm:px-4 py-2 px-3">
        <h1 className="sm:text-3xl text-2xl font-semibold pb-2.5 text-gray-700">
          Question Papers
        </h1>
        <button
          onClick={() => setBg(!bg)}
          className={` flex justify-center max-sm:w-full  gap-1.5 items-center px-4 py-2 
                    ${bg ? "bg-linear-to-b from-blue-500 to-blue-700 text-gray-100" : "text-white  bg-linear-to-b from-blue-400 to-blue-600"}
                     hover:text-white hover:from-blue-600 hover:to-blue-800
                      sm:text-base text-lg  font-semibold shadow-md cursor-pointer rounded-lg`}
        >
          <IoMdAdd className="text-lg  font-bold" /> Upload Paper
        </button>
      </div>

      {/* -----------------------------------------------------filter section-------------------------------------------- */}

      <div className="bg-white py-3 px-4 sm:rounded-lg sm:border-2 shadow-md border-gray-300 h-full">
        <div className="grid  sm:grid-cols-4  sm:gap-4 gap-2 mb-4">
          <div>
            <label className="text-lg text-gray-500 font-medium">Course</label>
            <select className="w-full focus:outline-blue-600 focus:outline-2 border-2 cursor-pointer border-gray-300 rounded-lg px-4 py-2 mt-1 text-base text-gray-500 font-semibold">
              <option
                className="sm:text-base text-xs text-gray-600 font-medium "
                value="all"
              >
                All Courses
              </option>
              <option
                className="sm:text-base text-xs text-gray-600 font-medium"
                value="b.tech"
              >
                B.Tech
              </option>
              <option
                className="sm:text-base text-xs text-gray-600 font-medium"
                value="bca"
              >
                BCA
              </option>
              <option
                className="sm:text-base text-xs text-gray-600 font-medium"
                value="mba"
              >
                MBA
              </option>
            </select>
          </div>
          <div>
            <label className="text-lg text-gray-500 font-medium">Branch</label>
            <select className="w-full border-2 focus:outline-blue-600 focus:outline-2 cursor-pointer border-gray-300 rounded-lg px-4 py-2 mt-1 text-base text-gray-500 font-semibold">
              <option
                className="sm:text-base text-xs text-gray-600 font-medium"
                value="all"
              >
                All Branches
              </option>
              <option
                className="sm:text-base text-xs text-gray-600 font-medium"
                value="active"
              >
                Computer Science Engineering
              </option>
              <option
                className="sm:text-base text-xs text-gray-600 font-medium"
                value="inactive"
              >
                Mechanical Engineering
              </option>
              <option
                className="sm:text-base text-xs text-gray-600 font-medium"
                value="inactive"
              >
                Electrical Engineering
              </option>
              <option
                className="sm:text-base text-xs text-gray-600 font-medium"
                value="inactive"
              >
                Civil Engineering
              </option>
              <option
                className="sm:text-base text-xs text-gray-600 font-medium"
                value="inactive"
              >
                Electronics Engineering
              </option>
            </select>
          </div>
          <div>
            <label className="text-lg text-gray-500 font-medium">
              Semester
            </label>
            <select className="w-full focus:outline-blue-600 focus:outline-2 border-2 cursor-pointer border-gray-300 rounded-lg px-4 py-2 mt-1 text-base text-gray-500 font-semibold">
              <option
                className="sm:text-base text-xs text-gray-600 font-medium "
                value="all"
              >
                All Semesters
              </option>
              <option
                className="sm:text-base text-xs text-gray-600 font-medium"
                value="b.tech"
              >
                Sem 1
              </option>
              <option
                className="sm:text-base text-xs text-gray-600 font-medium"
                value="bca"
              >
                Sem 2
              </option>
              <option
                className="sm:text-base text-xs text-gray-600 font-medium"
                value="mba"
              >
                Sem 3
              </option>
              <option
                className="sm:text-base text-xs text-gray-600 font-medium"
                value="mba"
              >
                Sem 4
              </option>
              <option
                className="sm:text-base text-xs text-gray-600 font-medium"
                value="mba"
              >
                Sem 5
              </option>
              <option
                className="sm:text-base text-xs text-gray-600 font-medium"
                value="mba"
              >
                Sem 6
              </option>
              <option
                className="sm:text-base text-xs text-gray-600 font-medium"
                value="mba"
              >
                Sem 7
              </option>
              <option
                className="sm:text-base text-xs text-gray-600 font-medium"
                value="mba"
              >
                Sem 8
              </option>
            </select>
          </div>
          <div>
            <label className="text-lg text-gray-500 font-medium">
              All Session
            </label>
            <select className="w-full focus:outline-blue-600 focus:outline-2 border-2 cursor-pointer border-gray-300 rounded-lg px-4 py-2 mt-1 text-base text-gray-500 font-semibold">
              <option
                className="sm:text-base text-xs text-gray-600 font-medium "
                value="all"
              >
                All Sessions
              </option>
              <option
                className="sm:text-base text-xs text-gray-600 font-medium"
                value="b.tech"
              >
                2024-25
              </option>
              <option
                className="sm:text-base text-xs text-gray-600 font-medium"
                value="bca"
              >
                2022-23
              </option>
              <option
                className="sm:text-base text-xs text-gray-600 font-medium"
                value="mba"
              >
                2025-26
              </option>
              <option
                className="sm:text-base text-xs text-gray-600 font-medium"
                value="mba"
              >
                2020-21
              </option>
            </select>
          </div>
        </div>

        {/* -------------------------------------------------------------------papers table------------------------------------- */}

        <div className="border-2 border-gray-300 rounded-xl shadow-sm px-3 overflow-x-auto">
          <table className="w-full text-center border-separate border-spacing-y-2">
            <thead className="text-white bg-violet-800 whitespace-nowrap">
              <th className="p-2 rounded-l-lg px-3 w-3/12  tracking-wide">
                Subject
              </th>
              <th className="border-l px-3 border-gray-300 tracking-wide">
                Course
              </th>
              <th className="border-l px-3 border-gray-300 w-2/12 tracking-wide">
                Branch
              </th>
              <th className="border-l px-3 border-gray-300 tracking-wide">
                Semester
              </th>
              <th className="border-l px-3 border-gray-300 tracking-wide">
                Year
              </th>
              <th className="border-l px-3 border-gray-300 tracking-wide">
                Solution
              </th>
              <th className="border-l border-gray-300 w-4/12 rounded-r-lg tracking-wide">
                Action
              </th>
            </thead>

            <tbody className="text-gray-600 text-center text-sm sm:text-base font-semibold whitespace-nowrap">
              <tr className="odd:bg-linear-to-r odd:from-gray-200 odd:to-white even:bg-white">
                <td className="rounded-l-lg  w-3/12 font-bold">
                  Data structure
                </td>
                <td>B.Tech</td>
                <td className="w-4/12">Computer Science Engineering</td>
                <td>Sem 3</td>
                <td className="font-bold w-2/12">2022-23</td>
                <td>Yes</td>
                <td className=" flex justify-center items-center p-1.5 text-white gap-2 rounded-r-xl">
                  <div
                    className="bg-linear-to-t from-emerald-600 to-emerald-400 
                            hover:from-emerald-700 hover:to-emerald-500
                            text-white py-1 px-3.5 shadow-md rounded-md 
                             flex justify-center items-center gap-2 cursor-pointer transition-all duration-300 hover:scale-105"
                  >
                    <FaEdit />
                    Edit
                  </div>
                  <div
                    className="bg-linear-to-t from-rose-600 to-rose-400 
                             hover:from-rose-700 hover:to-rose-500
                             text-white py-1 px-3.5 shadow-md rounded-md 
                              flex justify-center items-center gap-2 cursor-pointer transition-all duration-300 hover:scale-105"
                  >
                    <RiDeleteBin5Fill />
                    Delete
                  </div>
                </td>
              </tr>

              <tr className="odd:bg-linear-to-r odd:from-gray-200 odd:to-white even:bg-white">
                <td className="rounded-l-lg  w-3/12 font-bold">
                  Computer Networks
                </td>
                <td>B.Tech</td>
                <td className="w-4/12">Computer Science Engineering</td>
                <td>Sem 6</td>
                <td className="font-bold w-2/12">2023-24</td>
                <td>No</td>
                <td className=" flex justify-center items-center p-1.5 text-white gap-2 rounded-r-xl">
                  <div
                    className="bg-linear-to-t from-emerald-600 to-emerald-400 
                            hover:from-emerald-700 hover:to-emerald-500
                            text-white py-1 px-3.5 shadow-md rounded-md 
                             flex justify-center items-center gap-2 cursor-pointer transition-all duration-300 hover:scale-105"
                  >
                    <FaEdit />
                    Edit
                  </div>
                  <div
                    className="bg-linear-to-t from-rose-600 to-rose-400 
                             hover:from-rose-700 hover:to-rose-500
                             text-white py-1 px-3.5 shadow-md rounded-md 
                              flex justify-center items-center gap-2 cursor-pointer transition-all duration-300 hover:scale-105"
                  >
                    <RiDeleteBin5Fill />
                    Delete
                  </div>
                </td>
              </tr>

              <tr className="odd:bg-linear-to-r odd:from-gray-200 odd:to-white even:bg-white">
                <td className="rounded-l-lg  w-3/12 font-bold">Java</td>
                <td>B.Tech</td>
                <td className="w-4/12">Computer Science Engineering</td>
                <td>Sem 4</td>
                <td className="font-bold w-2/12">2022-23</td>
                <td>Yes</td>
                <td className=" flex justify-center items-center p-1.5 text-white gap-2 rounded-r-xl">
                  <div
                    className="bg-linear-to-t from-emerald-600 to-emerald-400 
                            hover:from-emerald-700 hover:to-emerald-500
                            text-white py-1 px-3.5 shadow-md rounded-md 
                             flex justify-center items-center gap-2 cursor-pointer transition-all duration-300 hover:scale-105"
                  >
                    <FaEdit />
                    Edit
                  </div>
                  <div
                    className="bg-linear-to-t from-rose-600 to-rose-400 
                             hover:from-rose-700 hover:to-rose-500
                             text-white py-1 px-3.5 shadow-md rounded-md 
                              flex justify-center items-center gap-2 cursor-pointer transition-all duration-300 hover:scale-105"
                  >
                    <RiDeleteBin5Fill />
                    Delete
                  </div>
                </td>
              </tr>

              <tr className="odd:bg-linear-to-r odd:from-gray-200 odd:to-white even:bg-white">
                <td className="rounded-l-lg  w-3/12 font-bold">
                  Machine Design
                </td>
                <td>B.Tech</td>
                <td className="w-4/12">Mechanical Engineering</td>
                <td>Sem 5</td>
                <td className="font-bold w-2/12">2022-23</td>
                <td>Yes</td>
                <td className=" flex justify-center items-center p-1.5 text-white gap-2 rounded-r-xl">
                  <div
                    className="bg-linear-to-t from-emerald-600 to-emerald-400 
                            hover:from-emerald-700 hover:to-emerald-500
                            text-white py-1 px-3.5 shadow-md rounded-md 
                             flex justify-center items-center gap-2 cursor-pointer transition-all duration-300 hover:scale-105"
                  >
                    <FaEdit />
                    Edit
                  </div>
                  <div
                    className="bg-linear-to-t from-rose-600 to-rose-400 
                             hover:from-rose-700 hover:to-rose-500
                             text-white py-1 px-3.5 shadow-md rounded-md 
                              flex justify-center items-center gap-2 cursor-pointer transition-all duration-300 hover:scale-105"
                  >
                    <RiDeleteBin5Fill />
                    Delete
                  </div>
                </td>
              </tr>

              <tr className="odd:bg-linear-to-r odd:from-gray-200 odd:to-white even:bg-white">
                <td className="rounded-l-lg  w-3/12 font-bold">
                  Signals and Systems
                </td>
                <td>B.Tech</td>
                <td className="w-4/12">Electrical Engineering</td>
                <td>Sem 4</td>
                <td className="font-bold w-2/12">2024-25</td>
                <td>No</td>
                <td className=" flex justify-center items-center p-1.5 text-white gap-2 rounded-r-xl">
                  <div
                    className="bg-linear-to-t from-emerald-600 to-emerald-400 
                            hover:from-emerald-700 hover:to-emerald-500
                            text-white py-1 px-3.5 shadow-md rounded-md 
                             flex justify-center items-center gap-2 cursor-pointer transition-all duration-300 hover:scale-105"
                  >
                    <FaEdit />
                    Edit
                  </div>
                  <div
                    className="bg-linear-to-t from-rose-600 to-rose-400 
                             hover:from-rose-700 hover:to-rose-500
                             text-white py-1 px-3.5 shadow-md rounded-md 
                              flex justify-center items-center gap-2 cursor-pointer transition-all duration-300 hover:scale-105"
                  >
                    <RiDeleteBin5Fill />
                    Delete
                  </div>
                </td>
              </tr>

              <tr className="odd:bg-linear-to-r odd:from-gray-200 odd:to-white even:bg-white">
                <td className="rounded-l-lg  w-3/12 font-bold">DBMS</td>
                <td>B.Tech</td>
                <td className="w-4/12">Computer Science Engineering</td>
                <td>Sem 5</td>
                <td className="font-bold w-2/12">2021-22</td>
                <td>Yes</td>
                <td className=" flex justify-center items-center p-1.5 text-white gap-2 rounded-r-xl">
                  <div
                    className="bg-linear-to-t from-emerald-600 to-emerald-400 
                            hover:from-emerald-700 hover:to-emerald-500
                            text-white py-1 px-3.5 shadow-md rounded-md 
                             flex justify-center items-center gap-2 cursor-pointer transition-all duration-300 hover:scale-105"
                  >
                    <FaEdit />
                    Edit
                  </div>
                  <div
                    className="bg-linear-to-t from-rose-600 to-rose-400 
                             hover:from-rose-700 hover:to-rose-500
                             text-white py-1 px-3.5 shadow-md rounded-md 
                              flex justify-center items-center gap-2 cursor-pointer transition-all duration-300 hover:scale-105"
                  >
                    <RiDeleteBin5Fill />
                    Delete
                  </div>
                </td>
              </tr>
              <p className="text-xs  text-gray-500 sm:hidden mb-1">
                ← Scroll horizontally to see more →
              </p>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default QuestionPaper;
