import { RxCross2 } from "react-icons/rx";

const InputData = ({ inputDiv, setInputDiv }) => {
  return (
    <>
      <div className={`${inputDiv} fixed top-0 left-0 bg-gray-800 opacity-50 h-screen w-full`}></div>

      <div className={`${inputDiv} top-0 left-0 flex items-center justify-center h-screen w-full`}>
        <div className="md:w-3/6 w-4/6 bg-gray-900 p-4 rounded">
          <div className="flex justify-end">
            <button onClick={()=> setInputDiv('hidden')}>
              <RxCross2 className="text-xl"></RxCross2>
            </button>
          </div>
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="px-3 py-2 border bg-gray-100 text-black rounded w-full my-3"
          />
          <textarea
            name="desc"
            rows={10}
            placeholder="Description..."
            className="px-3 py-2 border bg-gray-700 text-white rounded w-full my-3"
          ></textarea>
          <button className="px-3 py-2 bg-blue-400 rounded text-black cursor-pointer hover:bg-blue-500 transition-all duration-300">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default InputData;


