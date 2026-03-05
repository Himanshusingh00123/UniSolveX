import { IoMdAdd } from "react-icons/io";

const Courses = () => {
  return (
    <div>
      <div className="sm:flex max-sm:flex-col  sm:justify-between items-center sm:py-3 sm:px-4 py-2 px-3">
        <h1 className="sm:text-3xl text-2xl font-semibold pb-2.5 text-gray-700">
          Manage Courses
        </h1>
        <button
          className="bg-[#0d6efd] flex justify-center max-sm:w-full  gap-1.5 items-center px-4 py-2  hover:bg-[#0b5ed7] hover:text-white 
          sm:text-base text-lg text-gray-100 font-semibold shadow-md cursor-pointer rounded-lg"
        >
          <IoMdAdd className="text-lg  font-bold" /> Add Course
        </button>
      </div>
    </div>
  );
};

export default Courses;
