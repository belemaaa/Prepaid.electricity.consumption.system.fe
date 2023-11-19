import React from 'react'
import './Home.css'
import Pin from './Pin'
import Create from './Create'
import Header from '../components/Header'
import Login from './Login'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './LandingPage'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import { useLocation } from 'react-router-dom'


const Home = () => {

  const location = useLocation();
  const value = location.state ? location.value.state : 110;
  // const userDetails{
  // }
  const Options = [
    { label: '14 DAYS validity plan',
      description: 'This plan offers you a totsl of 14 units which would be for 28 days',
      price: 100,
      number_of_units: 14
    },
    { label: '1500 Credits for $150',
    number_of_units: 14,
     price: 150
     },
    { label: '2000 Credits for $200',
    number_of_units: 14,
     price: 200
     },
    { label: '2500 Credits for $250',
    number_of_units: 14,
     price: 250
     },
    { label: '3000 Credits for $300',
    number_of_units: 14,
     price: 300
     },
    { label: '4500 Credits for $450',
    number_of_units: 14,  
     price: 450
     }
  ]
  
  let navigate = useNavigate();

  const gotoPayment = () => {
    let path = '/payment';
    navigate(path, {state:{price: selectedPrice}});
  }

  const [selectedPrice, setSelectedPrice] = useState(0)

  const handleSelect = (price) => {
    setSelectedPrice(price)
  }

  return (

    <div className='UserPage'>

      <div className='dashboard'>
        <Header />
        <h2>DASHBOARD</h2>
        <div className='sidebar'>
          <h1></h1>
          <p>Grace Itamunoala</p>
          <p>jeff@gmail.com</p>
          <p>09122344545</p>
        </div>

        <div className='flexContainer'>
          <div className='flex0'>
          <h3>Select a paid plan below</h3>
          {/* <CircularProgressbar 
          className='progressbar'
          value={value}
          maxValue={200}
          text={`${value/2}%`}
          styles={buildStyles({
            pathColor: `rgba(62, 152, 199, ${value / 100})`,
            textColor: 'white',
            trailColor: '#d6d6d6',
            strokeLinecap: 'round',
            pathTransitionDuration: '0.5'
          })}
        />

        <h3>You have {value/2} Credits left</h3> */}
          </div>

            {Options.map(option => {
              return (     
          <div className='flex3' onClick={() => handleSelect(option.price)}>
            <p className='flex3-name'>{option.label}</p>
            <p>{option.description}</p>
            <div>
              <p>units: {option.number_of_units}</p>
              <p>price: {option.price}</p>
            </div>
          </div>
              )
              })}

         </div>

        </div>
      </div>
      )
}

      export default Home