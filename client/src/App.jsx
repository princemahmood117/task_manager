import Home from "./pages/Home/Home";
import AllTask from './pages/AllTasks/AllTask'
import CompletedTask from './pages/CompletedTask/CompletedTask'
import IncompleteTask from './pages/IncompleteTask/IncompleteTask'
import FavTask from './pages/FavTask/FavTask'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Authentication/Signup";
function App() {
  return (
    <div className="bg-gray-900 text-white h-screen p-2 relative">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home></Home>}>
            <Route  index element={<AllTask></AllTask>}></Route>
            <Route  path="/completed-tasks" element={<CompletedTask></CompletedTask>}></Route>
            <Route  path="/incompleted-tasks" element={<IncompleteTask></IncompleteTask>}></Route>
            <Route  path="/fav-tasks" element={<FavTask></FavTask>}></Route>
          </Route> 

          <Route path="/signup" element={ <Signup></Signup> }></Route>      
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
