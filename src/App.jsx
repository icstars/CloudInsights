import './App.css'
import Button from './Components/Button'
import Header from './Components/Header'
import Search from './Components/Search'
import Profile from './Components/Profile'
import Menu from './components/Menu'
import Footer from './components/Footer'


function App() {

  return (
    <>
   
     {/* <p className='box1'>Box mode l </p>
    <p className='box2'>Box mode 2 </p>  */}
    <Header />
    <Menu />
    <Search />
    <Profile />
    <Button />
    <Footer />
  
  
    
    


   
  </>
  )
// --------------------------------------------------------------------


  function Box(){
    return(
      <div>
        <p>Number 2</p>
      </div>
    )
  }


}

export default App
