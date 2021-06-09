import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import resumeData from '../../resumeData';


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
                                    <p>{item.name}</p>
                                    <img src={item.imgurl} alt=""/>
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
