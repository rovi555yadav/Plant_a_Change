import React from 'react'
import hn1 from "./Image/hn1.jpg"
import foot1 from "./Image/foot1.png"
import "./Navbar"
import Navbar from './Navbar'

function Home() {
  return (
    <>
    <Navbar/>
     <div>
        <div>
         <img src={hn1} alt="hn"/>
         <h1>Nothing Feel better then being Surrounded with Nature</h1>
        </div>
        <div>
            <h1>With complex, systemic challenges such as climate,
                 there are no individual winners.
                 Collectively addressing carbon impact means we all win,
                  or we all lose.</h1>
            <img src={foot1} alt="foot"/>
       
        </div>
      
      </div>
    </>
   
  )
}

export default Home
