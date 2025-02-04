import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useState } from 'react';

export default function Signupform() 


{


    const [restart, setRestart] = useState('');
  
  
  const handleRestart = () => {

    setRestart('');
  }

  return (
    <>
    <Header/>
    <div className='Signupform'>

    <form>
    <input type="text" placeholder="FirstName" required className='signme' value={restart} onChange={(e) => setRestart(e.target.value)}/> <br />
    <input type="text" placeholder='LastName' required className='signme'/> <br />
    <input type="number" placeholder='Phone Number' required className='signme' /> <br />
    <input type="email" placeholder='Email Address' required className='signme' /> <br />
    <input type="password" placeholder='Password' required className='signme'/> <br />
    <input type="password" placeholder=' Confirm Password' required className='signme'/><br />
    <button type="reset" className='signupRest'onClick={handleRestart}>Reset</button>
    <button type="submit" className='signupBtn'>Sign Up</button>

</form>
   </div>

   <Footer/>
    
    
    </>
  )
}
