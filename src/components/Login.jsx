import Threshome from './images/ThreshomeLogo.png'




function Login (){
    return(
        <>

        <img src={Threshome} alt="The official Threshome logo" className='logo' />
         <form>
        <div class = "form"> 
        <input type="text" name="Username" placeholder="  Username" required className="username"/> <br/>
       <input type="password" name=" password"  placeholder="  Password" required className = "password"/> <br/>
       <input type="submit" name="SignIn" className="submit" value="Sign In"/>
    </div>
 </form>
        
 <h3 className="signup"><a href="Signup.html">Signup</a></h3>
    <h3 className="rest"><a href="RestPass.html">RestPassword</a></h3>
    

    <footer> <a href="Terms.html" id="terms">Terms of service</a>
    <a href="contact" id="contact"> Contact Us</a>
    </footer> 
        
        </>
    )
}

export default Login;