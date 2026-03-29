import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const ResetPassword = () => {
  const resetfield = {
    email: "",
    Newpassword: "",
  };
  const [resetpass, setresetPass] = useState(resetfield);
  const getlogin = JSON.parse(localStorage.getItem("logincheck")) || {};

  const resetvalue = (e) => {
    const value = e.target.value;
    const key = e.target.name;
    setresetPass({
      ...resetpass,
      [key]: value,
    });
  };

  const changePassword = (e) => {
    e.preventDefault();
    const MySwal = withReactContent(Swal);

    if (getlogin.email === resetpass.email) {
      const updatedPass = {
        ...getlogin,
        password: resetpass.Newpassword,
      };
      localStorage.setItem("logincheck", JSON.stringify(updatedPass));

      MySwal.fire({
        title: "Password Reset Successfully",
        icon: "success",
        draggable: true,
      });
      setresetPass({
        email: "",
        Newpassword: "",
      });
    } else {
      MySwal.fire({
        title: "Oops...",
        text: "Your email is wrong!",
        icon: "error",
        draggable: true,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col sm:gap-2 justify-center items-center">
      <div className="flex justify-center items-center animate__animated animate__pulse">
        <img src={logo} className="h-17 w-auto -ml-7" />
        <h1 className="text-4xl text-blue-600 font-extrabold -ml-3">
          UniSolve<span className="text-amber-500">X</span>
        </h1>
      </div>
      <form
        onSubmit={changePassword}
        className="bg-white gap-2 sm:p-8 p-6 flex flex-col sm:w-4/12  w-11/12
      rounded-lg border border-gray-200 shadow-sm"
      >
        <h2 className="sm:text-2xl text-xl font-bold">
          Reset your admin password
        </h2>
        <label className="text-base font-semibold text-slate-700 mt-4">
          Email *
        </label>
        <input
          onChange={resetvalue}
          value={resetpass.email}
          name="email"
          className="border p-3 rounded-lg  placeholder:tracking-wide border-gray-300
           bg-gray-100 placeholder:text-lg placeholder:text-gray-400 focus:outline-blue-600 focus:outline-2"
          type="email"
          placeholder="name@admin.com"
          required
        />
        <label className="text-base font-semibold text-slate-700 mt-4">
          Password
        </label>
        <input
          onChange={resetvalue}
          value={resetpass.Newpassword}
          className="border p-3 rounded-lg  placeholder:tracking-wide border-gray-300
           bg-gray-100 placeholder:text-lg placeholder:text-gray-400 focus:outline-blue-600 focus:outline-2"
          type="password"
          name="Newpassword"
          placeholder="Set your new password"
          required
        />
        <button className="bg-emerald-600 shadow-sm p-2 rounded-lg text-lg hover:bg-emerald-700 font-semibold mt-4 text-white cursor-pointer">
          Reset password
        </button>

        <Link
          to="/login"
          className="text-lg text-center mt-1 text-blue-500  font-medium tracking-wide"
        >
          <span className="hover:border-b-2 ">Login</span>
        </Link>
      </form>
    </div>
  );
};

export default ResetPassword;
