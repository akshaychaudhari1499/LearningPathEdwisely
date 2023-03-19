import Courses from './Components/Courses';
import 'bootstrap/dist/css/bootstrap.min.css';
import NoPage from './Components/NoPage';
import Navbar from './Components/NavbarComp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import course from './data'
import StudentProfile from './Components/StudentProfile';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>  
      <Routes>
        <Route path="/" element={<Courses courses={course}/>}>         
        </Route>
        <Route path="*" element={<NoPage />} />
        <Route path="/profile" element={<StudentProfile />} />
      </Routes>
    </BrowserRouter>
         
        
    </div>
  )
};
export default App;
