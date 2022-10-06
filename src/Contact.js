import React from 'react'
import "./Contact.css"
import Header from "./Header.js"
import "./App.css"
import Form from 'react-bootstrap/Form'
import {ToastContainer, Toast, Card, Button, Container, Row, Col, Navbar, Nav, NavDropdown} from "react-bootstrap"
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { FormatListNumbered } from '@mui/icons-material'
import Footer from "./Footer.js"
const Contact = () => {
  return (
    <div className="Maincont"><Header />

<div className="Maincontback">
<div className="Formback">


<Form>

<div className="formbacktext">
    <h1 >Get In Touch</h1>
    </div>
    <Container fluid="md">
   
        <Row>
            <Col md={6} sm={12}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>First Name</Form.Label>
    <Form.Control type="email" placeholder="Enter first name" />
  
  </Form.Group>
  </Col>

  <Col  md={6} sm={12}> 
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
   
  </Form.Group>
  </Col>
  </Row>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Phone</Form.Label>
    <Form.Control type="tel" placeholder="Enter phone number" />
  </Form.Group>
 
  <Form.Group className="mb-3">
    <Form.Label>Select Service</Form.Label>
    <Form.Select >
      <option>Disabled select</option>
      <option>Disabled select</option>
      <option>Disabled select</option>
      <NavDropdown.Divider />
      <option>Disabled select</option>
    </Form.Select>
  </Form.Group>


<Form.Group className="mb-3" controlId="formMessage">
 
<Form.Control as="textarea" placeholder="Message" />
      
     

      </Form.Group>
    


<div className="contactbut">
  <Button className="contactbutbut" variant="primary" type="submit">
    Submit
  </Button>
  </div>
  </Container>
</Form>
</div>



</div>
<Footer/>
    </div>
  )
}

export default Contact