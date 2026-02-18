const Dashboard = () => {
  return (
    <div className="md:p-2">
      <h1 className=" text-xl font-bold  justify-start m-2 text-gray-600">
        Admin Dashboard
      </h1>
      <div
        className="md:bg-white  md:h-48 sm:h-80 h-screen  md:border
                  md:shadow-sm border-gray-300 rounded-xl grid
                  xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 p-3 gap-3 "
      >
        <div className="auto-rows-fr bg-linear-to-br from-slate-900 via-slate-800 to-slate-900   cursor-pointer hover:scale-103 duration-400 transition  rounded-xl shadow-lg px-5 py-4 ">
          <h1 className="text-3xl text-gray-300 font-semibold mb-2">
            <i class="ri-school-line mr-2 text-gray-200"></i>Total Courses
          </h1>
          <h3 className="text-5xl text-gray-300 font-bold mb-4 md:mb-0">4</h3>
          <div className=" flex justify-between items-center mt-2">
            <h4 className="text-green-500 text-2xl font-semibold">
              <i class="ri-line-chart-fill mr-3"></i>8%
            </h4>
            <p className="bg-green-600 text-white font-bold px-3 py-1 text-md rounded-full flex justify-center items-center">
              Active
            </p>
          </div>
        </div>
        <div className=" bg-linear-to-br from-indigo-900 via-indigo-800 to-slate-900  cursor-pointer hover:scale-103 duration-400 transition rounded-xl shadow-lg  px-5 py-4">
          <h1 className="text-3xl text-gray-300 font-semibold mb-2">
            <i class="ri-git-fork-fill mr-2 text-gray-200"></i>
            Total Branches
          </h1>
          <h3 className="text-5xl text-gray-300 font-bold">24</h3>
          <div className=" flex justify-between items-center mt-2">
            <h4 className="text-green-400 text-2xl font-semibold">
              <i class="ri-line-chart-fill mr-3"></i>12%
            </h4>
            <p className="bg-green-600 text-white font-bold px-3 py-1 text-md rounded-full flex justify-center items-center">
              Active
            </p>
          </div>
        </div>
        <div className="bg-linear-to-br from-blue-900 via-slate-800 to-slate-900  cursor-pointer hover:scale-103 duration-400 transition rounded-xl shadow-lg  px-5 py-4">
          <h1 className="text-3xl font-semibold text-gray-300 mb-2">
            <i class="ri-article-line mr-2 text-gray-200"></i>
            Total Papers
          </h1>
          <h3 className="text-5xl font-bold text-gray-300">25</h3>
          <div className=" flex text-xl justify-end items-center mt-2 ">
            <h4 className="text-green-500 text-2xl font-semibold mr-3">
              <i class="ri-line-chart-fill mr-3"></i>29%
            </h4>
            <h3 className=" text-gray-200 font-semibold ">This Month</h3>
          </div>
        </div>
        <div className="bg-linear-to-br from-violet-900 via-slate-800 to-slate-900 cursor-pointer hover:scale-103 duration-400 transition  rounded-xl shadow-lg  px-5 py-4">
          <h1 className="text-3xl font-semibold text-gray-300 mb-2">
            <i class="ri-checkbox-line mr-2 text-gray-200"></i>
            Total Solutions
          </h1>
          <h3 className="text-5xl font-bold text-gray-300 ">22</h3>
          <div className=" flex text-xl justify-end items-center mt-2 ">
            <h4 className="text-green-500 text-2xl font-semibold mr-3">
              <i class="ri-line-chart-fill mr-3"></i>19%
            </h4>
            <h3 className=" text-gray-200 font-semibold ">This Month</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
