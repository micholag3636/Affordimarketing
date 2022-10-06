import React from 'react'
import "./About.css"
import Header from "./Header.js"
import {ToastContainer, Toast, Card, Button, Container, Row, Col, Navbar, Nav, NavDropdown} from "react-bootstrap"
import About2 from "./Images/About2.png"
import story from "./Images/story.png"
import whyus1 from "./Images/whyus1.png"
import Lottie from "react-lottie"
import globe from "./globe.json"
import Story from "./Story.json"
import Goal from "./Goal.json"
import Footer from "./Footer.js"
import Carousel from 'react-bootstrap/Carousel';
import Slider from "./Slider.js"

import "./NavDrop.css"
const Marketing = () => {

  const defaultOptions = {

    loop: true,
    autoplay: true, 
    animationData: globe,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div>

<Header/>
        



<section id="marketing" className="Abouttwo">
        <Container  className="About4cont" fluid >

               
<Row className="About2row">

           

<Col className="About2col2" xl={6} lg={12} md={12} sm={12}>
            

            <Lottie className="About2col2img4" options={defaultOptions}
             
              height={300}
              width={600}
              />

            </Col>
                    <Col className="About2col1"  xl={6} lg={12} md={12} sm={12} >
                       
                        <h1>Our Goal</h1>

                        <p className="Abouttwop"> Connect your conversations with the tools and services that you use to get the job done. With over 2,500+ apps and a robust API, the Slack platform team works

<br/><br/>
 with partners and developers globally to build apps and integrations that streamline your work, automate mundane tasks and bring context into your conversations in Slack.
 <br/>

<br/> 
Our partners include the world’s largest SaaS companies and 1,000+ products that are shaping the future of work.
<br/> <br/>



The Slack App Directory gives you access to thousands of apps that can extend the capabilities of your Slack team.
</p>
             
                    </Col>
                  
                  

                   
                    </Row>       









                   
                    


                    
        
        
    </Container>
    </section>

    <section className="marketing2">
      <Slider/>

      <div>
        <h6>Have an inquiry about one of our services?</h6>


        <div className="d-grid gap-2">
  
      <Button className="butcont">
       <h2> Contact Us </h2>
      </Button>
     
    </div>
      </div>


    </section>


    </div>
  )
}

export default Marketing