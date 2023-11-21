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
        if (response.status === 200){
          console.log('signup was successful')
          navigate('/Login')
        }
      } catch(error){
        console.error('Error received: ', error)
      }
    }


  return (


    <div className='Signup'>
      <div className='form2Holder'>
        <section className='section1'>
          <form className='form2'>
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg> */}
          <i class="fi fi-tr-circle-user"></i>
            <label className="formheader">  <h1>Create your account</h1> </label>

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
            <input placeholder='' type='text' value={username} onChange={(e) => setUsername(e.target.value)}>
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