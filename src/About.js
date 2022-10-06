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

const About = () => {
  const defaultOptions = {

    loop: true,
    autoplay: true, 
    animationData: globe,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


  const defaultOptions2 = {

    loop: true,
    autoplay: true, 
    animationData: Story, 
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


  const defaultOptions3 = {

    loop: true,
    autoplay: true, 
    animationData: Goal, 
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


  return (
    <div className="About">
        <Header />

        <section className="Aboutone">

            <Container className="Aboutonecont">
                <Row>
                    <Col><h1 className='Aboutoneconth'>Affordimarketing</h1></Col>

                </Row>
                <Row md={12} className="Aboutonecontp">
                    <p >Provoding Affordable Marketing For Buinesses All Over The World</p>

                    </Row>




            </Container>






            <div class="custom-shape-divider-bottom-1656856006">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
    </svg>
</div>

        </section>


        
        <section className="Abouttwo">
        <Container  className="Abouttwocont" fluid >

               
<Row className="About2row">

           

<Col className="About2col2" xl={6} lg={12} md={12} sm={12}>
            
<Lottie className="About2col2img4" options={defaultOptions2}
              height={300}
              width={500}
              />
            </Col>
                    <Col className="About2col1"  xl={6} lg={12} md={12} sm={12} >
                       
                        <h1>Our Story</h1>

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









                   
                    


                    <Row  className="About2row">


                    






<Col className="About2col1" xl={6}  lg={12} md={12} sm={12} >

<h1>Our Story</h1>

<p className="Abouttwop"> Connect your conversations with the tools and services that you use to get the job done. With over 2,500+ apps and a robust API, the Slack platform team works

<br/><br/>
 with partners and developers globally to build apps and integrations that streamline your work, automate mundane tasks and bring context into your conversations in Slack.
 <br/>

<br/> 
Our partners include the worlds largest SaaS companies and 1,000+ products that are shaping the future of work.
<br/> <br/>



The Slack App Directory gives you access to thousands of apps that can extend the capabilities of your Slack team.
</p>

</Col>


<Col className="About2col2"  xl={6} lg={12} md={12} sm={12}>

<Lottie className="About2col2img4" options={defaultOptions3}
              height={400}
              width={350}
              />
          
</Col>









</Row>


       
        
        
    </Container>







    <Container  className="Abouttwocont2" fluid >

               
<Row className="About2row">


<Col className="About2col2" xl={6} lg={12} md={12} sm={12}>
            
<Lottie className="About2col2img4" options={defaultOptions2}
              height={250}
              width={500}
              />
           
            </Col>
               


                    <Col className="About2col1"  xl={6} lg={12} md={12} sm={12} >
                       
                        <h1>Our Story</h1>

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









                   
                    


                    <Row  className="About2row">


                    



        
<Col className="About2col2"  xl={6} lg={12} md={12} sm={12}>


<Lottie className="About2col2img4" options={defaultOptions3}
              height={400}
              width={350}
              />
        

</Col>
      


<Col className="About2col1" xl={6}  lg={12} md={12} sm={12} >

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
     


        <section className="Aboutthree">

            <div className="Aboutthreehead">
                <h1>Why Choose Us</h1>
            </div>

        <div class="custom-shape-divider-top-1656859432">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
    </svg>
</div>

     

            <Container  className="cardscont" fluid>



                <Row >

                    <Col  className="cards"lg={6} md={6} sm={12}>
                    <Card style={{ minWidth: '18rem', backgroundColor: "rgb(219,62,91)", border: "0px black solid"}}>
  <Card.Img variant="top" src={whyus1} />
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



                    <Col className="cards" lg={6} md={6} sm={12}>
                    <Card style={{ minWidth: '18rem', backgroundColor: "rgb(219,62,91)", border: "0px black solid" }}>
  <Card.Img variant="top" src={whyus1} />
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


                    <Col className="cards" lg={6} md={6} sm={12}>
                    
                    

                    <Card style={{ minWidth: '18rem', backgroundColor: "rgb(219,62,91)", border: "0px black solid"}}>
  <Card.Img variant="top" src={whyus1}/>
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


        
          

        </section>




     

<section className="Abouttwo">
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



                 
<Footer />
    </div>
  )
}

export default About 