import React from 'react'
import "./App.css"

import './App.css'; 
import Header from "./Header.js"

import useState from "react"
import {ToastContainer, Toast, Card, Button, Container, Row, Col, Navbar, Nav, NavDropdown} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import logo from "./Images/logo.png"
import image1 from "./Images/image1.png"
import cont21 from "./Images/cont21.png"
import facebook from "./Images/facebook.png"
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Footer from "./Footer.js"
import Lottie from "react-lottie"
import Contact from "./Contact.js"

import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Router
} from "react-router-dom";
import Main from "./Main.json"



const Home = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: Main,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (


    <div className="Main" >
     
    <Header/>

         



    <div className="Content">
    
   

    <section className="cont1"> 


    <div>
    <Container >
 <Row>
   <Col ><div className="cont1-text">
     
     <div>
     <h1>HIGH TECH LEAD GENERATION</h1>
     </div>
   <div><p > tailoring os to other marketing services without a hitch. The design of Seos is very enticing out of the box, easily adjusting to different tastes even if using it as is. Of course, you can enrich this site canvas with your branding regulations, too.</p> </div>


  
   <Button  id="cont1-but"  size="lg">
         Start now
       </Button>
       
  
   </div>
   
   </Col>
   <Col   md={6}><div className="image1">
  
   <Lottie options={defaultOptions}
              height={300}
              width={350}
              />

  
  </div></Col>
 </Row>

</Container>



    </div>


   


    <div class="custom-shape-divider-bottom-1656196492">
   <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
       <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
   </svg>
</div>
    </section>
   
   

  


    
  

   
  


    <section className="cont2">
     <Container fluid>





<Row className="cardrow">


<Col className="cards"  xl={6} lg={6} md={12} sm={12}>
<Card style={{marginBottom: "1.7em", margin: '1em', minWidth: '16rem' ,  backgroundColor: "#DB3E5B"}}>
 <Card.Img variant="top" src={cont21} />
 <Card.Body>
   <Card.Title>baka rarr`</Card.Title>
   <Card.Text>
     Some quick example text to build on the card title and make up the bulk of
     the card's content.
   </Card.Text>
   <Button variant="primary">Go somewhere</Button>
 </Card.Body>
</Card>

 </Col>

<Col className="cards" xl={6} lg={6} md={12} sm={12}>
<Card style={{ margin: '1em', marginBottom: "1.7em", minWidth: '16rem' ,  backgroundColor: "#DB3E5B"}}>
 <Card.Img variant="top" src={cont21} />
 <Card.Body>
   <Card.Title>Card Title</Card.Title>
   <Card.Text>
     Some quick example text to build on the card title and make up the bulk of
     the card's content.
   </Card.Text>
   <Button variant="primary">Go somewhere</Button>
 </Card.Body>
</Card>

 </Col>


<Col  className="cards" xl={6} lg={6} md={12} sm={12}>
<Card style={{ marginBottom: "1.7em", margin: '1em',minWidth: '16rem',  backgroundColor: "#DB3E5B"}}>
 <Card.Img  style={{   backgroundColor: "#DB3E5B", variant: "top" , }} src={cont21} />
 <Card.Body>
   <Card.Title>Card Title</Card.Title>
   <Card.Text>
     Some quick example text to build on the card title and make up the bulk of
     the card's content.
   </Card.Text>
   <Button variant="primary">Go somewhere</Button>
 </Card.Body>
</Card>

 </Col>




 <Col  className="cards" xl={6}lg={6} md={12} sm={12}>
 <Card style={{marginBottom: "1.7em",  margin: '1em',minWidth: '16rem' ,  backgroundColor: "#DB3E5B"}}>
 <Card.Img variant="top"  src={cont21} />
 <Card.Body>
   <Card.Title>Card Title</Card.Title>
   <Card.Text>
     Some quick example text to build on the card title and make up the bulk of
     the card's content.
   </Card.Text>
   <Button variant="primary">Go somewhere</Button>
 </Card.Body>
</Card>

 </Col>

 </Row>




     </Container>












    

    <div class="custom-shape-divider-bottom-165619693">
   <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
       <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
   </svg>
</div>

     </section>

     


     <section className="cont3">


<Container>
 
     <ToastContainer className="alltoast">
     <Row >
 


 <Col   className="toastrow" xl={6}lg={6} md={12} sm={12} >
 <div className="wholetoast">
   <div className="toastcard">

  
     <img id="imgtoast" src={cont21} className="rounded me-2" alt="" />
     <strong className="me-auto">Bootstrap</strong>
     
     </div>
   <Toast.Body  className="toastbod">Heads up, toasts will stack automatically</Toast.Body>
 </div>
 </Col>


 <Col   className="toastrow" xl={6}lg={6} md={12} sm={12} >
 <div className="wholetoast">
   <div className="toastcard">

  
     <img id="imgtoast" src={cont21} className="rounded me-2" alt="" />
     <strong className="me-auto">Bootstrap</strong>
     
     </div>
   <Toast.Body  className="toastbod">Heads up, toasts will stack automatically</Toast.Body>
 </div>
 </Col>


 <Col   className="toastrow" xl={6}lg={6} md={12} sm={12} >
 <div className="wholetoast">
   <div className="toastcard">

  
     <img id="imgtoast" src={cont21} className="rounded me-2" alt="" />
     <strong className="me-auto">Bootstrap</strong>
     
     </div>
   <Toast.Body  className="toastbod">Heads up, toasts will stack automatically</Toast.Body>
 </div>
 </Col>



 <Col   className="toastrow" xl={6}lg={6} md={12} sm={12} >
 <div className="wholetoast">
   <div className="toastcard">

  
     <img id="imgtoast" src={cont21} className="rounded me-2" alt="" />
     <strong className="me-auto">Bootstrap</strong>
     
     </div>
   <Toast.Body  className="toastbod">Heads up, toasts will stack automatically</Toast.Body>
 </div>
 </Col>






 


 </Row>
</ToastContainer>


</Container>
    
    </section>

    <Footer/>

  

 
   


   


</div>

</div>
  )
}


export default Home