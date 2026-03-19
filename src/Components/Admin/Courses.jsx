import { IoMdAdd } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Addcourse from "./Addcourse";

const Courses = () => {
  const [bg, setBg] = useState(true);
  const MySwal = withReactContent(Swal);

  const [course, setCourse] = useState([]);

  const receiveData = (coursedata) => {
    setCourse([...course, coursedata]);
  };

  const addCourse = () => {
    setBg(false);
    MySwal.fire({
      width: "600px",
      background: "none",
      html: <Addcourse setBg={setBg} onSend={receiveData} />,
      showConfirmButton: false,
      willClose: () => setBg(true),
    });
  };

  return (
    <div className="md:p-2">
      <div className="sm:flex max-sm:flex-col  sm:justify-between items-center sm:py-3 sm:px-4 py-2 px-3">
        <h1 className="sm:text-3xl text-2xl font-semibold pb-2.5 text-gray-700">
          Manage Courses
        </h1>
        <button
          onClick={addCourse}
          className={` flex justify-center max-sm:w-full  gap-1.5 items-center px-4 py-2 
        ${bg ? "bg-linear-to-b from-blue-500 to-blue-700 text-gray-100" : "text-white  bg-linear-to-b from-blue-400 to-blue-600"}
         hover:text-white hover:from-blue-600 hover:to-blue-800
          sm:text-base text-lg  font-semibold shadow-md cursor-pointer rounded-lg`}
        >
          <IoMdAdd className="text-lg  font-bold" /> Add Course
        </button>
      </div>

      {/* -------------------------------------------------filter section------------------------------------------------ */}

      <div className="bg-white py-3 px-4 sm:rounded-lg sm:border-2 shadow-md border-gray-300 h-full">
        <div className="grid  sm:grid-cols-2  sm:gap-4 gap-2 mb-4">
          <div>
            <label className="text-lg text-gray-500 font-medium">Course</label>
            <select className="w-full bg-gray-100 focus:outline-blue-600 focus:outline-2 border-2 cursor-pointer border-gray-300 rounded-lg px-4 py-2 mt-1 text-base text-gray-500 font-semibold">
              <option
                className="sm:text-base text-xs text-gray-600 font-medium "
                value="all"
              >
                All Courses
              </option>
              {course.map((item, index) => (
                <option
                  key={index}
                  className="sm:text-base text-xs text-gray-600 font-medium"
                  value={item.course}
                >
                  {item.course}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-lg text-gray-500 font-medium">Status</label>
            <select className="w-full bg-gray-100 border-2 focus:outline-blue-600 focus:outline-2 cursor-pointer border-gray-300 rounded-lg px-4 py-2 mt-1 text-base text-gray-500 font-semibold">
              <option
                className="sm:text-base text-xs text-gray-600 font-medium"
                value="all"
              >
                All Status
              </option>
              <option
                className="sm:text-base text-xs text-gray-600 font-medium"
                value="active"
              >
                Active
              </option>
              <option
                className="sm:text-base text-xs text-gray-600 font-medium"
                value="inactive"
              >
                InActive
              </option>
            </select>
          </div>
        </div>

        {/* -----------------------------------------------Course Table----------------------------------------------------------------- */}

        {course.length > 0 ? (
          <div className="border-2 border-gray-300 rounded-xl shadow-sm px-3 overflow-x-auto">
            <table className="w-full text-center border-separate border-spacing-y-2">
              <thead className="bg-emerald-600 text-white  whitespace-nowrap">
                <th className="p-2 rounded-l-lg px-3 w-3/12 tracking-wide">
                  Course Name
                </th>
                <th className="border-l px-3 border-gray-300 w-4/12 tracking-wide">
                  Full Course Title
                </th>
                <th className="border-l px-3 border-gray-300  tracking-wide">
                  Status
                </th>
                <th className="border-l border-gray-300 w-3/12 rounded-r-lg tracking-wide">
                  Action
                </th>
              </thead>

              <tbody className="text-gray-600 text-center text-sm sm:text-base font-semibold whitespace-nowrap">
                {course.map((item, index) => (
                  <tr
                    key={index}
                    className="odd:bg-linear-to-r odd:from-gray-200 odd:to-white even:bg-white"
                  >
                    <td className=" rounded-l-lg font-bold">{item.course}</td>
                    <td>{item.full_title}</td>
                    <td>
                      <span
                        className={`${item.status === "Active" ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"} px-2.5 py-0.5 rounded-lg `}
                      >
                        {item.status}
                      </span>
                    </td>
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
            No courses found. Add your first course to get started.
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
