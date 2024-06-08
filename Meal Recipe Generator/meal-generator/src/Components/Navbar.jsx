import React, { useContext } from 'react'
import '../style.css'
import { Link, useNavigate } from 'react-router-dom'
import { userContext } from '../App'
import axios from 'axios'

function Navbar() {
    const user = useContext(userContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        axios.get('http://localhost:3001/logout') //will use local host 3001
        .then(res => {
            if(res.data === "Success")
            navigate(0)
        }).catch(err => console.log(err))
    }
    
  return (
    <div className='navbar-header'>
        <div><h3>What's for Dinner?</h3></div>
        <div>
            <Link to="/" className='link'>Home</Link>
            {
                user.username ? 
                    <Link to="/create" className='link'>Create</Link>
                : <></>
            }
            <Link to="/mealgenerator" className='link'>Meal Generator</Link>
        </div>
        {
            user.username ?
            <div>
                <input type="button" onClick={handleLogout} value="Logout" className='btn_input'/>
            </div>
            :
            <div><h5><Link to="/register" className="link">Register/Login</Link></h5></div>
    
        }
    </div>
  )
}

export default Navbar