import React from 'react'
import logom from './Image/logom.jpg'
import './nav.css'
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <>
    <nav>

        <div>
       <img src={logom} alt="logo"/>
        </div>
        <h1>ECOSPACE</h1>
        <ul>
            <li>
                <Link to="/" className='h'>Home</Link>
                </li>
            <li>
            <Link to="/plantHub" className='h'>PlantHub</Link>
            </li>
            <li>
            <Link to="/greenSpace"className='h'>GreenSpace</Link>
            </li>
            <li>
            <Link to="/floraMarket" className='h'>FloraMarket</Link> 
            </li>
            <li>
            <Link to="/Learnleaf" className='h'>Learnleaf</Link> 
            </li>
        </ul>
    </nav>

    
    </>
  )
}

export default Navbar
