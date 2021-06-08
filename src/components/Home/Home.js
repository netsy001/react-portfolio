import React from 'react'
import { Col, Image, Row } from 'react-bootstrap';
import resumeData from '../../resumeData';
import Photo from '../../images/Photo.jpg';
import '../Home/Home.css';

const Home = () => {

   console.log(resumeData);
   return (
      <section id="about">
         <Row>
            <Col sm={6}>
               <Image className="profile-pic" src={Photo} roundedCircle alt="Profile Pic"></Image></Col>

            <Col sm={5}>

               <h2>About Me</h2>
               <p>{resumeData.aboutme}</p>

                     <h2>Contact Details</h2>
                     <p className="address">
                        <span>{resumeData.name}</span>
                        <br></br>
                        <span>
                           {resumeData.address}
                        </span>
                        <br></br>
                        <span>{resumeData.website}</span>
                     </p>
                  
               
            </Col>
         </Row>
      </section >
   )
}

export default Home
