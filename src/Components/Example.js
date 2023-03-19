import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Card,  Accordion} from 'react-bootstrap';
import { AiOutlineFieldTime } from "react-icons/ai";
function Example({isOpen,close,course}) {
  const [show, setShow] = useState(false); 
  const {img,url,steps,name}=course;
  console.log(steps)
  return (
    <>   

        <Modal show={isOpen} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Card  style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <a href={course.url} variant="primary" className='mt-3 mb-3 btn btn-primary'>Watch a Video</a>
      {/* <Card.Body >
                { steps.map((step,index) =>
                <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey={index}>
                  <Accordion.Header >{index+1}. {step.name} <AiOutlineFieldTime style={{fontSize:'1rem'}}/>  {step.duration}</Accordion.Header>
                  <Accordion.Body>
                    {step.description}
                  </Accordion.Body>
                </Accordion.Item>               
                </Accordion>
                )
                
}
        <a href={course.url} variant="primary" className='mt-3 mb-3'>Watch a Video</a>
        
      </Card.Body> */}
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

export default Example