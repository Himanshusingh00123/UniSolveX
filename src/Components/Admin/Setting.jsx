import { GrUserManager } from "react-icons/gr";
import { FiSave } from "react-icons/fi";
import { useState } from "react";
import { TbLockPassword } from "react-icons/tb";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Setting = () => {
  const [bg, setBg] = useState(true);
  const MySwal = withReactContent(Swal);

  // ----------------------------------------------------------Password setting------------------------------------------

  const getPassword = JSON.parse(localStorage.getItem("logincheck")) || {};

  const passfield = {
    currpass: "",
    newpassword: "",
    confirmpass: "",
  };

  const [newPass, setNewPass] = useState(passfield);

  const passvalue = (e) => {
    const value = e.target.value;
    const key = e.target.name;
    setNewPass({
      ...newPass,
      [key]: value,
    });
  };

  const changePassword = (e) => {
    e.preventDefault();
    setBg(!bg);
    if (newPass.newpassword === newPass.confirmpass) {
      const updatedPassword = {
        ...getPassword,
        password: newPass.confirmpass,
      };
      localStorage.setItem("logincheck", JSON.stringify(updatedPassword));

      MySwal.fire({
        title: "Password Change Successfully",
        icon: "success",
        draggable: true,
      });
    } else {
      MySwal.fire({
        title: "Oops...",
        text: "Password not match",
        icon: "error",
        draggable: true,
      });
    }
    setNewPass({
      currpass: "",
      newpassword: "",
      confirmpass: "",
    });
  };
  // ---------------------------------------------------------------profile setting---------------------------------------------

  const profilefield = {
    fullname: "",
    email: "",
  };

  const [newprofile, setNewProfile] = useState(profilefield);

  const profileValue = (e) => {
    const value = e.target.value;
    const key = e.target.name;
    setNewProfile({
      ...newprofile,
      [key]: value,
    });
  };

  const profileSetting = (e) => {
    e.preventDefault();
    setBg(!bg);
    MySwal.fire({
      title: "Profile Saved Successfully",
      icon: "success",
      draggable: true,
    });
    setNewProfile({
      fullname: "",
      email: "",
    });
  };

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

      {/* 
-------------------------------------------------------------------------profile section--------------------------------------- */}

      <div className="bg-white border border-gray-300 -mt-5 sm:mt-0 rounded-xl sm:p-6 p-5 sm:w-7/12 h-85">
        <form onSubmit={profileSetting} className="grid gap-1 h-2/12">
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
            onChange={profileValue}
            value={newprofile.fullname}
            name="fullname"
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
            onChange={profileValue}
            value={newprofile.email}
            name="email"
            className="border border-gray-300 rounded-lg 
                       p-2 bg-gray-100 focus:outline-blue-500 focus:outline-2"
            type="email"
            placeholder="Enter Your Email Address"
            required
          />

          <button
            className={`${bg ? "bg-linear-to-b from-blue-500 to-blue-700" : "bg-linear-to-b from-blue-400 to-blue-600"}
             text-white font-semibold sm:w-3/12 hover:from-blue-600 hover:to-blue-800
               px-4 py-2 flex items-center justify-center gap-2 cursor-pointer rounded-lg mt-4`}
          >
            <FiSave />
            Save Changes
          </button>
        </form>
      </div>

      {/* ----------------------------------------------------------password section------------------------------------------ */}

      <div className="bg-white border border-gray-300 rounded-xl sm:mt-4 mt-2 sm:p-6 p-5 sm:w-7/12 h-114 sm:h-110">
        <form onSubmit={changePassword} className="grid gap-1 h-2/12">
          <h1 className="text-2xl text-gray-700 font-semibold flex items-center gap-2">
            <TbLockPassword className="text-indigo-500" />
            Change Password
          </h1>
          <p className="text-sm  text-gray-400 font-medium tracking-wide">
            Update your password to keep your account secure
          </p>

          <label className="text-base text-gray-800 font-semibold mt-4">
            Current Password
          </label>
          <input
            onChange={passvalue}
            value={newPass.currpass}
            name="currpass"
            className="border border-gray-300 rounded-lg 
                    p-2 bg-gray-100 focus:outline-blue-500 focus:outline-2"
            type="password"
            placeholder="Enter Your Current Password"
            required
          />

          <label className="text-base text-gray-800 font-semibold mt-4">
            New Password
          </label>
          <input
            onChange={passvalue}
            value={newPass.newpassword}
            name="newpassword"
            className="border border-gray-300 rounded-lg 
                      p-2 bg-gray-100 focus:outline-blue-500 focus:outline-2"
            type="password"
            placeholder="Enter Your New Password"
            required
          />

          <label className="text-base text-gray-800 font-semibold mt-4">
            Confirm New Password
          </label>
          <input
            onChange={passvalue}
            value={newPass.confirmpass}
            name="confirmpass"
            className="border border-gray-300 rounded-lg 
                    p-2 bg-gray-100 focus:outline-blue-500 focus:outline-2"
            type="password"
            placeholder="Confirm Your New Password"
            required
          />

          <button
            className={`${bg ? "bg-linear-to-b from-blue-500 to-blue-700" : "bg-linear-to-b from-blue-400 to-blue-600"}
             text-white font-semibold sm:w-4/12 hover:from-blue-600 hover:to-blue-800
               px-3.5 py-2.5 flex items-center justify-center gap-2 cursor-pointer rounded-lg mt-4`}
          >
            <TbLockPassword className="text-lg" />
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default Setting;
