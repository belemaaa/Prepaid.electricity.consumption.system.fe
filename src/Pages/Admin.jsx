import React from 'react'
import Header from '../components/Header'
import './Admin.css'

const Admin = () => {
    return (
        <div className='adminpage'>

         <Header />
         
         <div className='admininfo'>
            <h1>ADMIN PAGE</h1>
            </div>
            <div className="sidebar2">
                <h2>Admin</h2>
            </div>
            <div className='admin1'>

                <div className='adminbutton'>

                    <h3>Add Plans</h3>

                </div>

                <div className='adminbutton'>

                    <h3>Delete Plan</h3>

                </div>

            </div>

            <div className="adminprint">
                <div className="adminprint1">
                    <h1>Plans</h1>
                    <p></p>
                </div>
                
            </div>

        </div>
    )
}

export default Admin