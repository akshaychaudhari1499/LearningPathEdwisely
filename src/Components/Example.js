import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Card } from "react-bootstrap";

function Example({ isOpen, close, course }) {
  const [show, setShow] = useState(false);
  const { img, url, steps, name } = course;
  console.log(steps);
  return (
    <>
      <Modal show={isOpen} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={img} />
            <a
              href={course.url}
              variant="primary"
              className="mt-3 mb-3 btn btn-primary"
            >
              Watch a Video
            </a>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
