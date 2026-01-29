const Academic = ({ academic, active, setActive, sidebar, setSidebar }) => {
  return (
    <div>
      {academic.map((items, index) => (
        <div
          key={index}
          onClick={() => {
            setActive(index + 1);
            if (window.innerWidth < 768) {
              setSidebar(false);
            }
          }}
          className={` 
         ${active === index + 1 ? "bg-slate-900 text-gray-200 shadow-lg" : "hover:bg-gray-100 text-gray-500  "}
         cursor-pointer
           md:h-11 h-9  flex items-center rounded-lg gap-2 px-3
            mx-3 my-2 `}
        >
          {items.icon}
          <h1 className="md:text-base text-sm font-semibold overflow-hidden">
            {items.name}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Academic;
