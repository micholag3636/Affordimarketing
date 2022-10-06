import React, {useState} from 'react'
import "./App.css"

import {Button, Container, Row, Col, Navbar, Nav, NavDropdown} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import logo from "./Images/logo.png"
import image1 from "./Images/image1.png"
import { Link } from "react-router-dom";



const Header = () => {

    

return(

      <div  className="Me">
    
    <Navbar className="Nav" expand="sm">
  <Container>
  


 
    <Navbar.Brand href="#home">
      <img
      className="nav-logo"
        src={logo}
        width="100"
          height="100"
        
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>


  
    <Navbar.Toggle className="navb" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav   className="me-auto">

    
      
      <Nav.Link ><Link  className="Link" to="/">Home </Link></Nav.Link>  
        <Nav.Link > <Link className="Link" to="/about">About</Link></Nav.Link>
     <Nav.Link>  <Link className="Link" to="/contact">Contact Us</Link></Nav.Link> 
        <NavDropdown   title="Services" id="basic-nav-dropdown">
        <NavDropdown.Item >  <Link className="Link"  id="navdrop" to="/marketing">Digital Marketing</Link></NavDropdown.Item>
          <NavDropdown.Item >Social Media Management</NavDropdown.Item>
          <NavDropdown.Item >Web Development</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item >Get A Free Audit3</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  
      </div>
       
     
)
   
   }
  


export default Header