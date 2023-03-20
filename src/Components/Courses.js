import React, { useState } from 'react';
import { Card, Button , Accordion} from 'react-bootstrap';
import { AiOutlineFieldTime } from "react-icons/ai";
import Progress from './Progress';
import { Link } from 'react-router-dom';
import Banner from '../Assets/Banner.png';
import Example from './Example';
const Courses= ({ courses}) => {
  const[isModalOpen ,setIsModalOpen]=useState(false)
  const [requestedCourse, setRequestedCourse]=useState('')
  console.log(courses)
  const [now , setNow] = useState(0);
  const[progressCount,setProgressCount] = useState({
    '1':{count:0,
      completedSteps:[]},
    '2':{count:0,
      completedSteps:[]},
    '3':{count:0,
      completedSteps:[]},
    '4':{count:0,
      completedSteps:[]}
  });
  function progress(id,stepindex){
  console.log(id)
let jagdish=progressCount[id];
const{count,completedSteps}=jagdish;
if(count===100 ) return
if(completedSteps.includes(stepindex)) return
jagdish.count +=20;
jagdish.completedSteps.push(stepindex);

setProgressCount({...progressCount,[id]:jagdish})
  // if(progressCount[id]<100 && progressCount[id].completedSteps.includes(stepindex)){
  //   const newProgressCount={...progressCount,[id]:progressCount[id]+20}
  //   setProgressCount(newProgressCount);
  //   console.log(now)
  // }
  
  

}
function closeModal() {
  setIsModalOpen(false)
}
function handleShow(id){  
  console.log(id);
  console.log(courses);
  setIsModalOpen(true)
  const course=courses.find(course=>course.id===id)
  console.log(course)
  setRequestedCourse(course)
}


  return (
    <>
    <div className="banner"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna ac placerat vestibulum lectus mauris ultrices eros in cursus. Enim nec dui nunc mattis enim ut tellus. Mauris rhoncus aenean vel elit scelerisque mauris. Facilisi cras fermentum odio eu feugiat. Id diam vel quam elementum pulvinar. Vivamus arcu felis bibendum ut tristique et egestas. Vitae elementum curabitur vitae nunc. Pharetra pharetra massa massa ultricies mi. Dapibus ultrices in iaculis nunc sed. Faucibus ornare suspendisse sed nisi lacus. At consectetur lorem donec massa sapien faucibus et molestie. Nec ultrices dui sapien eget mi proin sed libero enim. Neque aliquam vestibulum morbi blandit cursus. Et malesuada fames ac turpis egestas. Nullam vehicula ipsum a arcu. Sit amet massa vitae tortor condimentum lacinia.

Vitae semper quis lectus nulla at volutpat diam ut. Mauris augue neque gravida in fermentum. Egestas erat imperdiet sed euismod nisi porta. Vitae sapien pellentesque habitant morbi tristique. Interdum velit euismod in pellentesque massa placerat duis. Cras sed felis eget velit. Arcu non odio euismod lacinia. Fames ac turpis egestas sed tempus. Scelerisque in dictum non consectetur. Magna fermentum iaculis eu non</div>
    <div className="container" >
       <Example isOpen={isModalOpen} course={requestedCourse} close={closeModal}/>
      
  {courses.map((({ id ,name,img,steps,url}) =>
      <Card  style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body className='text-center'>
        <Card.Title>{name}</Card.Title>

        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        {steps.map((step ,index) => (          
                <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey={index}>
                  <Accordion.Header onClick={()=>progress(id,index)}>{index+1}. {step.name} <AiOutlineFieldTime style={{fontSize:'2rem'}}/>  {step.duration}</Accordion.Header>
                  <Accordion.Body>
                    {step.description}
                  </Accordion.Body>
                </Accordion.Item>               
              </Accordion>
              ))}
       
        
        <a onClick={()=>handleShow(id)} variant="primary" className='mt-3 mb-3 btn btn-primary'>View Course</a>
        <br />
        <a href={url} variant="primary" className='mt-3 mb-3 btn btn-primary'>Watch a video</a>
        <Progress now={progressCount[id].count} ></Progress>
       
      </Card.Body>
    </Card>

      
    ))}</div></>)}
  
  
export default Courses
