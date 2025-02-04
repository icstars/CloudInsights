import Pfp from "./images/Lily.png"



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
    <img src={Pfp} alt="Lily" className="lily" />
    </div>
    <div className="flip-card-back">
      <h1>John Doe</h1>
      <p>Architect & Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div>






        
        </>
    )
}
export default Profile