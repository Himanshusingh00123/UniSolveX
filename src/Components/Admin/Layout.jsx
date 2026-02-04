import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Content from "./Content";
import Sidetitle from "./Sidetitle";
import Academic from "./Academic";
import logo from "../../assets/images/Logo.png";

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
      icon: <i className="ri-school-line text-xl "></i>,
      link: "/admin/courses",
      name: "Course",
    },
    {
      icon: <i className="ri-git-branch-line text-xl "></i>,
      link: "/admin/branch",
      name: "Branch",
    },
    {
      icon: <i className="ri-calendar-line text-xl "></i>,
      link: "/admin/semester",
      name: "Semester",
    },
    {
      icon: <i className="ri-calendar-2-line text-xl "></i>,
      link: "/admin/exam-year",
      name: "Exam Years",
    },
  ];

  const content = [
    {
      icon: <i className="ri-article-line text-xl "></i>,
      link: "/admin/question-paper",
      name: "Question Paper",
    },
    {
      icon: <i className="ri-file-text-line text-xl "></i>,
      link: "/admin/solution",
      name: "Solution",
    },
  ];

  return (
    <div className=" h-screen bg-gray-100 flex md:p-2  ">
      {/* ---------------------------------sidebar------------------------ */}

      <aside
        onClick={() => setMenu(false)}
        className={` h-full bg-linear-to-b from-[#0f172a] via-[#1e293b] to-[#020617] overflow-hidden md:rounded-lg  justify-center border
          border-gray-300 md:relative z-40 top-0 left-0 fixed ${sidebar ? "md:w-64 w-50" : "md:w-18  w-0"} transition-all duration-400 md:duration-300 overflow-y-auto  shadow-xl 
      `}
      >
        <div
          onClick={handle}
          className="md:h-15 h-13 m-2  cursor-pointer flex items-center  justify-center    border-b-2 border-gray-300"
        >
          <img src={logo} alt="Logo" className="h-full  object-cover " />
          <h1
            className={`md:text-2xl text-xl font-bold text-gray-200 -ml-3 ${sidebar ? "md:visible" : "md:invisible"}  mr-5  md:mr-3 overflow-hidden `}
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
          <i className="ri-dashboard-line md:text-2xl text-xl "></i>
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
          <i className="ri-settings-2-line text-xl "></i>
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
          <i className="ri-logout-box-r-line text-xl"></i>
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

        <div className=" md:h-19 h-15 bg-white md:rounded-lg border shadow-md border-gray-300 sticky top-0 left-0 flex justify-between items-center p-4">
          <button
            onClick={() => {
              setSidebar(!sidebar);
              setMenu(!menu);
            }}
            className="p-2 rounded-lg md:hover:bg-gray-100  cursor-pointer"
          >
            {window.innerWidth >= 768 ? (
              <i className="ri-layout-left-line text-xl text-gray-500 hover:text-black "></i>
            ) : (
              <i
                className={`ri-menu-2-line text-2xl  text-gray-600 ${menu ? "bg-gray-200 p-2 rounded-lg " : "bg-none"} hover:text-black `}
              ></i>
            )}
          </button>

          <img
            src="https://png.pngtree.com/png-vector/20220719/ourmid/pngtree-color-icon---businessman-icon-color-sign-vectorteamwork-account-admin-photo-image_37961448.jpg"
            alt="logo"
            className="md:h-11 h-9 rounded-full border-gray-300 border-2 p-1 hover:scale-105 cursor-pointer hover:border-amber-500"
          />
        </div>

        {/* --------------pages section------------------------------------- */}

        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
