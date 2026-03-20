import { use, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Addsemester = ({ setBg, onSend }) => {
  const [btnbg, setBtnBg] = useState(true);

  const getcourse = JSON.parse(localStorage.getItem("course"));
  const getbranch = JSON.parse(localStorage.getItem("branch"));

  const semesterfield = {
    course: "",
    branch: "",
    semester: "",
  };

  const [newsem, SetNewSem] = useState(semesterfield);

  const semestervalue = (e) => {
    const value = e.target.value;
    const key = e.target.name;
    SetNewSem({
      ...newsem,
      [key]: value,
    });
  };

  
  const SemesterAdded = () => {
    setBtnBg(!btnbg);
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: "Semester Added",
      icon: "success",
      draggable: true,
      willClose: () => setBg(true),
    });
    onSend(newsem);
  };

  return (
    <form
      onSubmit={SemesterAdded}
      className="sm:p-8 p-6 rounded-xl flex-col flex sm:gap-2 gap-1 max-sm:-mx-7 bg-white "
    >
      <div>
        <h1 className="text-xl font-semibold text-gray-900 text-start">
          Add New Semester
        </h1>
        <p className="sm:text-base text-sm text-start ">
          Fill in the details to create a new Semester.
        </p>
      </div>

      <label className="text-start text-gray-800 font-medium text-base mt-4">
        Course *
      </label>
      <select
        onChange={semestervalue}
        name="course"
        className="p-2.5 rounded-xl placeholder-gray-400  focus:outline-2 focus:outline-blue-600
             border-gray-300 border-2 cursor-pointer"
      >
        <option
          className="sm:text-base text-xs text-gray-600 font-medium"
          value=""
        >
          Choose Course
        </option>
        {getcourse.map((item, index) => (
          <option
            key={index}
            className="sm:text-base text-xs text-gray-600 font-medium"
            value={item.course}
          >
            {item.course}
          </option>
        ))}
      </select>

      <label className="text-start text-gray-800 font-medium text-base mt-4">
        Branch *
      </label>
      <select
        onChange={semestervalue}
        name="branch"
        className="p-2.5 rounded-xl placeholder-gray-400  focus:outline-2 focus:outline-blue-600
             border-gray-300 border-2 cursor-pointer"
      >
        <option
          className="sm:text-base text-xs text-gray-600 font-medium"
          value=""
        >
          Choose Branch
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

      <label className="text-start text-gray-800 font-medium text-base mt-3">
        Semester *
      </label>
      <input
        onChange={semestervalue}
        name="semester"
        className="p-2.5 rounded-xl placeholder-gray-400  focus:outline-2 focus:outline-blue-600
             border-gray-300 border-2"
        type="number"
        min="1"
        max="12"
        placeholder="e.g., 1"
        required
      />

      <div className="flex justify-end items-center mt-3 gap-2.5">
        <button
          className="border  border-gray-300 text-gray-600  px-4 py-2 rounded-lg hover:bg-gray-100 
                    hover:text-gray-800 text-base font-semibold cursor-pointer block"
          type="button"
          onClick={() => Swal.close()}
        >
          Cancel
        </button>

        <button
          type="submit"
          className={`shadow-md 
                  ${btnbg ? "bg-linear-to-b from-blue-500 to-blue-700" : "bg-linear-to-b from-blue-400 to-blue-600"}
                   hover:from-blue-600 hover:to-blue-800
                  text-white font-semibold text-base px-4 py-2 flex justify-center items-center gap-2 cursor-pointer rounded-lg`}
        >
          Add Semester
        </button>
      </div>
    </form>
  );
};

export default Addsemester;
