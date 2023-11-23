import React from 'react'
import './LandingPage.css'
import Home from './Home'
import { Link } from 'react-router-dom'
import background_image from '../images/energy-saving-concept-illustration_114360-14216.webp'


const LandingPage = () => {
  return (
    <div className='LandingPage'>
      <div className='landinginfo'>
        <h1>AmpSmart Solutions</h1>
      </div>
      <div className='holster'>
        <h1>Manage your electricity the smart way...</h1>
        <img src={background_image}/>
      </div>
      <div className='buttonHolder'>
        <Link to='/Create'> <button> Get Started </button></Link>
      </div>
    </div>
  )
}

export default LandingPage