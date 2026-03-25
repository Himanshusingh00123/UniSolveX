import { IoIosSchool } from "react-icons/io";
import { FaCodeBranch } from "react-icons/fa6";
import { IoNewspaperSharp } from "react-icons/io5";
import { BsClipboard2CheckFill } from "react-icons/bs";
import { FaChartLine, FaEdit } from "react-icons/fa";
import Chart from "react-apexcharts";

const Dashboard = () => {
  const getCourse = JSON.parse(localStorage.getItem("course")) || [];
  const getBranch = JSON.parse(localStorage.getItem("branch")) || [];
  const getPaper = JSON.parse(localStorage.getItem("question")) || [];
  const getSolution = JSON.parse(localStorage.getItem("solution")) || [];

  // --------------------------------------------------------------charts-------------------------------------------------

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

  const latestPapers = [...getPaper].reverse().slice(0, 3);

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
          <h3 className="text-5xl text-gray-300 font-bold mb-4 md:mb-0">
            {getCourse.filter((item) => item.status === "Active").length}
          </h3>
          <div className=" flex justify-between items-center mt-2">
            <h4 className="text-green-500 text-2xl font-semibold flex items-center gap-2">
              <FaChartLine />
              {getCourse.filter((item) => item.status === "Active").length > 0
                ? `${(
                    (getCourse.filter((item) => item.status === "Active")
                      .length /
                      12) *
                    100
                  ).toFixed(2)}`
                : "0"}
              %
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
          <h3 className="text-5xl text-gray-300 font-bold">
            {getBranch.length}
          </h3>
          <div className=" flex justify-between items-center mt-2">
            <h4 className="text-green-400 text-2xl font-semibold flex gap-2 items-center">
              <FaChartLine />
              {getBranch.length > 0
                ? `${((getBranch.length / 12) * 100).toFixed(2)}`
                : "0"}
              %
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
          <h3 className="text-5xl font-bold text-gray-300">
            {getPaper.length}
          </h3>
          <div className=" flex text-xl justify-end items-center mt-2 ">
            <h4 className="text-green-500 text-2xl font-semibold mr-3 flex gap-2 items-center">
              <FaChartLine />
              {getPaper.length > 0
                ? `${((getPaper.length / 30) * 100).toFixed(2)}`
                : "0"}
              %
            </h4>
            <h3 className=" text-gray-200 font-semibold ">This Month</h3>
          </div>
        </div>
        <div className=" bg-linear-to-br from-violet-900 via-slate-800 to-slate-900 cursor-pointer md:hover:scale-103 duration-400 transition  rounded-xl shadow-lg  px-5 py-4">
          <h1 className="text-3xl font-semibold text-gray-300 mb-2 flex gap-2 items-center">
            <BsClipboard2CheckFill className="text-gray-200" />
            Total Solutions
          </h1>
          <h3 className="text-5xl font-bold text-gray-300 ">
            {getSolution.length}
          </h3>
          <div className=" flex text-xl justify-end items-center mt-2 ">
            <h4 className="text-green-500 text-2xl font-semibold mr-3 flex gap-2 items-center">
              <FaChartLine />
              {getSolution.length > 0
                ? `${((getSolution.length / 30) * 100).toFixed(2)}`
                : "0"}
              %
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
                  {getPaper.length}
                  <span className="text-sm font-extrabold text-green-600 flex gap-1 justify-center items-center">
                    ^
                    <h3 className="text-md font-bold ">
                      {getPaper.length > 0
                        ? `${((getPaper.length / 12) * 100).toFixed(2)}`
                        : "0"}
                      %
                    </h3>
                  </span>
                </h1>
                <h2 className="text-lg font-medium text-gray-500">
                  Question Papers
                </h2>
              </div>

              <div className="bg-white  border shadow-sm border-gray-300 rounded-2xl py-3 px-4 flex-cols justify-center items-center">
                <h1 className="text-3xl font-semibold text-gray-700 flex gap-3 items-center">
                  {getPaper.filter((item) => item.course === "B.Tech").length}
                  <span className="text-sm font-extrabold text-green-600 flex gap-1 justify-center items-center">
                    +
                    <h3 className="text-md font-bold ">
                      {getPaper.filter((item) => item.course === "B.Tech")
                        .length > 0
                        ? `${((getPaper.filter((item) => item.course === "B.Tech").length / 12) * 100).toFixed(2)}`
                        : "0"}
                      %
                    </h3>
                  </span>
                </h1>
                <h2 className="text-lg font-medium text-gray-500">B.Tech</h2>
              </div>

              <div className="bg-white  border shadow-sm border-gray-300 rounded-2xl py-3 px-4 flex-cols justify-center items-center">
                <h1 className="text-3xl font-semibold text-gray-700 flex gap-3 items-center">
                  {getPaper.filter((item) => item.course === "BCA").length}
                  <span className="text-sm font-extrabold text-green-600 flex gap-1 justify-center items-center">
                    +
                    <h3 className="text-md font-bold ">
                      {getPaper.filter((item) => item.course === "BCA").length >
                      0
                        ? `${((getPaper.filter((item) => item.course === "BCA").length / 12) * 100).toFixed(2)}`
                        : "0"}
                      %
                    </h3>
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
                  {getSolution.length}
                  <span className="text-sm font-extrabold text-green-600 flex gap-1 justify-center items-center">
                    ^
                    <h3 className="text-md font-bold ">
                      {getSolution.length > 0
                        ? `${((getSolution.length / 12) * 100).toFixed(2)}`
                        : "0"}
                      %
                    </h3>
                  </span>
                </h1>
                <h2 className="text-lg font-medium text-gray-500">
                  Total Solutions
                </h2>
              </div>

              <div className="bg-white  border shadow-sm border-gray-300 rounded-2xl py-3 px-4 flex-cols justify-center items-center">
                <h1 className="text-3xl font-semibold text-gray-700 flex gap-3 items-center">
                  {
                    getSolution.filter((item) => item.course === "B.Tech")
                      .length
                  }
                  <span className="text-sm font-extrabold text-green-600 flex gap-1 justify-center items-center">
                    +
                    <h3 className="text-md font-bold ">
                      {getSolution.filter((item) => item.course === "B.Tech")
                        .length > 0
                        ? `${((getSolution.filter((item) => item.course === "B.Tech").length / 12) * 100).toFixed(2)}`
                        : "0"}
                      %
                    </h3>
                  </span>
                </h1>
                <h2 className="text-lg font-medium text-gray-500">B.Tech</h2>
              </div>

              <div className="bg-white  border shadow-sm border-gray-300 rounded-2xl py-3 px-4 flex-cols justify-center items-center">
                <h1 className="text-3xl font-semibold text-gray-700 flex gap-3 items-center">
                  {getSolution.filter((item) => item.course === "BCA").length}
                  <span className="text-sm font-extrabold text-green-600 flex gap-1 justify-center items-center">
                    +
                    <h3 className="text-md font-bold ">
                      {getSolution.filter((item) => item.course === "BCA")
                        .length > 0
                        ? `${((getSolution.filter((item) => item.course === "BCA").length / 12) * 100).toFixed(2)}`
                        : "0"}
                      %
                    </h3>
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
          {latestPapers.length > 0 ? (
            <table className="w-full text-center border-separate border-spacing-y-2">
              <thead className="whitespace-nowrap bg-slate-800 text-white tracking-wide">
                <th className="p-2 px-3 rounded-l-lg  w-3/12 tracking-wide ">
                  Course
                </th>
                <th className="border-l px-3 border-gray-300 w-3/12 tracking-wide ">
                  Branch
                </th>
                <th className="border-l px-3 border-gray-300 tracking-wide">
                  Semester
                </th>
                <th className="border-l px-3 border-gray-300 w-3/12 tracking-wide ">
                  Subject
                </th>
                <th className="border-l px-3 border-gray-300 w-2/12 tracking-wide rounded-r-lg">
                  Uploaded On
                </th>
              </thead>

              <tbody className="text-gray-600 text-center text-sm sm:text-base font-semibold whitespace-nowrap">
                {latestPapers.map((item, index) => (
                  <tr
                    key={index}
                    className="odd:bg-linear-to-r odd:from-gray-200 odd:to-white even:bg-white"
                  >
                    <td className=" rounded-l-lg">
                      {item.course ? `${item.course}` : "No Course"}
                    </td>
                    <td>{item.branch ? `${item.branch}` : "No Branch"}</td>
                    <td>{item.semester ? `Sem ${item.semester}` : "No Sem"}</td>
                    <td className="py-2 font-bold">{item.subject}</td>
                    <td>{item.uploadedOn}</td>
                  </tr>
                ))}

                <p className="text-xs  text-gray-500 sm:hidden mb-1">
                  ← Scroll horizontally to see more →
                </p>
              </tbody>
            </table>
          ) : (
            <div className="h-20 flex justify-center items-center text-lg  font-medium text-center text-gray-500 tracking-wide">
              No Recent Question Paper found. Add your first Question Paper .
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
