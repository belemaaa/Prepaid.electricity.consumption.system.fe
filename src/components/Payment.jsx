import React from 'react'
import { useState } from 'react';
import './Payment.css'
import { useNavigate } from 'react-router-dom';


const Payment = () => {

    const navigate = useNavigate();
    const [values, setValues] = useState({
        cardHolderName: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        paymentAmount: ''
    });
    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    const validateForm = () => {
        let tempErrors = {};
        // Add your validation logic here
        // For example:
        tempErrors.cardNumber = values.cardNumber ? "" : "Input the right figures"
        tempErrors.cardHolderName = values.cardHolderName ? "" : "This field is required.";
        tempErrors.expiryDate = values.expiryDate ? "" : "This field is required.";
        tempErrors.cvv = values.cvv ? "" : "Input the correct cvv"
        tempErrors.paymentAmount = values.paymentAmount ? "" : "Enter a valid payment amount"
        // Repeat for other fields
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === "");
      };
    

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            navigate('/pin')
        }

    };



    return (
        <div className='paydiv'>
        
            <form onSubmit={handleSubmit} className='payform'>

                <h1>Input Payment Details</h1>

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
                <input
                    type="number"
                    name="cardNumber"
                    value={values.cardNumber}
                    onChange={handleChange}
                    placeholder="eg: 1234 4567 7890 0123"
                />
                <br></br>{errors.cardNumber && <div>{errors.cardNumber}</div>}
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
                <input
                    type="text"
                    name="paymentAmount"
                    value={values.paymentAmount}
                    onChange={handleChange}
                    placeholder="Payment Amount"
                />
                <br></br>
                {errors.paymentAmount && <div>{errors.paymentAmount}</div>}
                <br></br>
                <button type="submit">Pay</button>
            </form>

        </div>

    )
}

export default Payment