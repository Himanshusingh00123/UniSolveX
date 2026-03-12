import { IoIosSchool } from "react-icons/io";
import { FaCodeBranch } from "react-icons/fa6";
import { IoNewspaperSharp } from "react-icons/io5";
import { BsClipboard2CheckFill } from "react-icons/bs";
import { FaChartLine, FaEdit } from "react-icons/fa";
import Chart from "react-apexcharts";
import { RiDeleteBin5Fill } from "react-icons/ri";

const Dashboard = () => {
  const lineChart = {
    series: [
      {
        name: "B.Tech",
        data: [68, 49, 28, 51, 42, 65, 102, 20, 34, 67, 21, 62],
      },
      {
        name: "BCA",
        data: [11, 24, 45, 32, 34, 41, 41, 10, 92, 31],
      },
      {
        name: "MBA",
        data: [39, 78, 41, 22, 31, 65, 33, 88, 24, 61, 52, 95],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      colors: ["#6366F1", "#10B981", "#F59E0B"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "Month",
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },
  };

  const barCharts = {
    series: [
      {
        name: "B.Tech",
        type: "column",
        data: [23, 11, 42, 27, 33, 22, 67, 51, 44, 22, 30],
      },
      {
        name: "BCA",
        type: "area",
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
      },
      {
        name: "MBA",
        type: "line",
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        stacked: false,
      },
      colors: ["#6366F1", "#10B981", "#F59E0B"],
      stroke: {
        width: [0, 2, 5],
        curve: "smooth",
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
        },
      },

      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: "light",
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100],
        },
      },
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      markers: {
        size: 0,
      },
      xaxis: {
        type: "Months",
      },
      yaxis: {
        title: {
          text: "Solutions",
        },
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " Solutions";
            }
            return y;
          },
        },
      },
    },
  };

  return (
    <div className="md:p-2 ">
      <div
        className="md:bg-white  md:h-48 sm:h-80 max-sm:min-h-screen  md:border 
                  md:shadow-sm border-gray-300 rounded-xl grid
                  xl:grid-cols-4  sm:grid-cols-2 grid-cols-1 p-3 gap-3"
      >
        <div className="auto-rows-fr  sm:h-full bg-linear-to-br from-slate-900 via-slate-800 to-slate-900   cursor-pointer md:hover:scale-103 duration-400 transition  rounded-xl shadow-lg px-5 py-4 ">
          <h1 className="text-3xl text-gray-300 font-semibold mb-2 flex gap-2  items-center">
            <IoIosSchool className="text-gray-200 text-4xl" />
            Total Courses
          </h1>
          <h3 className="text-5xl text-gray-300 font-bold mb-4 md:mb-0">4</h3>
          <div className=" flex justify-between items-center mt-2">
            <h4 className="text-green-500 text-2xl font-semibold flex items-center gap-2">
              <FaChartLine />
              8%
            </h4>
            <p className="bg-green-600 text-white font-bold px-3 py-1 text-md rounded-full flex justify-center items-center">
              Active
            </p>
          </div>
        </div>
        <div className=" bg-linear-to-br  from-indigo-900 via-indigo-800 to-slate-900  cursor-pointer md:hover:scale-103 duration-400 transition rounded-xl shadow-lg  px-5 py-4">
          <h1 className="text-3xl text-gray-300 font-semibold mb-2 flex items-center gap-2">
            <FaCodeBranch className="text-gray-200" />
            Total Branches
          </h1>
          <h3 className="text-5xl text-gray-300 font-bold">24</h3>
          <div className=" flex justify-between items-center mt-2">
            <h4 className="text-green-400 text-2xl font-semibold flex gap-2 items-center">
              <FaChartLine />
              12%
            </h4>
            <p className="bg-green-600 text-white font-bold px-3 py-1 text-md rounded-full flex justify-center items-center">
              Active
            </p>
          </div>
        </div>
        <div className=" bg-linear-to-br from-blue-900 via-slate-800 to-slate-900  cursor-pointer md:hover:scale-103 duration-400 transition rounded-xl shadow-lg  px-5 py-4">
          <h1 className="text-3xl font-semibold text-gray-300 mb-2 flex gap-2 items-center">
            <IoNewspaperSharp className=" text-gray-200" />
            Total Papers
          </h1>
          <h3 className="text-5xl font-bold text-gray-300">25</h3>
          <div className=" flex text-xl justify-end items-center mt-2 ">
            <h4 className="text-green-500 text-2xl font-semibold mr-3 flex gap-2 items-center">
              <FaChartLine />
              29%
            </h4>
            <h3 className=" text-gray-200 font-semibold ">This Month</h3>
          </div>
        </div>
        <div className=" bg-linear-to-br from-violet-900 via-slate-800 to-slate-900 cursor-pointer md:hover:scale-103 duration-400 transition  rounded-xl shadow-lg  px-5 py-4">
          <h1 className="text-3xl font-semibold text-gray-300 mb-2 flex gap-2 items-center">
            <BsClipboard2CheckFill className="text-gray-200" />
            Total Solutions
          </h1>
          <h3 className="text-5xl font-bold text-gray-300 ">22</h3>
          <div className=" flex text-xl justify-end items-center mt-2 ">
            <h4 className="text-green-500 text-2xl font-semibold mr-3 flex gap-2 items-center">
              <FaChartLine />
              19%
            </h4>
            <h3 className=" text-gray-200 font-semibold ">This Month</h3>
          </div>
        </div>
      </div>

      <div className=" sm:h-110 max:sm:min-h-screen rounded grid md:grid-cols-2 sm:pt-3 gap-3">
        {/* -------------------------------------------------------------Question chart-------------------------------------------------- */}

        <div className="sm:bg-gray-50 sm:border sm:overflow-hidden sm:border-gray-300 h-full  rounded-xl sm:shadow-sm">
          <div className=" sm:h-4/12 w-full  px-4 py-2">
            <h1 className="text-xl font-bold text-gray-700 mb-2 text-center sm:text-start">
              Papers Overview
            </h1>
            <div className="h-9/12  grid sm:grid-cols-3 sm:gap-3 gap-2">
              <div className="bg-white  border shadow-sm border-gray-300 rounded-2xl py-3 px-4 flex-cols justify-center items-center">
                <h1 className="text-3xl font-semibold text-gray-700 flex gap-3 items-center">
                  8,387
                  <span className="text-sm font-extrabold text-green-600 flex gap-1 justify-center items-center">
                    ^<h3 className="text-md font-bold ">10.6%</h3>
                  </span>
                </h1>
                <h2 className="text-lg font-medium text-gray-500">
                  Question Papers
                </h2>
              </div>

              <div className="bg-white  border shadow-sm border-gray-300 rounded-2xl py-3 px-4 flex-cols justify-center items-center">
                <h1 className="text-3xl font-semibold text-gray-700 flex gap-3 items-center">
                  4,821
                  <span className="text-sm font-extrabold text-green-600 flex gap-1 justify-center items-center">
                    +<h3 className="text-md font-bold ">7.6%</h3>
                  </span>
                </h1>
                <h2 className="text-lg font-medium text-gray-500">B.Tech</h2>
              </div>

              <div className="bg-white  border shadow-sm border-gray-300 rounded-2xl py-3 px-4 flex-cols justify-center items-center">
                <h1 className="text-3xl font-semibold text-gray-700 flex gap-3 items-center">
                  2,264
                  <span className="text-sm font-extrabold text-green-600 flex gap-1 justify-center items-center">
                    +<h3 className="text-md font-bold ">3.9%</h3>
                  </span>
                </h1>
                <h2 className="text-lg font-medium text-gray-500">BCA</h2>
              </div>
            </div>
          </div>

          <div className=" h-8/12 w-full p-2 rounded-lg ">
            <Chart
              options={lineChart.options}
              series={lineChart.series}
              type="area"
              height="100%"
            />
          </div>
        </div>

        {/*---------------------------------------------------------- Solution chart----------------------------------------------------------- */}

        <div className="sm:bg-gray-50 sm:border sm:overflow-hidden  sm:border-gray-300 h-full  rounded-xl sm:shadow-sm">
          <div className=" sm:h-4/12 w-full  px-4 py-2">
            <h1 className="text-xl font-bold text-gray-700 mb-2 text-center sm:text-start">
              Solutions Statistics
            </h1>
            <div className="h-9/12  grid sm:grid-cols-3 sm:gap-3 gap-2">
              <div className="bg-white  border shadow-sm border-gray-300 rounded-2xl py-3 px-4 flex-cols justify-center items-center">
                <h1 className="text-3xl font-semibold text-gray-700 flex gap-3 items-center">
                  4,320
                  <span className="text-sm font-extrabold text-green-600 flex gap-1 justify-center items-center">
                    ^<h3 className="text-md font-bold ">4.9%</h3>
                  </span>
                </h1>
                <h2 className="text-lg font-medium text-gray-500">
                  Total Solutions
                </h2>
              </div>

              <div className="bg-white  border shadow-sm border-gray-300 rounded-2xl py-3 px-4 flex-cols justify-center items-center">
                <h1 className="text-3xl font-semibold text-gray-700 flex gap-3 items-center">
                  2,864
                  <span className="text-sm font-extrabold text-green-600 flex gap-1 justify-center items-center">
                    +<h3 className="text-md font-bold ">3.2%</h3>
                  </span>
                </h1>
                <h2 className="text-lg font-medium text-gray-500">B.Tech</h2>
              </div>

              <div className="bg-white  border shadow-sm border-gray-300 rounded-2xl py-3 px-4 flex-cols justify-center items-center">
                <h1 className="text-3xl font-semibold text-gray-700 flex gap-3 items-center">
                  1,224
                  <span className="text-sm font-extrabold text-green-600 flex gap-1 justify-center items-center">
                    +<h3 className="text-md font-bold ">2.2%</h3>
                  </span>
                </h1>
                <h2 className="text-lg font-medium text-gray-500">BCA</h2>
              </div>
            </div>
          </div>

          <div className=" h-8/12 w-full p-2 rounded-lg">
            <Chart
              options={barCharts.options}
              series={barCharts.series}
              type="line"
              height="100%"
            />
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------Course Table------------------------------------------------------- */}

      <div className="bg-white h-full sm:rounded-xl py-3 px-4 mt-3 sm:border  border-gray-300">
        <h1 className="sm:text-xl text-lg text-center sm:text-start font-bold text-gray-700 mb-2">
          Recent Question Paper Uploads
        </h1>
        <div className="border border-gray-300 rounded-xl shadow-sm px-3 overflow-x-auto">
          <table className="w-full text-center border-separate border-spacing-y-2">
            <thead className="whitespace-nowrap bg-slate-800 text-white tracking-wide">
              <th className="p-2 px-3 rounded-l-lg  w-2/12 tracking-wide ">
                Course
              </th>
              <th className="border-l px-3 border-gray-300 tracking-wide">
                Semester
              </th>
              <th className="border-l px-3 border-gray-300 w-3/12 tracking-wide ">
                Subject
              </th>
              <th className="border-l px-3 border-gray-300 tracking-wide ">
                Uploaded On
              </th>
              <th className="border-l border-gray-300 w-4/12 tracking-wide rounded-r-lg">
                Action
              </th>
            </thead>

            <tbody className="text-gray-600 text-center text-sm sm:text-base font-semibold whitespace-nowrap">
              <tr className="odd:bg-linear-to-r odd:from-gray-200 odd:to-white even:bg-white">
                <td className=" rounded-l-lg">B.Tech</td>
                <td>5</td>
                <td className="font-bold">python</td>
                <td>04-03-2026</td>
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
                  transition-all duration-300 hover:scale-105 "
                  >
                    <RiDeleteBin5Fill />
                    Delete
                  </div>
                </td>
              </tr>
              <tr className="odd:bg-linear-to-r odd:from-gray-200 odd:to-white even:bg-white ">
                <td className=" rounded-l-lg">BCA</td>
                <td className="">3</td>
                <td className="font-bold">C++</td>
                <td className="">02-01-2026</td>
                <td className="flex justify-center items-center p-1.5 text-white gap-2">
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
                <td className=" rounded-l-lg">MBA</td>
                <td className="">1</td>
                <td className="font-bold">OOPs with Java</td>
                <td className="">15-02-2026</td>
                <td className="flex justify-center items-center p-1.5 text-white gap-2">
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

export default Dashboard;
