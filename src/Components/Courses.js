import React, { useState } from "react";
import { Card, Button, Accordion } from "react-bootstrap";
import { AiOutlineFieldTime } from "react-icons/ai";
import Progress from "./Progress";

import Example from "./Example";
import "./Courses.css";
const Courses = ({ courses }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [requestedCourse, setRequestedCourse] = useState("");
  console.log(courses);
  const [now, setNow] = useState(0);
  const [progressCount, setProgressCount] = useState({
    1: { count: 0, completedSteps: [] },
    2: { count: 0, completedSteps: [] },
    3: { count: 0, completedSteps: [] },
    4: { count: 0, completedSteps: [] },
  });
  function progress(id, stepindex) {
    console.log(id);
    let jagdish = progressCount[id];
    const { count, completedSteps } = jagdish;
    if (count === 100) return;
    if (completedSteps.includes(stepindex)) return;
    jagdish.count += 20;
    jagdish.completedSteps.push(stepindex);

    setProgressCount({ ...progressCount, [id]: jagdish });
  }
  function closeModal() {
    setIsModalOpen(false);
  }
  function handleShow(id) {
    console.log(id);
    console.log(courses);
    setIsModalOpen(true);
    const course = courses.find((course) => course.id === id);
    console.log(course);
    setRequestedCourse(course);
  }

  return (
    <>
      <div className="container-course">
        <Example
          isOpen={isModalOpen}
          course={requestedCourse}
          close={closeModal}
        />

        {courses.map(({ id, name, img, steps, url }) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={img} />
            <Card.Body className="text-center">
              <Card.Title>{name}</Card.Title>

              {steps.map((step, index) => (
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey={index}>
                    <Accordion.Header onClick={() => progress(id, index)}>
                      {index + 1}. {step.name}{" "}
                      <AiOutlineFieldTime style={{ fontSize: "2rem" }} />{" "}
                      {step.duration}
                    </Accordion.Header>
                    <Accordion.Body>{step.description}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              ))}

              <a
                onClick={() => handleShow(id)}
                variant="primary"
                className="mt-3 mb-3 btn btn-primary"
              >
                View Course
              </a>
              <br />
              <a
                href={url}
                variant="primary"
                className="mt-3 mb-3 btn btn-primary"
              >
                Watch a video
              </a>
              <Progress now={progressCount[id].count}></Progress>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Courses;
