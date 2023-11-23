import React from 'react'
import './ElectricityPlan.css'
import Header from '../components/Header'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { getAccessToken } from './Cookie'


const ElectricityPlan = () => {

  const [plans, setPlans] = useState([])
  const access_token = getAccessToken();
  // fetch electricity plans
  useEffect(() => {
    const get_electricity_plans = async() => {
      try{ 
        const headers={
          Authorization: `Bearer ${access_token}`
        }
        const response = await axios.get('http://127.0.0.1:8000/api/paid_plans/', {headers: headers})
        setPlans(response.data)
      } catch(error){
          console.error('Error fetching plans: ', error)
      }
    }
    get_electricity_plans()
  }, [access_token])

  return (

    <div className='ElectricityPlan'>
      <Header />
      <div className='paidplans'>
        <h2>Your payment history</h2>
      </div>
      <div className='historybar'>
        <div className='flexContainer2'>
          {plans.map((plan, index) => (  
            <div key={index} className='flex2'>
              <p className='flex2-name'>{plan.electricity_plan.name}</p>
              <p>{plan.electricity_plan.description}</p>
              <div>
                <p>units: {plan.electricity_plan.number_of_units}</p>
                <p>price: {plan.electricity_plan.price}</p>
              </div>
            </div>    
          ))}
          </div>
          </div>
      </div>
    // </div>
  )


}


export default ElectricityPlan