import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Assets/logo.svg";
import { Link } from "react-router-dom";
import Banner from "../Assets/Banner.png";
import getintouch from "../Assets/getin-touch-button.svg";
import progress from "../Assets/progress.svg";
import mobile from "../Assets/mobile.svg";
import graduation from "../Assets/graduation.svg";
import target from "../Assets/target.svg";
import blue from "../Assets/making-reaady-bg.svg";
import { useState,useEffect } from "react";

import Loader from "./Loader"
function Homepage() {
    

  return (
   <>
    <div>
   <div  className="section-1"  style={{ backgroundImage: `url(${Banner})`, backgroundRepeat:'no-repeat',height:'100vh', width:'100vw'}}  >
        
        <div  className="left-text1">
         <div> Transforming Indian </div>  <div> Engineering Institutes into </div>
         <div>AI-Powered Learning  Campuses</div>
         <hr className="line"></hr>
         <div>   With Edwisely’s AI-Driven Hybrid Learning and Career </div>
         <div> platform for Engineering Students </div>
         <div className="getintouch">  <a>
          Get in Touch <img src={getintouch}></img>
        </a></div>
       
        </div>
       
     
    </div>


    <div  className="section-2" style={{ backgroundImage:`url(${blue})`,backgroundRepeat:'no-repeat',height:'100vh',width:'100vw'}}>
        <div className="left-text2">
       

        <div>  Making your
          </div>  <div> learning simple </div>
          <hr className="line"></hr>
         <div>Tomorrow’s Indian Engineers need us Today to build a better tomorrow We are Edwisely,</div>
                    <div>  Indian Engineering Student Learning and</div>
         <div>  Career Platform  </div>
        </div>
        <div className="four-images" >
          <img src={progress}></img>
          <img src={target}></img>
          <img src={mobile}></img>
          <img src={graduation}></img>
        </div>

    </div>
    </div>

      
    </>
  );
}

export default Homepage;
