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
import {CgProfile} from 'react-icons/cg'
import { FaUser } from "react-icons/fa";


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
  const [plans, setPlans] = useState([])
  const access_token = getAccessToken();

  // fetch electricity plans
  useEffect(() => {
    const get_electricity_plans = async() => {
      try{ 
        const response = await axios.get('http://127.0.0.1:8000/api/electricity_plans/view')
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
          Authorization: `Bearer ${access_token}`,
        }
        const response = await axios.get('http://127.0.0.1:8000/api/profile/', {headers: headers})
        setProfile(response.data.user)
      } catch(error){
        console.error('Error fetching profile data: ', error)
      }
    }
    get_profile()
  }, [access_token])
  return (

    <div className='UserPage'>

      <div className='dashboard'>
        <Header />
        <h2>DASHBOARD</h2>
        <div className='sidebar'>
          <FaUser size={50} className='profile-icon'/>
          <p className='name'>{profile.first_name} {profile.last_name}</p>
          <p className='username'>@{profile.username}</p>
          <p className='email'>{profile.email}</p>
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
              </div>
            </div>    
          ))}
         </div>
        </div>
      </div>
      )
}

      export default Home