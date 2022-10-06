
import './App.css'; 
import Header from "./Header.js"

import {useState, useEffect} from "react"
import {ToastContainer, Toast, Card, Button, Container, Row, Col, Navbar, Nav, NavDropdown} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import logo from "./Images/logo.png"
import image1 from "./Images/image1.png"
import cont21 from "./Images/cont21.png"
import facebook from "./Images/facebook.png"
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Footer from "./Footer.js"


import Contact from "./Contact.js"

import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Router
} from "react-router-dom";
import Home from "./Home.js"
import About from "./About.js"
import data from "./data.json"
import Animation from "./Animation.js"
import Marketing from "./Marketing.js"

    
import React from 'react'
import { SettingsInputAntenna } from '@mui/icons-material';

const App = () => {



  const [Anime, setAnime] = useState(false)

useEffect(() => {


  setAnime(false)

  navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate

  if (navigator.vibrate){

    navigator.vibrate(1000)
  }



 setInterval(() => {
  setAnime(true
    )

 }, 2000);


}, [])


  return (

     <BrowserRouter>
    <Routes>


{Anime ? 

  
      <Route path="/" element={<Home/>} /> 

      :  <Route path="/" element={<Animation/>} /> }
  

  <Route path="/contact" element={<Contact/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/marketing" element={<Marketing/>} />
      </Routes>
    
  
  
  
  
  
    </BrowserRouter>


   
    
   
  )
}

export default App

