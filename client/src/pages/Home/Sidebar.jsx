import { CgNotes } from "react-icons/cg";
import { FaCheckDouble } from "react-icons/fa";
import { MdLabelImportant } from "react-icons/md";
import { PiTimerDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const data = [
    {
      title: "All task",
      icon : <CgNotes></CgNotes>,
      link : '/'
    },
    {
      title: "Completed task",
      icon : <FaCheckDouble />,
      link : '/completed-tasks'
    },
    {
      title: "Incomplete task",
      icon : <PiTimerDuotone />,
      link : '/incompleted-tasks'
    },
    {
      title: "Favourite task",
      icon : <MdLabelImportant />,
      link : '/fav-tasks'
    },
  ];
  return (
    <>
      <div>
        <h2 className="text-xl font-semibold">Task manager</h2>
        <h4 className="my-1">abcd@gmail.com</h4>
        <hr />
      </div>
      <div className="">
        {data.map((item, index) => (
          <Link to={item.link} key={index} className="my-4 flex items-center md:gap-4 gap-2 hover:bg-gray-500 hover:cursor-pointer p-2 rounded  transition-all duration-300">
            {item.icon}  {item.title}
          </Link>
        ))}
      </div>

      <div>
        {/* <button className="bg-gray-600 w-full p-2 rounded-xl">Logout</button> */}
        <button to={'/login'} className="bg-gray-600 w-full p-2 mt-2 rounded-xl">
          <Link to={'/login'}>Login</Link>
        </button>
      </div>
    </>
  );
};

export default Sidebar;


