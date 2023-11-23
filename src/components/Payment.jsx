import React from 'react'
import { useState } from 'react';
import './Payment.css'
import { useNavigate, useLocation } from 'react-router-dom';
import { getAccessToken } from '../Pages/Cookie';


const Payment = ({plan_id}) => {
    const navigate = useNavigate();
    const [card_holder_name, setCard_holder_name] = useState('')
    const [card_number, setCard_number] = useState('')
    const [card_expiry_date] = useState('')
    const [cvv, setCvv] = useState('')
    const [address, setAddress] = useState('')
    const [phone_number, setPhone_number] = useState('')
    const [meter_id, setMeter_id] = useState('')
    const access_token = getAccessToken()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const headers={
                'Content-Type': 'application/json',
                Authorization: `Bearer ${access_token}`
            }
        }catch(error){
            pass
        }
    };

    return (
        <div className='paydiv'>
            <section className='paydivsec'>
            <form onSubmit={handleSubmit} className='payform'>

                <h1>Payment Details</h1>
                <label>Card Holder Name</label>
                <br></br>
                <input
                    type="text"
                    name="cardHolderName"
                    value={values.cardHolderName}
                    onChange={handleChange}
                    placeholder="eg: Adetunji Tofunmi"
                />
                
                <br></br>
                {errors.cardHolderName && <div>{errors.cardHolderName}</div>}
                <br></br>

                <label>Card Number</label>
                <br></br>

                <input
                    type="number"
                    name="cardNumber"
                    value={values.cardNumber}
                    onChange={handleChange}
                    placeholder="eg: 1234 4567 7890 0123"
                />
                <br></br>{errors.cardNumber && <div>{errors.cardNumber}</div>}
                <br></br>

                <label>Expiry date</label>
                <br></br>
                <input
                    type="date"
                    name="expiryDate"
                    value={values.expiryDate}
                    onChange={handleChange}
                    placeholder="Expiry Date"
                />
                <br></br>
                {errors.expiryDate && <div>{errors.expiryDate}</div>}
                <br></br>

                <label>CVV</label>
                <br></br>

                <input
                    type="number"
                    name="cvv"
                    value={values.cvv}
                    onChange={handleChange}
                    placeholder="eg: 000"
                />
                <br></br>
                {errors.cvv && <div>{errors.cvv}</div>}
                <br></br>

                <label>Payment Amount</label>
                <br></br>
                <input
                    type="text"
                    name="paymentAmount"
                    value={paymentPrice}
                    readOnly
                    // onChange={handleChange}
                    placeholder="Payment Amount"
                />
                <br></br>
                {errors.paymentAmount && <div>{errors.paymentAmount}</div>}
                <br></br>
                <button type="submit">Pay</button>
            </form>
            </section>
        </div>

    )
}

export default Payment