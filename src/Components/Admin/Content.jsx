import { Link } from "react-router-dom";

const Content = ({ content, active, setActive, sidebar, setSidebar }) => {
  return (
    <div>
      {content.map((items, index) => (
        <Link
          to={items.link}
          key={index}
          onClick={() => {
            setActive(index + 5);
            if (window.innerWidth < 768) {
              setSidebar(false);
            }
          }}
          className={` 
         ${active === index + 5 ? "bg-slate-900 text-gray-200 shadow-lg" : "hover:bg-gray-100 text-gray-500  "}
         cursor-pointer
           md:h-11 h-9 flex items-center rounded-lg gap-2 px-3
            mx-3 my-2`}
        >
          {items.icon}
          <h1
            className={`md:text-base text-sm font-semibold ${sidebar ? "md:visible" : "md:invisible"} overflow-hidden`}
          >
            {items.name}
          </h1>
        </Link>
      ))}
    </div>
  );
};
export default Content;
