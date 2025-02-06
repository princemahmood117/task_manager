import { CiHeart } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { motion } from "framer-motion";

const Cards = ({ home,setInputDiv }) => {
  const data = [
    {
      title: "Home Work for vacation",
      desc: "I have to create a slide for the project which will include PPT format. I need to show this to my supervisor of the project",
      status: "Incomplete",
    },
    {
      title: "CPP concepts",
      desc: "I need to clear basics of Cpp. Topics: Abstraction, Inheritance, Polymorphism, virtual functions etc.",
      status: "Complete",
    },
    {
      title: "Assignment",
      desc: "My assignment on 20 March. I have to complete it.",
      status: "Incomplete",
    },
    {
      title: "Projects",
      desc: "For Project I need to see tutorials of the Code Master YouTube channel.",
      status: "Incomplete",
    },
    {
      title: "Web Development work",
      desc: "For self project, I have 3 websites to develop using MERN. I will be using framer motion inside those projects",
      status: "Incomplete",
    },
  ];


  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-4">
      {data.map((items, index) => (
        <motion.div
          key={index}
          className="border bg-gray-800 rounded-sm p-3 flex flex-col justify-between shadow-lg cursor-pointer"
          initial={{ opacity: 0, y: 50 }} // Animation starts hidden and moves up
          animate={{ opacity: 1, y: 0 }} // Moves to visible position
          transition={{ duration: 0.3, delay: index * 0.28 }} // Smooth delay for each card
          //   whileHover={{ scale: 1.05 }} // Slightly enlarges on hover
        >
          <div>
            <h3 className="text-xl font-semibold">{items.title}</h3>
            <p className="text-gray-300 my-2">{items.desc}</p>
          </div>

          <div className="mt-3 w-full flex items-center">
            <button
              className={`${
                items.status === "Incomplete" ? "bg-red-400" : "bg-green-500"
              } p-2 rounded w-3/6 cursor-pointer hover:scale-105 transition-all duration-300`}
            >
              {items.status}
            </button>

            <div className="text-xl p-2 w-3/6 flex justify-around">
              <button className="cursor-pointer">
                <CiHeart />
              </button>
              <button className="cursor-pointer">
                <FaRegEdit />
              </button>
              <button className="cursor-pointer">
                <MdDeleteForever />
              </button>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Add Task Button with Animation */}

      {home === "true" && (
        <motion.button onClick={()=> setInputDiv('fixed')}
          className="flex flex-col justify-center items-center bg-gray-500 rounded border border-dashed cursor-pointer"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-gray-300 font-mono">Add Task</h2>
        </motion.button>
      )}
    </div>
  );
};

export default Cards;


