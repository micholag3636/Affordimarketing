import React from 'react'
import facebook from "./Images/facebook.png"
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import "./App.css"
import {ToastContainer, Toast, Card, Button, Container, Row, Col, Navbar, Nav, NavDropdown} from "react-bootstrap"
const Footer = () => {
  return (
    <div>
         <footer className="cont4">


<Container className="footcontainer">
<Row className="footrow">
<Col  className="footcol"> <img className="footimg" src={facebook} /></Col>
<Col > <img className="footimg" src={facebook} /></Col>
<Col > <img  className="footimg" src={facebook} /></Col>
</Row>
<Row>
<Breadcrumb className="footerlink">
<Breadcrumb.Item active className="footerlink" href="#"><a className="footerlink" href="hh">Home </a></Breadcrumb.Item>
<Breadcrumb.Item active className="footerlink" href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
<a className="footerlink" href="hh">Library </a>
</Breadcrumb.Item>


<Breadcrumb.Item className="footerlink" active><a className="footerlink" href="hh">Data </a></Breadcrumb.Item>
<Breadcrumb.Item className="footerlink" active><a className="footerlink" href="hh">Contact </a></Breadcrumb.Item>
</Breadcrumb>
</Row>





</Container>


</footer>
<footer className="cont5">

<Container>
<Row className="footend">
<Col className="footend" ><div><a className="footerterms" href="fff"> Privacy Policy </a></div> <div><a href="fff"  className="footerterms">  Terms Of Use</a></div></Col>



</Row>
</Container>



</footer>




    </div>
  )
}

export default Footer