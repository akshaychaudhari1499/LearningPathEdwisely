import Courses from './Components/Courses';
import 'bootstrap/dist/css/bootstrap.min.css';
import NoPage from './Components/NoPage';
import Navbar from './Components/NavbarComp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import course from './data'
import StudentProfile from './Components/StudentProfile';
import Homepage from './Components/Homepage';
import loader from './Assets/loader.gif';
import {React ,useState} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [isLoading, setLoading]=useState(true);
  setTimeout(function loaded(){
    setLoading(false);
    clearTimeout();
  },3000);
 
  return (
    
    isLoading ? <div id='loader'><img  src={loader} alt='loader'></img></div>:
     <div>
     
      <BrowserRouter>
      <Navbar fixed="top"/>  
      <Routes>
        <Route path="/courses" element={<Courses courses={course}/>}>         
        </Route>
        <Route path="/LearningPathEdwisely/" element={<Homepage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/profile" element={<StudentProfile />} />
      </Routes>
    </BrowserRouter>
         
    </div>
  
   
  )
};
export default App;
