import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import Container from 'react-bootstrap/Container';
import './nav.css';
import logoi from '../img/logo2.png';


export class NavBar extends React.Component {

       render() {
     
        return (
            <Navbar className="navcorrect" bg="light" expand="lg">
            <Container className="NavbarItems">
              <Navbar.Brand className="remainingnavs" href="#home">
                  <img
                  alt=""
                  src={logoi}
                  
                  className="d-inline-block align-top"
                />
              </Navbar.Brand>
              {/* <Navbar.Toggle className="remainingnavs" aria-controls="basic-navbar-nav" /> */}
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                 
                  <NavDropdown className="remainingnavs" title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    {/* <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        )
    };
};

export default NavBar;