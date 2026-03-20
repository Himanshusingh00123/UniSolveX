import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Addbranch = ({ setBg, onSend }) => {
  const [btnbg, setBtnBg] = useState(true);

  const branchfield = {
    course: "B.Tech",
    branch_name: "",
  };

  const [newbranch, setNewBranch] = useState(branchfield);

  const branchvalue = (e) => {
    const value = e.target.value;
    const key = e.target.name;
    setNewBranch({
      ...newbranch,
      [key]: value,
    });
  };

  const branchadded = () => {
    setBtnBg(!btnbg);
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: "Branch Added",
      icon: "success",
      draggable: true,
      willClose: () => setBg(true),
    });
    onSend(newbranch);
  };

  return (
    <form
      onSubmit={branchadded}
      className="sm:p-8 p-6 rounded-xl flex-col flex sm:gap-2 gap-1 max-sm:-mx-7 bg-white "
    >
      <div>
        <h1 className="text-xl font-semibold text-gray-900 text-start">
          Add New Branch
        </h1>
        <p className="sm:text-base text-sm text-start ">
          Fill in the details to create a new branch.
        </p>
      </div>

      <label className="text-start text-gray-800 font-medium text-base mt-4">
        Course *
      </label>
      <select
        onChange={branchvalue}
        name="course"
        className="p-2.5 rounded-xl placeholder-gray-400  focus:outline-2 focus:outline-blue-600
           border-gray-300 border-2 cursor-pointer"
      >
        <option
          className="sm:text-base text-xs text-gray-600 font-medium"
          value="active"
        >
          B.Tech
        </option>
      </select>

      <label className="text-start text-gray-800 font-medium text-base mt-3">
        Branch Name *
      </label>
      <input
        onChange={branchvalue}
        name="branch_name"
        className="p-2.5 rounded-xl placeholder-gray-400  focus:outline-2 focus:outline-blue-600
           border-gray-300 border-2"
        type="text"
        placeholder="e.g., Computer Science & Engineering"
        required
      />

      <div className="flex justify-end items-center mt-3 gap-2.5">
        <button
          className="border  border-gray-300 text-gray-600  px-4 py-2 rounded-lg hover:bg-gray-100 
                  hover:text-gray-800 cursor-pointer block text-base font-semibold"
          type="button"
          onClick={() => Swal.close()}
        >
          Cancel
        </button>

        <button
          type="submit"
          className={`shadow-md 
                ${btnbg ? "bg-linear-to-b from-blue-500 to-blue-700" : "bg-linear-to-b from-blue-400 to-blue-600"}
                 hover:from-blue-600 hover:to-blue-800
                text-white font-semibold text-base px-4 py-2 flex justify-center items-center gap-2 cursor-pointer rounded-lg`}
        >
          Add Branch
        </button>
      </div>
    </form>
  );
};

export default Addbranch;
