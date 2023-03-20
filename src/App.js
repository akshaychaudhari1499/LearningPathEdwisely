import Courses from './Components/Courses';
import 'bootstrap/dist/css/bootstrap.min.css';
import NoPage from './Components/NoPage';
import Navbar from './Components/NavbarComp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import course from './data'
import StudentProfile from './Components/StudentProfile';
import Banner from './Assets/Banner.png'
import Homepage from './Components/Homepage';
import Loader from './Components/Loader.js';
import loader from './Assets/loader.gif';
import {React ,useState} from 'react';

function App() {
  const [isLoading, setLoading]=useState(true);
  setTimeout(function loaded(){
    setLoading(false);
    clearTimeout();
  },3000);
 
  return (
    isLoading ? <div id='loader'><img  src={loader}></img></div>:
     <div>
     
      <BrowserRouter>

      <Navbar fixed="top"/>  
      <Routes>
        <Route path="/courses" element={<Courses courses={course}/>}>         
        </Route>
        <Route path="/c4/" element={<Homepage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/profile" element={<StudentProfile />} />
      </Routes>
    </BrowserRouter>
         
    </div>
  
   
  )
};
export default App;
