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
 <h3 className="signup"><a href="Signup.html">Signup</a></h3>
    <h3 className="rest"><a href="RestPass.html">RestPassword</a></h3>
    </div>       
    

    <footer> <a href="Terms.html" id="terms">Terms of service</a>
    <a href="contact" id="contact"> Contact Us</a>
    </footer> 
        
        </>
    )
}

export default Login;