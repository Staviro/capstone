//styles
import './nav.css';

//components
import Container from '../../blocks/container/Container';

//modules
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = function() {
    return (
        <Container>
            <div className='nav-container'>
                <Link to="/">
                    <img alt="logo" src={require('../../../assets/images/Logo.png')} height="24"></img>
                </Link>
                <nav>
                    <ul>
                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/booking'}>Booking</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </Container>
    )
}

export default Nav;