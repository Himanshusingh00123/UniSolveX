import { IoMdAdd } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Addexamyear from "./Addexamyear";

const ExamYear = () => {
  const [bg, setBg] = useState(true);
  const MySwal = withReactContent(Swal);

  const addExamYear = () => {
    setBg(false);
    MySwal.fire({
      width: "600px",
      background: "none",
      html: <Addexamyear setBg={setBg} />,
      showConfirmButton: false,
      willClose: () => setBg(true),
    });
  };

  return (
    <div className="md:p-2">
      <div className="sm:flex max-sm:flex-col  sm:justify-between items-center sm:py-3 sm:px-4 py-2 px-3">
        <h1 className="sm:text-3xl text-2xl font-semibold pb-2.5 text-gray-700">
          Manage Exam Sessions
        </h1>
        <button
          onClick={addExamYear}
          className={` flex justify-center max-sm:w-full  gap-1.5 items-center px-4 py-2 
              ${bg ? "bg-linear-to-b from-blue-500 to-blue-700 text-gray-100" : "text-white  bg-linear-to-b from-blue-400 to-blue-600"}
               hover:text-white hover:from-blue-600 hover:to-blue-800
                sm:text-base text-lg  font-semibold shadow-md cursor-pointer rounded-lg`}
        >
          <IoMdAdd className="text-lg  font-bold" /> Add Session
        </button>
      </div>

      {/* ------------------------------------------filter section------------------------------------------------------------- */}

      <div className="bg-white py-3 px-4 sm:rounded-lg sm:border-2 shadow-md border-gray-300 h-full">
        <div className="sm:w-4/12 mb-4">
          <label className="text-lg text-gray-500 font-medium">Course</label>
          <select className="w-full bg-gray-100 focus:outline-blue-600 focus:outline-2 border-2 cursor-pointer border-gray-300 rounded-lg px-4 py-2 mt-1 text-base text-gray-500 font-semibold">
            <option
              className="sm:text-base text-xs text-gray-600 font-medium "
              value="all"
            >
              All Status
            </option>
            <option
              className="sm:text-base text-xs text-gray-600 font-medium"
              value="b.tech"
            >
              Active
            </option>
            <option
              className="sm:text-base text-xs text-gray-600 font-medium"
              value="bca"
            >
              InActive
            </option>
          </select>
        </div>

        {/* --------------------------------------------------------------------Session-table------------------------------------------- */}

        <div className="border-2 border-gray-300 rounded-xl shadow-sm px-3 overflow-x-auto">
          <table className="w-full text-center border-separate border-spacing-y-2">
            <thead className="text-white bg-purple-600 whitespace-nowrap">
              <th className="p-2 rounded-l-lg px-3 w-3/12  tracking-wide">
                Session
              </th>
              <th className="border-l px-3 border-gray-300 tracking-wide">
                Created On
              </th>
              <th className="border-l px-3 border-gray-300 w-2/12 tracking-wide">
                Status
              </th>
              <th className="border-l border-gray-300 w-4/12 rounded-r-lg tracking-wide">
                Action
              </th>
            </thead>

            <tbody className="text-gray-600 text-center text-sm sm:text-base font-semibold whitespace-nowrap">
              <tr className="odd:bg-linear-to-r odd:from-gray-200 odd:to-white even:bg-white ">
                <td className=" rounded-l-lg">
                  <span className="border-2 px-4 py-2 border-gray-400 rounded-full font-bold text-black">
                    2024-25
                  </span>
                </td>

                <td className="font-bold ">12-08-2025</td>
                <td>
                  <span className="bg-green-200 px-2.5 py-0.5 rounded-lg  text-green-700">
                    Active
                  </span>
                </td>
                <td className="py-3.5 flex justify-center items-center  text-white gap-2 rounded-r-xl">
                  <div
                    className="bg-linear-to-b from-blue-500 to-blue-700 py-1 px-3.5 hover:from-blue-600 hover:to-blue-800
                            shadow-sm rounded-md flex justify-center items-center gap-2 cursor-pointer
                            transition-all duration-300 hover:scale-105"
                  >
                    <FaEdit />
                    Edit
                  </div>
                  <div
                    className="bg-linear-to-b from-red-500 to-red-700 py-1 px-3.5 hover:from-red-600 hover:to-red-800
                            shadow-sm rounded-md flex justify-center items-center gap-1.5 cursor-pointer
                            transition-all duration-300 hover:scale-105"
                  >
                    <RiDeleteBin5Fill />
                    Delete
                  </div>
                </td>
              </tr>

              <tr className="odd:bg-linear-to-r odd:from-gray-200 odd:to-white even:bg-white ">
                <td className=" rounded-l-lg">
                  <span className="border-2 px-4 py-2 border-gray-400 rounded-full font-bold text-black">
                    2023-24
                  </span>
                </td>

                <td className="font-bold ">08-06-2025</td>
                <td>
                  <span className="bg-green-200 px-2.5 py-0.5 rounded-lg  text-green-700">
                    Active
                  </span>
                </td>
                <td className="py-3.5 flex justify-center items-center  text-white gap-2 rounded-r-xl">
                  <div
                    className="bg-linear-to-b from-blue-500 to-blue-700 py-1 px-3.5 hover:from-blue-600 hover:to-blue-800
                            shadow-sm rounded-md flex justify-center items-center gap-2 cursor-pointer
                            transition-all duration-300 hover:scale-105"
                  >
                    <FaEdit />
                    Edit
                  </div>
                  <div
                    className="bg-linear-to-b from-red-500 to-red-700 py-1 px-3.5 hover:from-red-600 hover:to-red-800
                            shadow-sm rounded-md flex justify-center items-center gap-1.5 cursor-pointer
                            transition-all duration-300 hover:scale-105"
                  >
                    <RiDeleteBin5Fill />
                    Delete
                  </div>
                </td>
              </tr>

              <tr className="odd:bg-linear-to-r odd:from-gray-200 odd:to-white even:bg-white ">
                <td className=" rounded-l-lg">
                  <span className="border-2 px-4 py-2 border-gray-400 rounded-full font-bold text-black">
                    2022-23
                  </span>
                </td>

                <td className="font-bold ">02-01-2025</td>
                <td>
                  <span className="bg-green-200 px-2.5 py-0.5 rounded-lg  text-green-700">
                    Active
                  </span>
                </td>
                <td className="py-3.5 flex justify-center items-center  text-white gap-2 rounded-r-xl">
                  <div
                    className="bg-linear-to-b from-blue-500 to-blue-700 py-1 px-3.5 hover:from-blue-600 hover:to-blue-800
                            shadow-sm rounded-md flex justify-center items-center gap-2 cursor-pointer
                            transition-all duration-300 hover:scale-105"
                  >
                    <FaEdit />
                    Edit
                  </div>
                  <div
                    className="bg-linear-to-b from-red-500 to-red-700 py-1 px-3.5 hover:from-red-600 hover:to-red-800
                            shadow-sm rounded-md flex justify-center items-center gap-1.5 cursor-pointer
                            transition-all duration-300 hover:scale-105"
                  >
                    <RiDeleteBin5Fill />
                    Delete
                  </div>
                </td>
              </tr>

              <tr className="odd:bg-linear-to-r odd:from-gray-200 odd:to-white even:bg-white ">
                <td className=" rounded-l-lg">
                  <span className="border-2 px-4 py-2 border-gray-400 rounded-full font-bold text-black">
                    2021-22
                  </span>
                </td>

                <td className="font-bold ">19-05-2024</td>
                <td>
                  <span className="bg-red-200 px-2.5 py-0.5 rounded-lg  text-red-700">
                    InActive
                  </span>
                </td>
                <td className="py-3.5 flex justify-center items-center  text-white gap-2 rounded-r-xl">
                  <div
                    className="bg-linear-to-b from-blue-500 to-blue-700 py-1 px-3.5 hover:from-blue-600 hover:to-blue-800
                            shadow-sm rounded-md flex justify-center items-center gap-2 cursor-pointer
                            transition-all duration-300 hover:scale-105"
                  >
                    <FaEdit />
                    Edit
                  </div>
                  <div
                    className="bg-linear-to-b from-red-500 to-red-700 py-1 px-3.5 hover:from-red-600 hover:to-red-800
                            shadow-sm rounded-md flex justify-center items-center gap-1.5 cursor-pointer
                            transition-all duration-300 hover:scale-105"
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

export default ExamYear;
