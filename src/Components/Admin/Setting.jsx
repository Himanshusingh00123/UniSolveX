import { GrUserManager } from "react-icons/gr";
import { FiSave } from "react-icons/fi";
import { useState } from "react";

const Setting = () => {
  const [bg, setBg] = useState(true);

  return (
    <div className="md:px-4 py-3 px-3 sm:gap-3 gap-1 grid">
      <div className="h-25  sm:py-4 ">
        <h1 className="sm:text-3xl text-2xl  text-gray-700 font-semibold">
          Settings
        </h1>
        <p className="text-lg text-gray-500 font-medium tracking-wide">
          Manage your account settings
        </p>
      </div>

      <div className="bg-white border border-gray-300 -mt-5 sm:mt-0 rounded-xl p-5 sm:w-7/12 h-85">
        <form className="grid gap-1 h-2/12">
          <h1 className="text-2xl text-gray-700 font-semibold flex items-center gap-2">
            <GrUserManager className="text-indigo-500" />
            Profile Settings
          </h1>
          <p className="text-sm  text-gray-400 font-medium tracking-wide">
            Update your personal information
          </p>

          <label className="text-base text-gray-800 font-semibold mt-4">
            Full Name
          </label>
          <input
            className="border border-gray-300 rounded-lg 
                      p-2 bg-gray-100 focus:outline-blue-500 focus:outline-2"
            type="text"
            placeholder="Enter Your Name"
            required
          />

          <label className="text-base text-gray-800 font-semibold mt-4">
            Email Address
          </label>
          <input
            className="border border-gray-300 rounded-lg 
                       p-2 bg-gray-100 focus:outline-blue-500 focus:outline-2"
            type="text"
            placeholder="Enter Your Email Address"
            required
          />

          <button
            onClick={() => setBg(!bg)}
            className={`${bg ? "bg-linear-to-b from-blue-500 to-blue-700" : "bg-linear-to-b from-blue-400 to-blue-600"}
             text-white font-semibold sm:w-3/12 hover:from-blue-600 hover:to-blue-800
               px-4 py-2 flex items-center justify-center gap-2 cursor-pointer rounded-lg mt-4`}
          >
            <FiSave />
            Save Changes
          </button>
        </form>
      </div>

      <div className="bg-white border border-gray-300 rounded-xl sm:mt-4 mt-2 sm:w-7/12 h-120"></div>
    </div>
  );
};

export default Setting;
