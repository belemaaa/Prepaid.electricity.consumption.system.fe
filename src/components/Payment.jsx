import React from 'react'
import { useState } from 'react';
import './Payment.css'
import { useNavigate, useLocation } from 'react-router-dom';
import { getAccessToken } from '../Pages/Cookie';


const Payment = ({plan_id, price}) => {
    const navigate = useNavigate();
    const [card_holder_name, setCard_holder_name] = useState('')
    const [card_number, setCard_number] = useState('')
    const [card_expiry_date, setCard_expiry_date] = useState('')
    const [cvv, setCvv] = useState('')
    const [address, setAddress] = useState('')
    const [phone_number, setPhone_number] = useState('')
    const [meter_id, setMeter_id] = useState('')
    const access_token = getAccessToken()
    const [success_message, setSuccess_message] = useState('')
    const [show_pin, setShow_pin] = useState(false)
    const [pin, setPin] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const headers={
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access_token}`
            }
            const response = await fetch(`http://127.0.0.1:8000/api/payment/${plan_id}`,{
                method: 'POST',
                headers: headers,
                body: JSON.stringify({
                    card_holder_name: card_holder_name,
                    card_number: card_number,
                    card_expiry_date: card_expiry_date,
                    cvv: cvv,
                    address: address,
                    phone_number: phone_number,
                    meter_id: meter_id
                })
            })
            if (response.status === 200){
                console.log('Your payment has been successfully processed.')
                // console.log(response.data.data.electricity_pin)
                setSuccess_message('Payment successful')
                setShow_pin(true)
                setPin(response.data.electricity_pin)
                console.log(response.data.electricity_pin)
            }
            else{
                setSuccess_message('An error occurred.')
            }
        }catch(error){
            console.error('Error processing payment: ', error)
        }
    };
    return (
        <div  className='paydiv'>
            <section className='paydivsec'>
            <form onSubmit={handleSubmit} className={`payform ${show_pin ? 'blur-background' : ''}`}>

                <h1>Payment Details</h1>
                {success_message && <p className='success_message'>{success_message}</p>}
                <label>Card Holder Name</label>
                <br></br>
                <input
                    type="text"
                    value={card_holder_name}
                    onChange={(e) => setCard_holder_name(e.target.value)}
                    placeholder="eg: Adetunji Tofunmi"
                />
                
                <br></br>
                <br></br>

                <label>Card Number</label>
                <br></br>

                <input
                    type="number"
                    value={card_number}
                    onChange={(e) => setCard_number(e.target.value)}
                    placeholder="eg: 1234 4567 7890 0123"
                />
                <br></br>
                <br></br>

                <label>Expiry date</label>
                <br></br>
                <input
                    type="text"
                    value={card_expiry_date}
                    onChange={(e) => setCard_expiry_date(e.target.value)}
                    placeholder="e.g 10/24"
                />
                <br></br>
                <br></br>

                <label>CVV</label>
                <br></br>
                <input
                    type="number"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    placeholder="eg: 000"
                />
                <br></br>
                <br></br>
                <label>Phone number</label>
                <br></br>
                <input
                    type="tel"
                    value={phone_number}
                    onChange={(e) => setPhone_number(e.target.value)}
                    placeholder="+234"
                />
                <br></br>
                <br></br>
                <label>Address</label>
                <br></br>
                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="24 Texas Street"
                />
                <br></br>
                <br></br>
                <label>Meter id</label>
                <br></br>
                <input
                    type="text"
                    value={meter_id}
                    onChange={(e) => setMeter_id(e.target.value)}
                    placeholder="eg: 12345"
                />
                <br></br>
                <br></br>
                <label>Payment Amount</label>
                <br></br>
                <p>{price}</p>
                <br></br>
                <br></br>
                <button type="submit">Pay</button>
            </form>

            {show_pin && (
                <div className='pin-popup'>
                    <h2>Your Electricity Pin</h2>
                    <p>{pin}</p>
                    <button onClick={() => setShow_pin(false)}>Close</button>
                </div>
            )}
            </section>
        </div>

    )
}

export default Payment