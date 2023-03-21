import "./Homepage.css";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import getintouch from "../Assets/getin-touch-button.svg";
import progress from "../Assets/progress.svg";
import mobile from "../Assets/mobile.svg";
import graduation from "../Assets/graduation.svg";
import target from "../Assets/target.svg";
import blue from "../Assets/making-reaady-bg.svg";
import Text from "./Text";
import monkey from "../Assets/monkey.svg";
function Homepage() {
  return (
    <>
      <div>
        <div className="section-1" style={{ height: "100vh", width: "100vw" }}>
          <div className="left-text1">
            <div> Transforming Indian </div>{" "}
            <div> Engineering Institutes into </div>
            <div>AI-Powered Learning Campuses</div>
            <hr className="line"></hr>
            <div className="bottom1">
              With Edwisely’s AI-Driven Hybrid Learning and Career
            </div>
            <div className="bottom"> platform for Engineering Students </div>
            <div className="getintouch">
              <Nav.Link as={Link} to="/courses">
                Start Learning <img src={getintouch} alt='start learning'></img>
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
            <img src={progress} alt="icons"></img>
            <img src={target} alt="icons"></img>
            <img src={mobile} alt="icons"></img>
            <img src={graduation} alt="icons"></img>
          </div>
        </div>
        <div className="monkey">
          <img id="monkey" src={monkey} alt='monkey'></img>
        </div>
      </div>
    </>
  );
}

export default Homepage;
