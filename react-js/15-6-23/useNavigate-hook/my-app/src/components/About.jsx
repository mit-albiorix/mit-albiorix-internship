import React from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'

function About() {
  
  const navigate =useNavigate();
  const goToContact = () =>{
     navigate("/contact")
  }

  const goToHome =()=>{
    navigate("/")
  }


  return (
    <>     
     <Header/>
    <h1>About</h1>
    <button onClick={goToContact}>GoToContact</button>
    <button onClick={goToHome}>BackToHome</button>
</>
  )
}

export default About
