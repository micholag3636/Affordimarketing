import React from 'react'
import Lottie from "react-lottie"
import data from "./data.json"
import "./App.css"
import Typewriter from "typewriter-effect"

const Animation = () => {


    const defaultOptions = {
        loop: false,
        autoplay: true, 
        animationData: data,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
  return (
    <div className="animation">
        
        <Lottie options={defaultOptions}
              height={400}
              width={400}
              />

           
 <h1 className="affordimarketingtext"><Typewriter 
options={{

    delay: 40
}}

 onInit={(typewriter) => {
    typewriter.typeString("Affordimarketing").start()
 }}
 /></h1>


    </div>
  )
}

export default Animation