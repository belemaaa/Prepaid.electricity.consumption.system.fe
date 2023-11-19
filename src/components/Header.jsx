import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {



  return (
    <div className='header'>
      <div className='headerLinks'>
          <ul>
          {/* <Link to = '/admin'><li>Admin</li></Link> */}
          <Link to='/dash'>  <li> Home   </li></Link>
           <Link to='/ElectricityPlan'> <li>Previous Plans</li></Link>
           {/* <Link to='/Pin'> <li>Pin</li></Link> */}
           
           
          </ul>
      </div>
    </div>
  )
}

export default Header