import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Addexamyear = ({ setBg }) => {
  const [btnbg, setBtnBg] = useState(true);

  const buttonBg = (e) => {
    e.preventDefault();
    setBtnBg(!btnbg);
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: "Session Added",
      icon: "success",
      draggable: true,
      willClose: () => setBg(true),
    });
  };
  return (
    <form
      onSubmit={buttonBg}
      className="sm:p-8 p-6 rounded-xl flex-col flex sm:gap-2 gap-1 max-sm:-mx-7 bg-white "
    >
      <div>
        <h1 className="text-xl font-semibold text-gray-900 text-start">
          Add New Exam Session
        </h1>
        <p className="sm:text-base text-sm text-start ">
          Fill in the detail to create a new Exam Session.
        </p>
      </div>

      <label className="text-start text-gray-800 font-medium text-base mt-3">
        Session *
      </label>
      <input
        className="p-2.5 rounded-xl placeholder-gray-400  focus:outline-2 focus:outline-blue-600
                 border-gray-300 border-2"
        type="number"
        placeholder="e.g., 2026-27"
        required
      />
      <h3 className="text-zinc-400 text-sm text-start font-medium">
        Add Session like 2026-27 .
      </h3>

      <label className="text-start text-gray-800 font-medium text-base mt-3">
        Status
      </label>
      <select
        className="p-2.5 rounded-xl placeholder-gray-400  focus:outline-2 focus:outline-blue-600
       border-gray-300 border-2 cursor-pointer"
      >
        <option
          className="sm:text-base text-xs text-gray-600 font-medium"
          value="active"
        >
          Active
        </option>
        <option
          className="sm:text-base text-xs text-gray-600 font-medium"
          value="inactive"
        >
          InActive
        </option>
      </select>

      <div className="flex justify-end items-center mt-3 gap-2.5">
        <button
          className="border  border-gray-300 text-gray-600  px-4 py-2 rounded-lg hover:bg-gray-100 
                        hover:text-gray-800 text-base font-semibold cursor-pointer block"
          type="button"
          onClick={() => Swal.close()}
        >
          Cancel
        </button>

        <button
          onClick={buttonBg}
          type="submit"
          className={`shadow-md 
                      ${btnbg ? "bg-linear-to-b from-blue-500 to-blue-700" : "bg-linear-to-b from-blue-400 to-blue-600"}
                       hover:from-blue-600 hover:to-blue-800
                      text-white font-semibold text-base px-4 py-2 flex justify-center items-center gap-2 cursor-pointer rounded-lg`}
        >
          Add Session
        </button>
      </div>
    </form>
  );
};

export default Addexamyear;
