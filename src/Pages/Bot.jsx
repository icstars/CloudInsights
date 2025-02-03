import React from 'react'
import Chatbot from '../components/Chatbot'
import Copilot from '../components/Copilot'
import Footer from '../components/Footer'



export default function Bot() {
  return (
    <div>
    
       
        <Chatbot />
        <div className='cats'><Copilot /></div>
      
        <div className='bottom'><Footer/> </div>
        
        
        

        
    </div>
  )
}
