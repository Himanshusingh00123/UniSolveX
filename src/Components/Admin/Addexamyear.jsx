import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Addexamyear = ({ setBg, onSend, sessionInputData, index }) => {
  const [btnbg, setBtnBg] = useState(true);

  const [newsession, setNewSession] = useState(
    sessionInputData || {
      session: "",
      status: "Active",
    },
  );

  const sessionValue = (e) => {
    const value = e.target.value;
    const key = e.target.name;
    setNewSession({
      ...newsession,
      [key]: value,
    });
  };

  const sessionAdded = (e) => {
    setBtnBg(!btnbg);
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: `${sessionInputData ? "Session Updated" : "Session Added"}`,
      icon: "success",
      draggable: true,
      willClose: () => setBg(true),
    });
    onSend(newsession, index);
  };

  return (
    <form
      onSubmit={sessionAdded}
      className="sm:p-8 p-6 rounded-xl flex-col flex sm:gap-2 gap-1 max-sm:-mx-7 bg-white "
    >
      <div>
        <h1 className="text-xl font-semibold text-gray-900 text-start">
          {sessionInputData ? "Update Exam Session" : "Add New Exam Session"}
        </h1>
        <p className="sm:text-base text-sm text-start ">
          Fill in the detail to{" "}
          {sessionInputData
            ? "update a exam session. "
            : "create a new exam session."}
        </p>
      </div>

      <label className="text-start text-gray-800 font-medium text-base mt-3">
        Session *
      </label>
      <input
        onChange={sessionValue}
        value={newsession.session}
        name="session"
        className="p-2.5 rounded-xl placeholder-gray-400  focus:outline-2 focus:outline-blue-600
                 border-gray-300 border-2"
        type="number"
        min="2010"
        placeholder="e.g., 2026"
        required
      />

      <label className="text-start text-gray-800 font-medium text-base mt-3">
        Status
      </label>
      <select
        onChange={sessionValue}
        value={newsession.status}
        name="status"
        className="p-2.5 rounded-xl placeholder-gray-400  focus:outline-2 focus:outline-blue-600
       border-gray-300 border-2 cursor-pointer"
      >
        <option
          className="sm:text-base text-xs text-gray-600 font-medium"
          value="Active"
        >
          Active
        </option>
        <option
          className="sm:text-base text-xs text-gray-600 font-medium"
          value="InActive"
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

        {sessionInputData ? (
          <button
            type="submit"
            className={`shadow-md 
                      ${btnbg ? "bg-linear-to-b from-orange-500 to-orange-700" : "bg-linear-to-b from-orange-400 to-orange-600"}
                       hover:from-orange-600 hover:to-orange-800
                      text-white font-semibold text-base px-4 py-2 flex justify-center items-center gap-2 cursor-pointer rounded-lg`}
          >
            Update Session
          </button>
        ) : (
          <button
            type="submit"
            className={`shadow-md 
                      ${btnbg ? "bg-linear-to-b from-blue-500 to-blue-700" : "bg-linear-to-b from-blue-400 to-blue-600"}
                       hover:from-blue-600 hover:to-blue-800
                      text-white font-semibold text-base px-4 py-2 flex justify-center items-center gap-2 cursor-pointer rounded-lg`}
          >
            Add Session
          </button>
        )}
      </div>
    </form>
  );
};

export default Addexamyear;
