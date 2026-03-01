import { BrowserRouter, Routes, Route } from 'react-router-dom'; // זה היה חסר
import Login from './components/Login'
import Projects from './components/Projects'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path='/projectDetails' element={<ProjectsDetails/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;