import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Content from "./Content";
import Sidetitle from "./Sidetitle";
import Academic from "./Academic";
import logo from "../../assets/images/Logo.png";
import { LuLayoutDashboard } from "react-icons/lu";
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarLeftExpand,
} from "react-icons/tb";
import { IoSchool, IoSettingsSharp } from "react-icons/io5";
import { FaCodeBranch, FaNewspaper } from "react-icons/fa6";
import { MdMenuBook, MdLogout } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { BsFileEarmarkCheckFill } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiMenuAlt1 } from "react-icons/hi";

const Layout = () => {
  const [sidebar, setSidebar] = useState(false);
  const [active, setActive] = useState(0);
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  const handle = () => {
    navigate("/admin");
    if (active > 0) {
      setActive(0);
    }
  };

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setSidebar(true);
    }
  }, []);

  const academic = [
    {
      icon: <IoSchool className="text-xl shrink-0" />,
      link: "/admin/courses",
      name: "Course",
    },
    {
      icon: <FaCodeBranch className="text-xl shrink-0" />,
      link: "/admin/branch",
      name: "Branch",
    },
    {
      icon: <MdMenuBook className="text-xl shrink-0" />,
      link: "/admin/semester",
      name: "Semester",
    },
    {
      icon: <FaCalendarAlt className="text-xl shrink-0" />,
      link: "/admin/exam-year",
      name: "Exam Years",
    },
  ];

  const content = [
    {
      icon: <FaNewspaper className="text-xl shrink-0" />,
      link: "/admin/question-paper",
      name: "Question Paper",
    },
    {
      icon: <BsFileEarmarkCheckFill className="text-xl shrink-0" />,
      link: "/admin/solution",
      name: "Solution",
    },
  ];

  return (
    <div className=" h-screen bg-gray-100 flex md:p-1  ">
      {/* ---------------------------------sidebar------------------------ */}

      <aside
        onClick={() => setMenu(false)}
        className={` h-full bg-linear-to-b from-[#0f172a] via-[#1e293b] to-[#020617] overflow-hidden md:rounded-lg  border
          border-gray-300 md:relative z-40 top-0 left-0 fixed ${sidebar ? "md:w-60 w-50" : "md:w-18  w-0"} transition-all duration-400 md:duration-300 overflow-y-auto  shadow-xl 
      `}
      >
        <div
          onClick={handle}
          className="md:h-15 h-13 m-2  cursor-pointer flex items-center  border-b-2 border-gray-300"
        >
          <img src={logo} alt="Logo" className="h-full  object-cover " />
          <h1
            className={`md:text-2xl text-xl font-bold text-gray-200 -ml-3 md:-ml-2 ${sidebar ? "md:visible" : "md:invisible"}  overflow-hidden `}
          >
            UniSolve<span className="text-amber-500">X</span>
          </h1>
        </div>

        {/* ------------------------------navigation------------------------------ */}

        <Link
          to="/admin"
          onClick={() => {
            setActive(0);
            if (window.innerWidth < 768) {
              setSidebar(false);
            }
          }}
          className={` 
         ${active === 0 ? "bg-white/20 text-white shadow-lg " : "hover:bg-white/10 hover:text-white  "}
            cursor-pointer md:h-11 h-9 flex items-center rounded-lg gap-2 px-3 text-slate-200 mx-3 md:mt-4 mt-2 `}
        >
          <LuLayoutDashboard className="md:text-2xl text-xl shrink-0" />
          <h1
            className={`md:text-base text-sm  font-semibold ${sidebar ? "md:visible" : "md:invisible"} overflow-hidden`}
          >
            Dashboard
          </h1>
        </Link>

        <Sidetitle sidebar={sidebar} title="ACADEMIC" />

        <Academic
          academic={academic}
          active={active}
          setActive={setActive}
          sidebar={sidebar}
          setSidebar={setSidebar}
        />

        <Sidetitle sidebar={sidebar} title="CONTENT" />

        <Content
          content={content}
          active={active}
          setActive={setActive}
          sidebar={sidebar}
          setSidebar={setSidebar}
        />

        <Sidetitle sidebar={sidebar} title="PROFILE" />

        <Link
          to="/admin/setting"
          onClick={() => {
            setActive(7);
            if (window.innerWidth < 768) {
              setSidebar(false);
            }
          }}
          className={` 
         ${active === 7 ? "bg-white/20 text-white shadow-lg" : "hover:bg-white/10 hover:text-white  "}
         cursor-pointer
           md:h-11 h-9 flex items-center rounded-lg gap-2 px-3 text-slate-200
            mx-3 mt-4`}
        >
          <IoSettingsSharp className="text-xl shrink-0" />
          <h1
            className={`md:text-base text-sm font-semibold ${sidebar ? "md:visible" : "md:invisible"} overflow-hidden`}
          >
            Setting
          </h1>
        </Link>
        <hr className="mx-2 mt-2 text-gray-400 font-bold" />

        <div
          onClick={() => setActive(8)}
          className={`
          ${
            active === 8
              ? " bg-red-500/30 "
              : " hover:bg-red-500/25 hover:text-red-400"
          }
          md:h-11 h-9 cursor-pointer  flex items-center 
         rounded-lg gap-2 px-3  py-2 m-3 text-red-400`}
        >
          <MdLogout className="text-xl shrink-0" />
          <h1
            className={`md:text-base text-sm font-semibold ${sidebar ? "md:visible" : "md:invisible"} overflow-hidden`}
          >
            Logout
          </h1>
        </div>
      </aside>

      {sidebar && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden z-30"
          onClick={() => setSidebar(false)}
        />
      )}

      {/* -----------------main section ---------------------*/}

      <div className="min-h-full overflow-auto  md:pl-2 flex-1 ">
        {/* --------------------------------navbar -----------------------------------*/}

        <div className=" md:h-19 h-15  bg-gray-100 md:rounded-lg border shadow-md border-gray-300 sticky top-0 left-0 flex justify-between items-center py-4 pl-3  pr-4">
          <button
            onClick={() => {
              setSidebar(!sidebar);
              setMenu(!menu);
            }}
            className="p-3 rounded-full md:hover:bg-gray-200  cursor-pointer "
          >
            {window.innerWidth >= 768 ? (
              sidebar ? (
                <TbLayoutSidebarLeftCollapse className="text-2xl text-gray-600 font-bold" />
              ) : (
                <TbLayoutSidebarLeftExpand className="text-2xl text-gray-600" />
              )
            ) : (
              <HiMenuAlt1
                className={`text-4xl  text-gray-600 p-1 
                ${menu ? "bg-gray-200 rounded-lg " : "bg-none"} 
                hover:text-black `}
              />
            )}
          </button>

          <div className="flex md:gap-4 gap-2 md:h-11 h-9 ">
            <button
              className="cursor-pointer font-serif 
            text-xl rounded-full text-gray-600
            hover:bg-gray-200 hover:text-blue-600 
             md:px-3 px-2 hover:scale-105"
            >
              <IoMdNotificationsOutline className="text-2xl " />
            </button>

            <img
              src="https://png.pngtree.com/png-vector/20220719/ourmid/pngtree-color-icon---businessman-icon-color-sign-vectorteamwork-account-admin-photo-image_37961448.jpg"
              alt="logo"
              className="rounded-full border-gray-400 border-2 p-1 hover:scale-105 cursor-pointer hover:border-indigo-400"
            />
            <div className=" justify-center flex-col items-center ml-1 md:ml-0 ">
              <h2 className="md:text-lg text-md font-semibold text-gray-700">
                Hi, Admin
              </h2>
              <h4 className="text-xs font-semibold  text-gray-500 ">
                Administrator
              </h4>
            </div>
          </div>
        </div>
        {/* --------------pages section------------------------------------- */}

        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
