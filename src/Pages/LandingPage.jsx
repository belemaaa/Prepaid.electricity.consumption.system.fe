
import React from 'react'
import './LandingPage.css'
import Home from './Home'
import { Link } from 'react-router-dom'
// import background_image from '../images/t3.jpg'


const LandingPage = () => {






  return (

    <div className='LandingPage'>
      <div className='landinginfo'>

        <h1>AmpSmart Solutions</h1>

      </div>

      <div className='holster'>

        <div className='moreInfo'>
          <h1>Manage your electricity the smart way...</h1>
        </div>

        <div className='buttonHolder'>
          <Link to='/Create'> <button> Get Started </button></Link>

        </div>


      </div>



    </div>
  )
}

export default LandingPage