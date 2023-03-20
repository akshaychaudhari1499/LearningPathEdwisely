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
import { useState, useEffect } from "react";
import Text from "./Text";
import Loader from "./Loader";
function Homepage() {
  return (
    <>
      <div>
        <div
          className="section-1"
          style={{
            backgroundImage: `url(${Banner})`,
            
            height: "100vh",
            width: "100vw",
          }}
        >
          <div className="left-text1">
            <div> Transforming Indian </div>{" "}
            <div> Engineering Institutes into </div>
            <div>AI-Powered Learning Campuses</div>
            <hr className="line"></hr>
            <div className="bottom1"> With Edwisely’s AI-Driven Hybrid Learning and Career </div>
            <div className="bottom"> platform for Engineering Students </div>
            <div className="getintouch">
             
            <Nav.Link  as={Link} to="/courses">
                Get in Touch <img src={getintouch}></img>
              </Nav.Link>
            </div>
          </div>
         
        </div>

        <div
          className="section-2"
          style={{
            backgroundImage: `url(${blue})`,
            backgroundRepeat: "no-repeat",
            height: "100vh",
            width: "100vw",
          }}
        >
          <div className="left-text2">
             <Text />
          </div>
          
          <div className="four-images">
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
