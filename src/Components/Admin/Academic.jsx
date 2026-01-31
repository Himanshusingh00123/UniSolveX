import { Link } from "react-router-dom";

const Academic = ({ academic, active, setActive, sidebar, setSidebar }) => {
  return (
    <div>
      {academic.map((items, index) => (
        <Link
          to={items.link}
          key={index}
          onClick={() => {
            setActive(index + 1);
            if (window.innerWidth < 768) {
              setSidebar(false);
            }
          }}
          className={` 
         ${active === index + 1 ? "bg-white/20 text-white shadow-lg" : "hover:bg-white/10 hover:text-white  "}
         cursor-pointer
           md:h-11 h-9  flex items-center rounded-lg gap-2 px-3 text-slate-200
            mx-3 my-2 `}
        >
          {items.icon}
          <h1
            className={`md:text-base text-sm font-semibold ${sidebar ? "md:visible" : "md:invisible"}  overflow-hidden`}
          >
            {items.name}
          </h1>
        </Link>
      ))}
    </div>
  );
};

export default Academic;
