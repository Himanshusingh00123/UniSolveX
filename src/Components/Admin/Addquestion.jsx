import { useRef, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { IoCloudUploadOutline } from "react-icons/io5";

const Addquestion = ({ setBg, onSend, quesInputData, index }) => {
  const [btnbg, setBtnBg] = useState(true);
  const [fileName, setFileName] = useState(true);
  const fileInputRef = useRef(null);

  const getcourse = JSON.parse(localStorage.getItem("course")) || [];
  const getbranch = JSON.parse(localStorage.getItem("branch")) || [];
  const getsem = JSON.parse(localStorage.getItem("semester")) || [];
  const getsession = JSON.parse(localStorage.getItem("Session")) || [];

  const [newquestion, setNewQuestion] = useState(
    quesInputData || {
      course: "",
      branch: "",
      semester: "",
      examYear: "",
      subject: "",
      file: "",
    },
  );

  const questionValue = (e) => {
    const value = e.target.value;
    const key = e.target.name;
    setNewQuestion({
      ...newquestion,
      [key]: value,
    });
  };

  const questionAdded = () => {
    setBtnBg(!btnbg);
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: `${quesInputData ? "Question Paper Updated" : "Question Paper Added"}`,
      icon: "success",
      draggable: true,
      willClose: () => setBg(true),
    });
    onSend(newquestion, index);
  };

  const file = () => {
    fileInputRef.current.click();
    setFileName(false);
  };

  return (
    <form
      onSubmit={questionAdded}
      className="sm:p-8 p-6 rounded-xl flex-col flex sm:gap-2 gap-1 max-sm:-mx-7 bg-white "
    >
      <div>
        <h1 className="text-xl font-semibold text-gray-900 text-start">
          {quesInputData ? "Update" : "Upload"} Question Paper
        </h1>
        <p className="sm:text-base text-sm text-start ">
          Fill in the details and {quesInputData ? "update" : "upload"} the
          question paper.
        </p>
      </div>

      <div className="flex max-sm:flex-col w-full justify-center items-center mt-4 gap-3.5">
        <div className="sm:w-5/12 w-full flex flex-col ">
          <label className="text-start text-gray-800 font-medium text-base ">
            Course *
          </label>
          <select
            value={newquestion.course}
            onChange={questionValue}
            name="course"
            className="p-2.5 rounded-xl  placeholder-gray-400  focus:outline-2 focus:outline-blue-600
                 border-gray-300 border-2 cursor-pointer mt-2"
          >
            <option
              className="sm:text-base text-xs text-gray-600 font-medium"
              value=""
            >
              Choose Course
            </option>
            {getcourse.map((item, index) => (
              <option
                key={index}
                className="sm:text-base text-xs text-gray-600 font-medium"
                value={item.course}
              >
                {item.course}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col sm:w-9/12 w-full">
          <label className="text-start text-gray-800 font-medium text-base ">
            Branch *
          </label>
          <select
            value={newquestion.branch}
            onChange={questionValue}
            name="branch"
            className="p-2.5 rounded-xl  placeholder-gray-400  focus:outline-2 focus:outline-blue-600
                 border-gray-300 border-2 cursor-pointer mt-2"
          >
            <option
              className="sm:text-base text-xs text-gray-600 font-medium"
              value=""
            >
              Choose Branch
            </option>
            {getbranch.map((item, index) => (
              <option
                key={index}
                className="sm:text-base text-xs text-gray-600 font-medium"
                value={item.branch_name}
              >
                {item.branch_name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <label className="text-start text-gray-800 font-medium text-base mt-3">
        Semester *
      </label>
      <select
        value={newquestion.semester}
        onChange={questionValue}
        name="semester"
        className="p-2.5 rounded-xl placeholder-gray-400  focus:outline-2 focus:outline-blue-600
                 border-gray-300 border-2 cursor-pointer"
      >
        <option
          className="sm:text-base text-xs text-gray-600 font-medium"
          value=""
        >
          Choose Semester
        </option>

        {getsem.map((item, index) => (
          <option
            key={index}
            className="sm:text-base text-xs text-gray-600 font-medium"
            value={item.semester}
          >
            Sem {item.semester}
          </option>
        ))}
      </select>

      <div className="flex max-sm:flex-col w-full justify-center items-center mt-4 gap-3.5">
        <div className="sm:w-5/12 flex flex-col w-full">
          <label className="text-start text-gray-800 font-medium text-base ">
            Exam Year *
          </label>
          <select
            value={newquestion.examYear}
            onChange={questionValue}
            name="examYear"
            className="p-2.5 rounded-xl  placeholder-gray-400  focus:outline-2 focus:outline-blue-600
                 border-gray-300 border-2 cursor-pointer mt-2"
          >
            <option
              className="sm:text-base text-xs text-gray-600 font-medium"
              value=""
            >
              Choose Year
            </option>
            {getsession.map((item, index) => (
              <option
                key={index}
                className="sm:text-base text-xs text-gray-600 font-medium"
                value={item.session}
              >
                {item.session} - {parseInt(item.session) + 1}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col sm:w-9/12 w-full">
          <label className="text-start text-gray-800 font-medium text-base ">
            Subject Name*
          </label>
          <input
            value={newquestion.subject}
            onChange={questionValue}
            name="subject"
            className="p-2.5 rounded-xl placeholder-gray-400  focus:outline-2 focus:outline-blue-600
          border-gray-300 border-2 mt-2"
            type="text"
            placeholder="e.g., Python"
            required
          />
        </div>
      </div>

      <label className="text-start text-gray-800 font-medium text-base mt-3">
        PDF File *
      </label>
      <div className="h-40 p-2.5 rounded-xl border-2 border-dashed border-gray-300 flex flex-col justify-center items-center gap-1.5">
        <IoCloudUploadOutline className="text-4xl font-semibold text-gray-400" />
        <label className="text-base font-semibold text-gray-500">
          Click to upload
        </label>

        <input
          onChange={questionValue}
          name="file"
          type="file"
          accept=".pdf"
          ref={fileInputRef}
          className={`${fileName ? "hidden" : "visible"} 
          text-sm sm:text-base text-gray-800 font-semibold`}
          required
        />

        <button
          type="button"
          onClick={file}
          className={`border border-gray-400 text-gray-700 ${btnbg ? "bg-white" : "bg-gray-300 "}
        font-semibold rounded-lg  py-1.5 px-4 cursor-pointer hover:text-gray-800 hover:bg-gray-100`}
        >
          Choose File
        </button>
      </div>

      <div className="flex justify-end items-center mt-3 gap-2.5">
        <button
          className="border  border-gray-300 text-gray-600  px-4 py-2 rounded-lg hover:bg-gray-100 
                        hover:text-gray-800 text-base font-semibold cursor-pointer block"
          type="button"
          onClick={() => Swal.close()}
        >
          Cancel
        </button>

        {quesInputData ? (
          <button
            type="submit"
            className={`shadow-md 
                      ${btnbg ? "bg-linear-to-b from-orange-500 to-orange-700" : "bg-linear-to-b from-orange-400 to-orange-600"}
                       hover:from-orange-600 hover:to-orange-800
                      text-white font-semibold text-base px-4 py-2 flex justify-center items-center gap-2 cursor-pointer rounded-lg`}
          >
            Update Paper
          </button>
        ) : (
          <button
            type="submit"
            className={`shadow-md 
                      ${btnbg ? "bg-linear-to-b from-blue-500 to-blue-700" : "bg-linear-to-b from-blue-400 to-blue-600"}
                       hover:from-blue-600 hover:to-blue-800
                      text-white font-semibold text-base px-4 py-2 flex justify-center items-center gap-2 cursor-pointer rounded-lg`}
          >
            Upload Paper
          </button>
        )}
      </div>
    </form>
  );
};

export default Addquestion;
