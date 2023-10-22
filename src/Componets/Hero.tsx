import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import heroimg from '../assest/pic/Blood donation-amico (1).png'

const Hero = () => {
    return (
        <Container>
            <Row>
                <Col md={6} 
                style={{ color: 'red' }}
                className='d-flex justify-content-center align-items-center flex-column text-center'>
                    <h1 style={{fontSize:"36px"}}
                    >
                        Blood Bank</h1>
                        <h5>Let's Donate Blood</h5></Col>
                <Col md={6}>
                    <img
                        src={heroimg}
                        width='100%'
                    />
                </Col >

            </Row>
        </Container>
    );
}

export default Hero