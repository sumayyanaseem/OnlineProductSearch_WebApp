import { Link } from 'react-router-dom';
import './index.css'

function NavbarComponent() {
    return (
        <div className="topnav">
            <Link className='active'>TEAM 52 </Link>
            <Link to="/contact" className='split'>Contact</Link>
            <Link to="/account" className='split'>Account</Link>
            <Link to="/login" className='split'>Login</Link>
            <Link to="/" className='split'>Home</Link>
            {/* <a href="#about" class="split">Contact</a>
            <a href="#about" class="split">Account</a>
            <a href="#about" class="split">Login</a> */}
        </div>
    );
}

export default NavbarComponent;