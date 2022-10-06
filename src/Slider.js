import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import cont21 from "./Images/cont21.png"
import "./NavDrop.css"


const Slider= () => {
  return (
    <Carousel className="carousel">
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={cont21}
          alt="First slide"
        />
        <Carousel.Caption className="capttext">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={cont21}
          alt="Second slide"
        />
        <Carousel.Caption className="capttext">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cont21}
          alt="Third slide"
        />
        <Carousel.Caption className="capttext">
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
         
        


  )
}

export default Slider