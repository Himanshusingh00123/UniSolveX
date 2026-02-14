import Layout from "./Layout";

const Dashboard = () => {
  return (
    <div>
      <h1 className=" text-xl font-bold  justify-start m-2 text-gray-600">
        Admin Dashboard{" "}
      </h1>
      <div className=" md:h-50 h-screen  w-full p-3 gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        <div className="bg-yellow-600 rounded-lg text-center text-3xl text-white font-bold py-8">
          Total Course :<h2>4</h2>
        </div>
        <div className="bg-purple-600 rounded-lg text-center text-3xl text-white font-bold py-8">
          Total Branches :<h2>12</h2>
        </div>
        <div className="bg-red-600 rounded-lg text-center text-3xl text-white font-bold py-8">
          Total Papers :<h2>28</h2>
        </div>
        <div className="bg-blue-600 rounded-lg text-center text-3xl text-white font-bold py-8">
          Total Solution :<h2>25</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
