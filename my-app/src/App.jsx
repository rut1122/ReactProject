import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Projects from "./components/Projects";
import TasksList from "./components/TasksList";
import AddTask from "./components/AddTask";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Projects" element={<Projects />} />
       <Route path="/Projects/:ProjectId/AddTask" element={<AddTask />} />
        <Route path="/Projects/:ProjectId/TasksList" element={<TasksList />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;