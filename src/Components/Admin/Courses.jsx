import { IoMdAdd } from "react-icons/io";

const Courses = () => {
  return (
    <div className="md:p-2">
      <div className="sm:flex max-sm:flex-col  sm:justify-between items-center sm:py-3 sm:px-4 py-2 px-3">
        <h1 className="sm:text-3xl text-2xl font-semibold pb-2.5 text-gray-700">
          Manage Courses
        </h1>
        <button
          className="bg-linear-to-b from-blue-500 to-blue-700 flex justify-center max-sm:w-full  gap-1.5 items-center px-4 py-2 
        hover:from-blue-600 hover:to-blue-800 hover:text-white 
          sm:text-base text-lg text-gray-100 font-semibold shadow-md cursor-pointer rounded-lg"
        >
          <IoMdAdd className="text-lg  font-bold" /> Add Course
        </button>
      </div>

      {/* -------------------------------------------------filter section------------------------------------------------ */}
      <div className="bg-white cursor-pointer sm:rounded-lg sm:border-2 shadow-md border-gray-300 h-full">
        <div className="grid  sm:grid-cols-2 px-4 py-3 sm:gap-4 gap-2">
          <div className="">
            <label className="text-lg text-gray-500 font-medium">
              Category
            </label>
            <select className="w-full focus:outline-blue-600 focus:outline-2 border-2 cursor-pointer border-gray-300 rounded-lg px-4 py-2 mt-1 text-base text-gray-500 font-semibold">
              <option
                className="sm:text-base text-xs text-gray-600 font-medium "
                value="all"
              >
                All Categories
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
            <label className="text-lg text-gray-500 font-medium">Status</label>
            <select className="w-full border-2 focus:outline-blue-600 focus:outline-2 cursor-pointer border-gray-300 rounded-lg px-4 py-2 mt-1 text-base text-gray-500 font-semibold">
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
        <div></div>
      </div>
    </div>
  );
};

export default Courses;
