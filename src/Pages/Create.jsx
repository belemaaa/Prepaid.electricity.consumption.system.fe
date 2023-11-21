import React, {useState, useEffect} from 'react'
import './Create.css'
import { Link, useNavigate } from 'react-router-dom'

const Create = () => {
    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phone_number, setPhone_number] = useState('')
    const [password, setPassword] = useState('')
    const [error_message, setError_message] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
      e.preventDefault();
      const headers = {
          'Content-Type': 'application/json'
      }
      try {
        const response = await fetch('http://127.0.0.1:8000/api/signup/', {
          method: 'POST',
          headers: headers,
          body: JSON.stringify({
            first_name: first_name,
            last_name: last_name,
            username: username,
            email: email,
            phone_number: phone_number,
            password: password,
          })
        });
        if (response.status === 201) {
          console.log('Signup was successful');
          navigate('/Login');
        }
      } catch(error){
        setError_message('An error occurred. Please try again later.')
        console.error('Error received: ', error)
      }
    }


  return (


    <div className='Signup'>
      <div className='form2Holder'>
        <section className='section1'>
          <form className='form2' onSubmit={handleSubmit}>
          <i class="fi fi-tr-circle-user"></i>
            <label className="formheader">  <h1>Create your account</h1> </label>

            {error_message && <p style={{color: 'red'}}>{error_message}</p>}
            <label>First name </label>
            <br></br>
            <input placeholder='eg: John' type='text' value={first_name} onChange={(e) => setFirst_name(e.target.value)}>
            </input><br></br><br></br>

            <label>Last name </label>
            <br></br>
            <input placeholder='eg: Doe' type='text' value={last_name} onChange={(e) => setLast_name(e.target.value)}>
            </input><br></br><br></br>

            <label>Username </label>
            <br></br>
            <input placeholder='eg: johndoe' type='text' value={username} onChange={(e) => setUsername(e.target.value)}>
            </input><br></br><br></br>

            <label>Email</label>
            <br />
            <input placeholder='eg: someone@gmail.com' type='email' value={email} onChange={(e) => setEmail(e.target.value)}>
            </input><br></br><br></br>

            <label>Phone Number</label>
            <br />
            <input placeholder='eg: +23491234567887' name='' type='tel' value={phone_number} onChange={(e) => setPhone_number(e.target.value)}>
            </input><br></br><br></br>

            <label> Password</label>
            <br />
            <input placeholder='' name='' type='password' value={password} onChange={(e) => setPassword(e.target.value)}>
            </input><br></br><br></br>

            <button type='submit'>Sign up</button>

            <p>Already have an account? <Link to='/login'>Login</Link></p>
          </form>
        </section>
      </div>

    </div>
  )
}

export default Create