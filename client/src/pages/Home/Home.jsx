import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";


const Home = () => {
  return (
    <div className="flex h-[98vh] gap-4">
      <div className="md:w-1/6 w-2/6 border rounded p-2 flex flex-col bg-purple-400 justify-around">
        <Sidebar></Sidebar>
      </div>

      <div className="bg-blue-500 md:w-5/6 w-4/6 border rounded p-2 overflow-y-auto max-h-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;


