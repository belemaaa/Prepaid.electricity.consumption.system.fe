import React from 'react'
import './ElectricityPlan.css'
import Header from '../components/Header'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'


const ElectricityPlan = () => {

 const history = [
  {plan: '14 days validity'}
 ]

  return (

    <div className='ElectricityPlan'>

      <Header />
      
      <div className='paidplans'>
        <h2>Your payment history</h2>
      </div>
      <div className='historybar'>
        <div>

        </div>

      </div>
    </div>
  )


}


export default ElectricityPlan