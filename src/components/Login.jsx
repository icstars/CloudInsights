import Threshome from './images/ThreshomeLogo.png'
import { useNavigate } from 'react-router-dom';




function Login (){
    const navigate = useNavigate();
    return(
        <>
        

        <img src={Threshome} alt="The official Threshome logo" className='logo' />
         <form>
        <div className = "allboxx"> 
        <input type="text" name="Username" placeholder="  Username" required className="username"/> <br/>
       <input type="password" name=" password"  placeholder="  Password" required className = "password"/> <br/>
      <button onClick={() => {navigate('/Home')}} className='signbutton'> 
        <input type="submit" name="SignIn" className="submit" value="Sign In"/> 
        </button>
       
    </div>
 </form>

 <div className='signpass'>
 <h3 className="signup"><a href="Signup">Signup</a></h3>
    <h3 className="reset"><a href="RestPass.html">ResetPassword</a></h3>
    </div>       
    

     <a href="Terms.html" id="terms">Terms of service</a>
    <a href="https://www.google.com/maps/place/Thresholds/@41.9561835,-87.8178304,12z/data=!4m10!1m2!2m1!1sthreshold!3m6!1s0x880fd23f5b2bd3e7:0x4b94b1142aba4333!8m2!3d41.9561835!4d-87.6736348!15sCgl0aHJlc2hvbGSSARVtZW50YWxfaGVhbHRoX3NlcnZpY2XgAQA!16s%2Fg%2F1thd78j_?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" id='contact'>
    Contact Us</a>
     
        
        </>
    )
}

export default Login;