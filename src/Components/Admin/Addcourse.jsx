import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Addcourse = ({ setBg, onSend, courseInputData, index }) => {
  const [btnbg, setBtnBg] = useState(true);

  const [course, setcourse] = useState(
    courseInputData || {
      course: "",
      full_title: "",
      status: "Active",
    },
  );

  const newcourse = (e) => {
    const value = e.target.value;
    const key = e.target.name;
    setcourse({
      ...course,
      [key]: value,
    });
  };

  const courseadded = (e) => {
    setBtnBg(!btnbg);
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: `${courseInputData ? "Course Updated" : "Course Added"}`,
      icon: "success",
      draggable: true,
      willClose: () => setBg(true),
    });
    onSend(course, index);
  };

  return (
    <form
      onSubmit={courseadded}
      className="sm:p-8 p-6 rounded-xl flex-col flex sm:gap-2 gap-1 max-sm:-mx-7 bg-white "
    >
      <div>
        <h1 className="text-xl font-semibold text-gray-900 text-start">
          {courseInputData ? "Update Course" : "Add New Course"}
        </h1>
        <p className="sm:text-base text-sm text-start ">
          Fill in the details to{" "}
          {courseInputData ? "update a course." : "create a new course."}
        </p>
      </div>

      <label className="text-start text-gray-800 font-medium text-base mt-4">
        Course Name *
      </label>
      <input
        onChange={newcourse}
        value={course.course}
        name="course"
        className="p-2.5 rounded-xl placeholder-gray-500  focus:outline-2 focus:outline-blue-600
       border-gray-300 border-2"
        type="text"
        placeholder="e.g., B.Tech"
        required
      />

      <label className="text-start text-gray-800 font-medium text-base mt-3">
        Full Course Title *
      </label>
      <input
        onChange={newcourse}
        value={course.full_title}
        name="full_title"
        className="p-2.5 rounded-xl placeholder-gray-400  focus:outline-2 focus:outline-blue-600
       border-gray-300 border-2"
        type="text"
        placeholder="e.g., Bachelor of Technology"
        required
      />

      <label className="text-start text-gray-800 font-medium text-base mt-3">
        Status
      </label>
      <select
        onChange={newcourse}
        value={course.status}
        name="status"
        className="p-2.5 rounded-xl placeholder-gray-400  focus:outline-2 focus:outline-blue-600
       border-gray-300 border-2 cursor-pointer"
      >
        <option
          className="sm:text-base text-xs text-gray-600 font-medium"
          value="Active"
        >
          Active
        </option>
        <option
          className="sm:text-base text-xs text-gray-600 font-medium"
          value="InActive"
        >
          InActive
        </option>
      </select>

      <div className="flex justify-end items-center mt-3 gap-2.5">
        <button
          className="border  border-gray-300 text-gray-600  px-4 py-2 rounded-lg hover:bg-gray-100 
              hover:text-gray-800 cursor-pointer block text-base font-semibold"
          type="button"
          onClick={() => Swal.close()}
        >
          Cancel
        </button>

        {courseInputData ? (
          <button
            type="submit"
            className={`shadow-md 
            ${btnbg ? "bg-linear-to-b from-orange-500 to-orange-600" : "bg-linear-to-b from-orange-400 to-orange-500"}
             hover:from-orange-600 hover:to-orange-700
            text-white font-semibold text-base px-4 py-2 flex justify-center items-center gap-2 cursor-pointer rounded-lg`}
          >
            Update Course
          </button>
        ) : (
          <button
            type="submit"
            className={`shadow-md 
            ${btnbg ? "bg-linear-to-b from-blue-500 to-blue-700" : "bg-linear-to-b from-blue-400 to-blue-600"}
             hover:from-blue-600 hover:to-blue-800
            text-white font-semibold text-base px-4 py-2 flex justify-center items-center gap-2 cursor-pointer rounded-lg`}
          >
            Add Course
          </button>
        )}
      </div>
    </form>
  );
};

export default Addcourse;
