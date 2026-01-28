const Content = ({ content, active, setActive }) => {
  return (
    <div>
      {content.map((items, index) => (
        <div
          key={index}
          onClick={() => setActive(index + 5)}
          className={` 
         ${active === index + 5 ? "bg-slate-900 text-gray-200 shadow-lg" : "hover:bg-gray-100 text-gray-500  "}
         cursor-pointer
           h-11  flex items-center rounded-lg gap-2 px-3
            mx-3 my-2`}
        >
          {items.icon}
          <h1 className="text-md font-semibold overflow-hidden">
            {items.name}
          </h1>
        </div>
      ))}
    </div>
  );
};
export default Content;
