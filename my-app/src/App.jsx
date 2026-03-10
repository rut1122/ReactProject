import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { createTheme, ThemeProvider } from '@mui/material/styles'; 
import Projects from "./components/Projects";
import TasksList from "./components/TasksList";
import AddTask from "./components/AddTask";
const theme = createTheme({
  palette: {
    primary: {
      main: '#b85e5e', 
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        {/* דף כניסה */}
        <Route path="/" element={<Login />} />

        {/* דף רשימת פרויקטים */}
        <Route path="/projects" element={<Projects />} />

        {/* דף רשימת משימות של פרויקט ספציפי */}
        <Route path="/Projects/:projectId/TasksList" element={<TasksList />} />

        {/* דף הוספת משימה חדשה לפרויקט */}
        <Route path="/Projects/:projectId/AddTask" element={<AddTask />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
