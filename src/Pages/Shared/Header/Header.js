import React from 'react';
import './Header.css'
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import brand from  '../../../assets/images/brand.png';

const Header = () => {
    return (
    <div className='fixed-top' >
        <Navbar collapseOnSelect expand="lg" bg="light" >
        <Container className='text-info '>
            <Navbar.Brand className='fw-semibold lh-lg text-blod'><span><Image style={{width:'60px',marginRight:'5px'}} src={brand} alt=''></Image></span>Life <span className='nav-brand'>Care</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto text-info">
                <Link to='/'><Button variant="light">Home</Button></Link>
                <Link to='/myreview'><Button variant="light">My Review</Button></Link>
                <Link to='/addservice'><Button variant="light">Add service</Button></Link>
                <Link to='/signup'><Button variant="light">Sign Up</Button></Link>
                <Link to='/login'><Button variant="light">Login</Button></Link>
        
                
            </Nav>
            {/* <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                Dank memes
                </Nav.Link>
            </Nav> */}
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
    );
};

export default Header;