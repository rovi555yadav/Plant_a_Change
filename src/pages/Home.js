import React from 'react'
import logom from '../components/Image/logom.jpg'
import bcm from '../components/Image/bcm.jpg'

function Home() {
  return (
    <>
      <div className='navb'>
        <img className='photo' src={logom} alt="log" />

        <button className='lgn' variant="outlined">Login</button>
        <button className='sgn' variant="outlined">SignUp</button>

      </div>

      <div className='bcmd'>
        <h1>Together We can Restore THE Plant</h1>
        <img src={bcm} alt="background" />

      </div>

    </>
  )
}

export default Home
