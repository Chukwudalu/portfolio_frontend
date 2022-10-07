import { Container, Row, Col } from 'react-bootstrap'
import  logo  from '../assets/personalLogo3.svg'

function Footer() {
  return (
    <footer className='footer'>
        <div className='footer__logoContainer'>
            <img src={logo} alt="footer logo" className='footer__logo'/>
        </div>
        <div className='footer__textContainer'>
            <p>Designed and Developed by Jeremiah Okwuolisa</p>
        </div>
    
        
    </footer>
  )
}

export default Footer