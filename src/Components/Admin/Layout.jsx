import { useState } from "react";
import { Outlet } from "react-router-dom";
import Content from "./Content";
import Sidetitle from "./Sidetitle";
import Academic from "./Academic";
const Layout = () => {
  const [sidebar, setSidebar] = useState(true);
  const [active, setActive] = useState(0);

  const academic = [
    {
      icon: <i className="ri-school-line text-xl "></i>,
      name: "Course",
    },
    {
      icon: <i className="ri-git-branch-line text-xl "></i>,
      name: "Branch",
    },
    {
      icon: <i className="ri-calendar-line text-xl "></i>,
      name: "Semester",
    },
    {
      icon: <i className="ri-calendar-2-line text-xl "></i>,
      name: "Exam Years",
    },
  ];

  const content = [
    {
      icon: <i className="ri-article-line text-xl "></i>,
      name: "Question Paper",
    },
    {
      icon: <i className="ri-file-text-line text-xl "></i>,
      name: "Solution",
    },
  ];

  return (
    <div className=" h-screen bg-gray-100 flex p-2 ">
      {/* ---------------------------------sidebar------------------------ */}

      <aside
        className={` bg-white h-full overflow-hidden rounded-lg  justify-center border  border-gray-300 relative 
      ${sidebar ? "w-64" : "w-18"} transition-all duration-300 shadow 
      `}
      >
        <div className="h-15 m-2  flex items-center  justify-center    border-b-2 border-gray-300">
          <img src="Logo.png" alt="Logo" className="h-full  object-cover " />
          <h1 className="text-2xl font-bold text-blue-600 -ml-3  mr-3 overflow-hidden ">
            UniSolve<span className="text-amber-500">X</span>
          </h1>
        </div>

        {/* ------------------------------navigation------------------------------ */}

        <div
          onClick={() => setActive(0)}
          className={` 
         ${active === 0 ? "bg-slate-900 text-gray-200 shadow-lg" : "hover:bg-gray-100 text-gray-500  "}
         cursor-pointer
           h-11  flex items-center rounded-lg gap-2 px-3
            mx-3 mt-4`}
        >
          <i className="ri-dashboard-line text-2xl "></i>
          <h1 className="text-md font-semibold overflow-hidden">Dashboard</h1>
        </div>

        <Sidetitle sidebar={sidebar} title="ACADEMIC" />

        <Academic academic={academic} active={active} setActive={setActive} />

        <Sidetitle sidebar={sidebar} title="CONTENT" />

        <Content content={content} active={active} setActive={setActive} />

        <Sidetitle sidebar={sidebar} title="SYSTEM" />

        <div
          onClick={() => setActive(7)}
          className={` 
         ${active === 7 ? "bg-slate-900 text-gray-200 shadow-lg" : "hover:bg-gray-100 text-gray-500  "}
         cursor-pointer
           h-11  flex items-center rounded-lg gap-2 px-3
            mx-3 mt-4`}
        >
          <i class="ri-settings-2-line text-xl "></i>
          <h1 className="text-md font-semibold overflow-hidden">Setting</h1>
        </div>
        <hr className="mx-2 mt-2 text-gray-400 font-bold" />

        <div className="  hover:bg-gray-100 hover:text-gray-700 text-red-500 h-11 cursor-pointer flex items-center rounded-lg gap-2 px-3  py-2 m-3">
          <i className="ri-logout-box-r-line text-xl"></i>
          <h1 className="text-md font-semibold overflow-hidden">Logout</h1>
        </div>
      </aside>

      {/* -----------------main section ---------------------*/}

      <div className="min-h-full overflow-auto  pl-2 flex-1">
        {/* --------------------------------navbar -----------------------------------*/}

        <div className=" md:h-19 h-15 bg-white rounded-lg border shadow-md border-gray-300 sticky top-0 left-0 flex justify-between items-center p-4">
          <button
            className=" p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
            onClick={() => setSidebar(!sidebar)}
          >
            <i className="ri-layout-left-line text-xl text-gray-500 hover:text-black "></i>
          </button>

          <img
            src="https://png.pngtree.com/png-vector/20220719/ourmid/pngtree-color-icon---businessman-icon-color-sign-vectorteamwork-account-admin-photo-image_37961448.jpg"
            alt="logo"
            className="h-12 rounded-full border-gray-300 border p-1 hover:scale-105 cursor-pointer"
          />
        </div>

        {/* --------------pages section------------------------------------- */}

        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
