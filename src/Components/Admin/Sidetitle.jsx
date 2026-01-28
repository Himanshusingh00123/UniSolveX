const Sidetitle = ({ sidebar, title }) => {
  return (
    <div>
      {sidebar && (
        <h1 className="text-sm text-gray-500 font-semibold    mx-4 my-3 px-3">
          {title}
        </h1>
      )}
    </div>
  );
};
export default Sidetitle;
