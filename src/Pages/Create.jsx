import React from 'react'
import './Create.css'
import { Link } from 'react-router-dom'

const Create = () => {



  return (


    <div className='Signup'>
      <div className='form2Holder'>
        <section className='section1'>

          <form className='form2'>
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg> */}

          <i class="fi fi-tr-circle-user"></i>

            <label className="formheader">  <h1>Create your account</h1> </label>

            <label>Name </label>
            <br></br>
            <input placeholder='eg: John Doe' name='' type='text' >
            </input><br></br><br></br>

            <label> Phone Number </label>
            <br />
            <input placeholder='eg: +23491234567887' name='' type='tel' >
            </input><br></br><br></br>

            <label> House Address</label>
            <br />
            <input placeholder='eg: 23 Adebayo lane, Texas.' name='' type='text' >
            </input><br></br><br></br>

            <label>Email</label>
            <br />
            <input placeholder='eg: someone@gmail.com' name='' type='email' >
            </input><br></br><br></br>

            <label> Password</label>
            <br />
            <input placeholder='' name='' type='password' >
            </input><br></br><br></br>

            <Link to='/Login'><button>Sign up</button></Link>

            <p>Already have an account? <Link to='/login'>Login</Link></p>
          </form>
        </section>
      </div>

    </div>
  )
}

export default Create