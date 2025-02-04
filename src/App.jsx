import Button from './Components/Button'
import Header from './Components/Header'
import Search from './Components/Search'
import Profile from './Components/Profile'
import Menu from './components/Menu'
import Footer from './components/Footer'
import Lily from './components/Pfp'
import './App.css'
import Copilot from './components/Copilot'
import ProfileCard from './components/Profilecard'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Log from './Pages/log'
import Home from './Pages/Home'
import Bot from './Pages/Bot'
import Login from './components/Login'
import './Logged.css'
import Error from './Pages/Error'
import Personal from './Pages/Personal'
import Settings from './Pages/Settings'
import Members from './Pages/Members'
import Signup from './Pages/Signup'




function App() {

  return (
    <>
    
    {/* <Login /> */}
    
   

         <Router>
           <Routes>
            
             <Route path='/' element={<Log/>} />
             <Route path='/Home' element={<Home/>} />
             <Route path='/Chat' element={<Bot/>} />
             <Route path='/Personal' element={<Personal/>} />
             <Route path='/Settings' element={<Settings/>} />
             <Route path='/Members' element={<Members/>} />
             <Route path='/Signup' element={<Signup/>} />
             
             
             
             
             <Route path='*' element={<Error/>} />
              




            
         </Routes>
           </Router>



      {/* <Header />
    <Menu />
    <Search />
    <Profile />
    <Lily />
    <Button />
    <Footer />  
     <Copilot /> 
    */}
  
  
   
    </>
  
  )

}

export default App
