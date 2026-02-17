import Coursesbg from "../../assets/images/Courses.png";
import Branchbg from "../../assets/images/Branches.png";
import Paperbg from "../../assets/images/Papers.png";
import Solutionbg from "../../assets/images/Solutions.png";

const Dashboard = () => {
  return (
    <div className="">
      <h1 className=" text-xl font-bold  justify-start m-2 text-gray-600">
        Admin Dashboard
      </h1>
      <div className=" md:h-full h-screen w-full  gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-3   ">
        <div className="rounded-lg  relative overflow-hidden shadow-md  shadow-amber-400 md:hover:scale-103 ease-in transition delay-100 cursor-pointer">
          <img src={Coursesbg} alt="Coursesbg" className="object-cover " />
          <h1 className="absolute top-4 left-4 text-3xl text-white font-bold">
            <i className="ri-school-line"></i> Total Courses
          </h1>
          <h1 className="absolute md:top-4/12 top-5/12 left-5 text-5xl text-white font-bold ">
            4
          </h1>
          <h1 className="absolute bottom-3 right-3 text-gray-100 font-bold text-sm bg-green-500 rounded-full px-2 py-1 ">
            Active Course
          </h1>
        </div>

        <div className=" rounded-lg relative overflow-hidden shadow-md shadow-purple-400 md:hover:scale-103 ease-in transition delay-100 cursor-pointer">
          <img src={Branchbg} alt="Branchbg" className="object-cover" />
          <h1 className="absolute top-4 left-3  text-3xl text-white font-bold">
            <i className="ri-git-fork-fill"></i> Total Branches
          </h1>
          <h1 className="absolute md:top-4/12 top-5/12 left-5 text-5xl text-white font-bold ">
            24
          </h1>
          <h1 className="absolute bottom-3 right-3 text-gray-100 font-bold text-sm bg-green-500 rounded-full px-2 py-1 ">
            Active Branch
          </h1>
        </div>

        <div className="relative rounded-lg  overflow-hidden shadow-md shadow-red-400 md:hover:scale-103 ease-in transition delay-100 cursor-pointer">
          <img src={Paperbg} alt="Paperbg" className="Object-cover" />
          <h1 className="absolute top-4 left-3 text-3xl text-white font-bold ">
            <i class="ri-article-line"></i> Total Papers
          </h1>
          <h1 className="absolute md:top-4/12 top-5/12 left-5 text-5xl text-white font-bold ">
            28
          </h1>
        </div>

        <div className="relative rounded-lg  overflow-hidden shadow-md shadow-blue-400 md:hover:scale-103 transition ease-in delay-100 cursor-pointer">
          <img src={Solutionbg} alt="Solutionbg" className="object-cover" />
          <h1 className="absolute top-4 left-3 text-3xl text-white font-bold">
            <i class="ri-checkbox-line"></i> Total Solutions
          </h1>
          <h1 className="absolute md:top-4/12 top-5/12 left-5 text-5xl text-white font-bold ">
            22
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
