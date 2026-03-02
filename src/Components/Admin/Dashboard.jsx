import { IoIosSchool } from "react-icons/io";
import { FaCodeBranch } from "react-icons/fa6";
import { IoNewspaperSharp } from "react-icons/io5";
import { BsClipboard2CheckFill } from "react-icons/bs";
import { FaChartLine } from "react-icons/fa";
import Chart from "react-apexcharts";
import { useState } from "react";

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
          "oct",
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
        data: [28, 21, 25, 10, 38, 18, 32, 46],
      },
      {
        name: "BCA",
        type: "column",
        data: [11, 30, 21, 40, 41, 29, 65, 55],
      },
      {
        name: "MBA",
        type: "line",
        data: [20, 29, 37, 36, 44, 45, 50, 58],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        stacked: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [1, 1, 4],
      },
      title: {
        text: " Solutions ",
        align: "left",
        offsetX: 110,
      },
      xaxis: {
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
          "oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: [
        {
          seriesName: "B.Tech",
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: "#008FFB",
          },
          labels: {
            style: {
              colors: "#008FFB",
            },
          },
          title: {
            text: "B.Tech ( Solutions )",
            style: {
              color: "#008FFB",
            },
          },
          tooltip: {
            enabled: true,
          },
        },
        {
          seriesName: "BCA",
          opposite: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: "#00E396",
          },
          labels: {
            style: {
              colors: "#00E396",
            },
          },
          title: {
            text: "BCA ( Solutions )",
            style: {
              color: "#00E396",
            },
          },
        },
        {
          seriesName: "MBA",
          opposite: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: "#FEB019",
          },
          labels: {
            style: {
              colors: "#FEB019",
            },
          },
          title: {
            text: "MBA ( Solutions )",
            style: {
              color: "#FEB019",
            },
          },
        },
      ],
      tooltip: {
        fixed: {
          enabled: true,
          position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
          offsetY: 30,
          offsetX: 60,
        },
      },
      legend: {
        horizontalAlign: "left",
        offsetX: 40,
      },
    },
  };

  return (
    <div className="md:p-2 ">
      <div
        className="md:bg-white  md:h-48 sm:h-80 h-screen  md:border 
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

      <div className=" sm:h-110 h-screen rounded w-full grid md:grid-cols-2 pt-3 gap-3">
        {/* -------------------------------------------------------------Question chart-------------------------------------------------- */}

        <div className="sm:bg-gray-50 sm:border sm:overflow-hidden  sm:border-gray-300 h-full  rounded-xl sm:shadow-sm">
          <div className=" sm:h-4/12 sm:w-full w-screen px-4 py-2">
            <h1 className="text-xl font-bold text-gray-700 mb-2">
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

          <div className=" h-8/12 w-screen sm:w-full p-2 rounded-lg">
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
          <div className=" sm:h-4/12 sm:w-full w-screen px-4 py-2">
            <h1 className="text-xl font-bold text-gray-700 mb-2">
              Solutions statistics
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

          <div className=" h-8/12 w-screen sm:w-full p-2 rounded-lg">
            <Chart
              options={barCharts.options}
              series={barCharts.series}
              type="line"
              height="100%"
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-500 sm:h-200 "></div>
    </div>
  );
};

export default Dashboard;
