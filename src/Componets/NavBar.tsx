import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logoimg from '../assest/pic/logo.png'
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavBar()  {

  return (
    <Navbar expand="lg" className="bg-body-tertiary px-5">
            <Container fluid>
                <Navbar.Brand href="#home">
                    <Link to='/'>
                    <img
                        src={logoimg}
                        width="80"
                        height="80"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px', margin:'2px'}}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">About</Nav.Link>
                        <Nav.Link href="#action2">Profile</Nav.Link>
                        <Nav.Link href="#action2">Contact</Nav.Link>
                        <Link to='/login'>
                        <Button className='bg-danger' style={{border:"none"}} 
                        href="#action2">Login</Button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  )
}

