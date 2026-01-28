import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1 className="text-center text-5xl font-bold my-10"> hello himanshu</h1>
     <Link to="/admin">
      <button className="border p-3 items-center m-auto  justify-center hover:bg-blue-500 hover:text-white text-lg font-bold rounded-full  flex">
        Go to admin
      </button>
     </Link>
    </div>
  );
};
export default Home;
