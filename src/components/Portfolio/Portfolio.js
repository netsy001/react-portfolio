import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import resumeData from '../../../public/resumeData';


const Portfolio = () => {

    return (
        <div className="portfolioPage">

            <Container>
                <h3>My Recent projects</h3>
                <Row>
                    <Col sm={4}>
                        <span>{resumeData.portfolio && resumeData.portfolio.map((item) =>{
                            return (
                                <div>
                                    <p>{item.name1}</p>
                                    <Image src={item.imgurl1}></Image>
                                    <span>{item.imglink1}</span>   
                                </div>
                            )
                        })}</span>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default Portfolio
