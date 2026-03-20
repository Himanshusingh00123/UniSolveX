import { IoMdAdd } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Addbranch from "./Addbranch";

const Branch = () => {
  const [bg, setBg] = useState(true);
  const MySwal = withReactContent(Swal);

  const [newbranch, setNewBranch] = useState([]);

  const receivedbranch = (branchdata) => {
    setNewBranch([...newbranch, branchdata]);
  };

  const addBranch = () => {
    setBg(false);
    MySwal.fire({
      width: "600px",
      background: "none",
      html: <Addbranch setBg={setBg} onSend={receivedbranch} />,
      showConfirmButton: false,
      willClose: () => setBg(true),
    });
  };

  return (
    <div className="md:p-2">
      <div className="sm:flex max-sm:flex-col  sm:justify-between items-center sm:py-3 sm:px-4 py-2 px-3">
        <h1 className="sm:text-3xl text-2xl font-semibold pb-2.5 text-gray-700">
          Manage Branches
        </h1>
        <button
          onClick={addBranch}
          className={` flex justify-center max-sm:w-full  gap-1.5 items-center px-4 py-2 
              ${bg ? "bg-linear-to-b from-blue-500 to-blue-700 text-gray-100" : "text-white  bg-linear-to-b from-blue-400 to-blue-600"}
               hover:text-white hover:from-blue-600 hover:to-blue-800
                sm:text-base text-lg  font-semibold shadow-md cursor-pointer rounded-lg`}
        >
          <IoMdAdd className="text-lg  font-bold" /> Add Branch
        </button>
      </div>

      {/* -----------------------------------------------------filter section------------------------------------------ */}

      <div className="bg-white py-3 px-4 sm:rounded-lg sm:border-2 shadow-md border-gray-300 h-full">
        <div className="sm:w-4/12 mb-4">
          <label className="text-lg text-gray-500 font-medium">Course</label>
          <select className="w-full bg-gray-100 focus:outline-blue-600 focus:outline-2 border-2 cursor-pointer border-gray-300 rounded-lg px-4 py-2 mt-1 text-base text-gray-500 font-semibold">
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
          </select>
        </div>

        {/* -----------------------------------------------branch table-------------------------------------------------------------------------- */}

        {newbranch.length > 0 ? (
          <div className="border-2  border-gray-300 rounded-xl shadow-sm px-3 overflow-x-auto">
            <table className="w-full text-center border-separate border-spacing-y-2">
              <thead className=" bg-indigo-600 text-white whitespace-nowrap">
                <th className="p-2 rounded-l-lg px-3 w-4/12 tracking-wide">
                  Branch Name
                </th>
                <th className="border-l px-3 border-gray-300 w-2/12 tracking-wide">
                  Course
                </th>
                <th className="border-l px-3 border-gray-300 tracking-wide">
                  Total Papers
                </th>
                <th className="border-l px-3 border-gray-300 tracking-wide">
                  Total Solutions
                </th>
                <th className="border-l border-gray-300 w-4/12 rounded-r-lg tracking-wide">
                  Action
                </th>
              </thead>

              <tbody className="text-gray-600 text-center text-sm sm:text-base font-semibold whitespace-nowrap">
                {newbranch.map((item, index) => (
                  <tr
                    key={index}
                    className="odd:bg-linear-to-r odd:from-gray-200 odd:to-white even:bg-white"
                  >
                    <td className=" rounded-l-lg font-bold">
                      {item.branch_name}
                    </td>
                    <td>{item.course}</td>
                    <td className="font-bold">0</td>
                    <td className="font-bold">0</td>
                    <td className="flex justify-center items-center p-1.5 text-white gap-2 rounded-r-xl">
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
                ))}

                <p className="text-xs  text-gray-500 sm:hidden mb-1">
                  ← Scroll horizontally to see more →
                </p>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="h-30 flex justify-center items-center text-lg  font-medium text-center text-gray-500 tracking-wide">
            No Branch found. Add your first Branch .
          </div>
        )}
      </div>
    </div>
  );
};

export default Branch;
