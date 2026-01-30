const Sidetitle = ({ sidebar, title }) => {
  return (
    <div>
      {window.innerWidth >= 768 ? (
        sidebar && (
          <h1 className="md:text-sm text-xs text-gray-500 font-semibold   mx-4 my-3 px-3">
            {title}
          </h1>
        )
      ) : (
        <h1 className="md:text-sm text-xs text-gray-500 font-semibold   mx-4 my-3 px-3">
          {title}
        </h1>
      )}
    </div>
  );
};
export default Sidetitle;
