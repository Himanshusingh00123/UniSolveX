import { useState } from "react";
import Swal from "sweetalert2";
import { FaPowerOff } from "react-icons/fa";

const Logout = () => {
  const [btnbg, setBtnBg] = useState(true);

  const loggedout = () => {
    setBtnBg(false);
    window.location.href = "/login";
  };

  return (
    <div className="sm:p-8 p-6 rounded-xl flex-col flex justify-center items-center gap-2 max-sm:-mx-7 bg-white ">
      <FaPowerOff className="text-5xl text-gray-100 bg-linear-to-b from-red-500 to-red-700 p-1.5 rounded-full shadow-md" />

      <h1 className="sm:text-base text-sm font-medium text-gray-500">
        Are you sure you want to Logout from your account? Once you logged out,
        you need to Login again.
      </h1>
      <div className="flex justify-center w-full items-center mt-3 gap-2.5">
        <button
          className="border border-gray-300 bg-green-200 text-green-800  px-4 py-2 rounded-lg hover:bg-green-100 
                             text-base font-semibold cursor-pointer block"
          type="button"
          onClick={() => Swal.close()}
        >
          Cancel
        </button>

        <button
          onClick={loggedout}
          type="button"
          className={`shadow-md 
                          ${btnbg ? "bg-linear-to-b from-red-500 to-red-700" : "bg-linear-to-b from-red-400 to-red-600"}
                           hover:from-red-600 hover:to-red-800
                          text-white font-semibold text-base px-4 py-2 flex justify-center items-center gap-2 cursor-pointer rounded-lg`}
        >
          Yes, Logout!
        </button>
      </div>
    </div>
  );
};

export default Logout;
