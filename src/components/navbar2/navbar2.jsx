import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {Link } from 'react-scroll';

import './navDesign.css';


const NavBar2 = () => {
   
    return (
        <Navbar collapseOnSelect expand="lg">
            <div className='navbar_logo'>
                <Navbar.Brand className="navbar_logo" href='/'>Kelechi</Navbar.Brand>
            </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

                <Nav className='ms-auto'>
                    <Link className='cart_link' to='/'>Home</Link>
                    <Link className='cart_link' to='hirepoint' smooth={true} duration={1000}>Skills</Link>
                    <Link className='cart_link' to='portfolio' smooth={true} duration={1000}>Portfolio</Link>
                    

                   
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    )
};




export default NavBar2;