
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Projects from "./components/Projects";
import TasksList from "./components/TasksList";
import AddTask from "./components/AddTask";

function App() {
  return (
    <Router>
      <Routes>
        {/* דף כניסה */}
        <Route path="/" element={<Login />} />
        
        {/* דף רשימת פרויקטים */}
        <Route path="/projects" element={<Projects />} />

        {/* דף רשימת משימות של פרויקט ספציפי */}
        <Route path="/Projects/:ProjectId/TasksList" element={<TasksList />} />

        {/* דף הוספת משימה חדשה לפרויקט */}
        <Route path="/Projects/:ProjectId/AddTask" element={<AddTask />} />
      </Routes>
    </Router>
  );
}

export default App;