import { IoMdAdd } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Addsolution from "./Addsolution";

const Solution = () => {
  const [bg, setBg] = useState(true);
  const MySwal = withReactContent(Swal);
  let date = new Date();

  const getcourse = JSON.parse(localStorage.getItem("course")) || [];
  const getbranch = JSON.parse(localStorage.getItem("branch")) || [];
  const getsemester = JSON.parse(localStorage.getItem("semester")) || [];
  const getsession = JSON.parse(localStorage.getItem("Session")) || [];

  const [newsolution, setNewSolution] = useState(() => {
    try {
      const getsolution = JSON.parse(localStorage.getItem("solution"));
      return getsolution ? getsolution : [];
    } catch (error) {
      localStorage.removeItem("solution");
    }
  });

  useEffect(() => {
    localStorage.setItem("solution", JSON.stringify(newsolution));
  }, [newsolution]);

  const receivedSolution = (solutionData) => {
    setNewSolution([...newsolution, solutionData]);
  };

  const addSolution = () => {
    setBg(false);
    MySwal.fire({
      width: "600px",
      background: "none",
      html: <Addsolution setBg={setBg} onSend={receivedSolution} />,
      showConfirmButton: false,
      willClose: () => setBg(true),
    });
  };

  // ------------------------------------------------Update Solution of question Paper-----------------------------------

  const receivedUpdatedSolution = (newdata, index) => {
    const updatedNewsolution = [...newsolution];
    updatedNewsolution[index] = newdata;
    setNewSolution(updatedNewsolution);
  };

  const updatesolution = (index) => {
    MySwal.fire({
      width: "600px",
      background: "none",
      html: (
        <Addsolution
          setBg={setBg}
          onSend={receivedUpdatedSolution}
          solutionInputData={newsolution[index]}
          index={index}
        />
      ),
      showConfirmButton: false,
      willClose: () => setBg(true),
    });
  };
  // -------------------------------------------------delete solution of question paper----------------------

  const deleteSolution = (index) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updateSolution = [...newsolution];
        updateSolution.splice(index, 1);
        setNewSolution(updateSolution);
        Swal.fire({
          title: "Deleted!",
          text: "Your Solution has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="md:p-2">
      <div className="sm:flex max-sm:flex-col  sm:justify-between items-center sm:py-3 sm:px-4 py-2 px-3">
        <h1 className="sm:text-3xl text-2xl font-semibold pb-2.5 text-gray-700">
          Manage Papers Solutions
        </h1>
        <button
          onClick={addSolution}
          className={` flex justify-center max-sm:w-full  gap-1.5 items-center px-4 py-2 
                          ${bg ? "bg-linear-to-b from-blue-500 to-blue-700 text-gray-100" : "text-white  bg-linear-to-b from-blue-400 to-blue-600"}
                           hover:text-white hover:from-blue-600 hover:to-blue-800
                            sm:text-base text-lg  font-semibold shadow-md cursor-pointer rounded-lg`}
        >
          <IoMdAdd className="text-lg  font-bold" /> Upload Solution
        </button>
      </div>

      {/* -----------------------------------------------------filter section-------------------------------------------- */}

      <div className="bg-white py-3 px-4 sm:rounded-lg sm:border-2 shadow-md border-gray-300 h-full">
        <div className="grid  sm:grid-cols-4  sm:gap-4 gap-2 mb-4">
          <div>
            <label className="text-lg text-gray-500 font-medium">Course</label>
            <select className="w-full bg-gray-100 focus:outline-blue-600 focus:outline-2 border-2 cursor-pointer border-gray-300 rounded-lg px-4 py-2 mt-1 text-base text-gray-500 font-semibold">
              <option
                className="sm:text-base text-xs text-gray-600 font-medium "
                value="all"
              >
                All Courses
              </option>
              {getcourse.map((item, index) => (
                <option
                  key={index}
                  className="sm:text-base text-xs text-gray-600 font-medium "
                  value={item.course}
                >
                  {item.course}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-lg text-gray-500 font-medium">Branch</label>
            <select className="w-full bg-gray-100 border-2 focus:outline-blue-600 focus:outline-2 cursor-pointer border-gray-300 rounded-lg px-4 py-2 mt-1 text-base text-gray-500 font-semibold">
              <option
                className="sm:text-base text-xs text-gray-600 font-medium"
                value="all"
              >
                All Branches
              </option>
              {getbranch.map((item, index) => (
                <option
                  key={index}
                  className="sm:text-base text-xs text-gray-600 font-medium"
                  value={item.branch_name}
                >
                  {item.branch_name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-lg text-gray-500 font-medium">
              Semester
            </label>
            <select className="w-full bg-gray-100 focus:outline-blue-600 focus:outline-2 border-2 cursor-pointer border-gray-300 rounded-lg px-4 py-2 mt-1 text-base text-gray-500 font-semibold">
              <option
                className="sm:text-base text-xs text-gray-600 font-medium "
                value="all"
              >
                All Semesters
              </option>
              {getsemester.map((item, index) => (
                <option
                  key={index}
                  className="sm:text-base text-xs text-gray-600 font-medium"
                  value={item.semester}
                >
                  Sem {item.semester}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-lg text-gray-500 font-medium">
              All Session
            </label>
            <select className="w-full bg-gray-100 focus:outline-blue-600 focus:outline-2 border-2 cursor-pointer border-gray-300 rounded-lg px-4 py-2 mt-1 text-base text-gray-500 font-semibold">
              <option
                className="sm:text-base text-xs text-gray-600 font-medium "
                value="all"
              >
                All Sessions
              </option>
              {getsession.map((item, index) => (
                <option
                  key={index}
                  className="sm:text-base text-xs text-gray-600 font-medium"
                  value={item.session}
                >
                  {item.session}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* -------------------------------------------------------------------papers table------------------------------------- */}

        {newsolution.length > 0 ? (
          <div className="border-2 border-gray-300 rounded-xl shadow-sm px-3 overflow-x-auto">
            <table className="w-full text-center border-separate border-spacing-y-2">
              <thead className="text-white bg-pink-700  whitespace-nowrap">
                <th className="p-2 rounded-l-lg px-3 w-3/12  tracking-wide">
                  Question Paper
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
                  Uploaded On
                </th>
                <th className="border-l border-gray-300 w-4/12 rounded-r-lg tracking-wide">
                  Action
                </th>
              </thead>

              <tbody className="text-gray-600 text-center text-sm sm:text-base font-semibold whitespace-nowrap">
                {newsolution.map((item, index) => (
                  <tr
                    key={index}
                    className="odd:bg-linear-to-r odd:from-gray-200 odd:to-white even:bg-white"
                  >
                    <td className="rounded-l-lg  w-3/12 font-bold">
                      {item.quesPaper}
                    </td>
                    <td>{item.course ? `${item.course}` : "No Course"}</td>
                    <td className="w-4/12">
                      {item.branch ? `${item.branch}` : "No Branch"}
                    </td>
                    <td>{item.semester ? `Sem ${item.semester}` : "No Sem"}</td>
                    <td className="font-bold w-2/12">
                      {item.examYear
                        ? `${item.examYear} - ${parseInt(item.examYear) + 1}`
                        : "No Session"}
                    </td>
                    <td>{date.toLocaleDateString("en-IN")}</td>
                    <td className=" flex justify-center items-center p-1.5 text-white gap-2 rounded-r-xl">
                      <div
                        onClick={() => updatesolution(index)}
                        className="bg-linear-to-t from-emerald-600 to-emerald-400 
                                  hover:from-emerald-700 hover:to-emerald-500
                                  text-white py-1 px-3.5 shadow-md rounded-md 
                                   flex justify-center items-center gap-2 cursor-pointer transition-all duration-300 hover:scale-105"
                      >
                        <FaEdit />
                        Edit
                      </div>
                      <div
                        onClick={() => deleteSolution(index)}
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
                ))}

                <p className="text-xs  text-gray-500 sm:hidden mb-1">
                  ← Scroll horizontally to see more →
                </p>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="h-30 flex justify-center items-center text-lg  font-medium text-center text-gray-500 tracking-wide">
            No Solution found of any Question Paper. Add your first Solution .
          </div>
        )}
      </div>
    </div>
  );
};

export default Solution;
