//styles
import './nav.css';

const Nav = function() {
    return (
        <div className='nav-container'>
            <img src={require('../../../assets/images/Logo.png')} height="24"></img>
            <nav>
                <ul>
                    <li>
                        <a href='/'>Link</a>
                    </li>
                    <li>
                        <a href='/'>Link</a>
                    </li>
                    <li>
                        <a href='/'>Link</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;