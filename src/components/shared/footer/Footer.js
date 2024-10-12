import { Link } from 'react-router-dom';
import Container from '../../blocks/container/Container';
import './footer.css';

const Footer = function() {
    return (
        <footer className='footer'>
            <Container>
                <div className='footer-logo'>
                    <img alt='logo' width={240} src={require('../../../assets/images/Logo.png')}></img>
                </div>
                <div className='footer-section footer-links'>
                    <h3>Links</h3>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/booking">Booking</Link>
                        </li>
                        <li>
                            <Link to="/https://www.instagram.com/">Instagram</Link>
                        </li>
                        <li>
                            <Link to="/https://www.x.com/">X</Link>
                        </li>
                    </ul>
                </div>
                <div className='footer-section footer-contact'>
                    <h3>Contact</h3>
                    <ul>
                        <li>
                            <address>244 Grove Street, Chicago</address>
                        </li>
                        <li>
                            (012) 123 3456
                        </li>
                        <li>
                            <a href='mailto:info@littelemon.com'>info@littelemon.com</a>
                        </li>
                    </ul>
                </div>
                <p>&copy; Little Lemon 2024</p>
            </Container>
        </footer>
    )
}

export default Footer;