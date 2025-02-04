
import FrontLillyMoore from './images/FrontLillyMoore.jpg'
import Pfp from "./images/Lily.png"
import BackLillyMoore from './images/BackLillyMoore.png'


function Profile(){
    return(
        <>
        
            {/* <img src={Pfp} alt="Lily"className="lily" />
           
            <p className="pro"></p>
            
            <p className="bio"><ol className="title">Lilly Moore -
Health Navigator</ol>
 
       
📞 (555)123-4567<br/>
📧 Lilly.Moore@email.com<br/>
📍 In-Field<br/>
Monday - Friday: 9:00 AM - 6:00 PM</p>  */}


<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
    <img src={FrontLillyMoore} className='lily'/>
    </div>
    <div className="flip-card-back">
      <img src={BackLillyMoore} className='lily' />
    </div>
  </div>
</div>






        
        </>
    )
}
export default Profile