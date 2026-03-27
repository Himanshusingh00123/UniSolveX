import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";

const ResetPassword = () => {
  return (
    <div className="h-screen bg-gray-100 flex flex-col sm:gap-2 justify-center items-center">
      <div className="flex justify-center items-center">
        <img src={logo} className="h-17 w-23 -ml-7" />
        <h1 className="text-4xl text-blue-600 font-extrabold -ml-3">
          UniSolve<span className="text-amber-500">X</span>
        </h1>
      </div>
      <form
        className="bg-white gap-2 sm:p-8 p-6 flex flex-col sm:w-4/12 sm:h-7/12  w-11/12
      rounded-lg border border-gray-200 shadow-sm"
      >
        <h2 className="text-2xl font-bold">Reset your admin password</h2>
        <label className="text-base font-semibold text-slate-700 mt-4">
          Email *
        </label>
        <input
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
          className="border p-3 rounded-lg  placeholder:tracking-wide border-gray-300
           bg-gray-100 placeholder:text-lg placeholder:text-gray-400 focus:outline-blue-600 focus:outline-2"
          type="password"
          name="password"
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
