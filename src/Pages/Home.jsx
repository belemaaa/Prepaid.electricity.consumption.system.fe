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
import { getAccessToken } from './Cookie'
import axios from 'axios'


const Home = () => {
  const location = useLocation();
  const value = location.state ? location.value.state : 110;
  let navigate = useNavigate();
  const gotoPayment = () => {
    let path = '/payment';
    navigate(path, {state:{price: selectedPrice}});
  }
  const [selectedPrice, setSelectedPrice] = useState(0)
  const handleSelect = (price) => {
    setSelectedPrice(price)
    gotoPayment()
  }
  // fetch electricity plans
  const [plans, setPlans] = useState([])
  const access_token = getAccessToken();
  useEffect(() => {
    const get_electricity_plans = async() => {
      try{ 
        const response = await axios.get('http://127.0.0.1:8000/api/electricity_plans/view')
        console.log('Response data:', response.data);
        setPlans(response.data)
      } catch(error){
          console.error('Error fetching plans: ', error)
      }
    }
    get_electricity_plans()
  }, [])
  // fetch profile api
  const [profile, setProfile] = useState([])
  useEffect(() => {
    const get_profile = async() => {
      try{
        const headers={
          'Authorization': `Bearer ${access_token}`,
        }
        const response = await axios.get('http://127.0.0.1:8000/api/profile/')
        setProfile(response.data)
      } catch(error){
        console.error('Error fetching profile data: ', error)
      }
    }
    get_profile()
  }, [])
  return (

    <div className='UserPage'>

      <div className='dashboard'>
        <Header />
        <h2>DASHBOARD</h2>
        <div className='sidebar'>
          <h1></h1>
          <p>{profile.first_name}</p>
          <p>{profile.last_name}</p>
          <p>@{profile.username}</p>
          <p>{profile.email}</p>
          <p>{profile.phone_number}</p>
        </div>

        <div className='flexContainer'>
          <div className='flex0'>
          <h3>Select a paid plan below</h3>
          </div>
          {plans.map((plan, index) => (  
            <div key={index} className='flex3' onClick={() => handleSelect(plan.price)}>
              <p className='flex3-name'>{plan.name}</p>
              <p>{plan.description}</p>
              <div>
                <p>units: {plan.number_of_units}</p>
                <p>price: {plan.price}</p>
                <p>hey</p>
              </div>
            </div>    
          ))}
         </div>
        </div>
      </div>
      )
}

      export default Home