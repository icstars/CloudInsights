import Threshome from './images/ThreshomeLogo.png'
import Menu from './Menu';
import Footer from './Footer';

function Chatbot (){
return (
    <>
    
    <Menu />
    {/* <Footer /> */}

    <img src={Threshome} alt="The official Threshome logo" className='chatlogo' />
      <div className="Chatbot">
        
      </div>
    
    </>
  );
}
export default Chatbot;