import { IoAddCircleSharp } from "react-icons/io5";
import Cards from "../../components/Cards";
import InputData from "../Home/InputData";
import { useState } from "react";

const AllTask = () => {

    const [inputDiv,setInputDiv] = useState("hidden")  // by default it will be hidden, after click it will be fixed
  return (
    <>
      <div>
        <div className="w-full flex justify-end px-4 py-2">
          <button onClick={()=> setInputDiv('fixed')}>
            <IoAddCircleSharp className="text-4xl text-gray-300 hover:text-gray-200 transition-all duration-300 cursor-pointer"></IoAddCircleSharp>
          </button>
        </div>
        <Cards setInputDiv={setInputDiv} home={"true"}></Cards>
      </div>
      <InputData inputDiv={inputDiv} setInputDiv={setInputDiv}></InputData>
    </>
  );
};

export default AllTask;
