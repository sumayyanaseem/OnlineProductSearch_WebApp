import { NavLink } from 'react-router-dom';
import './index.css'
import teamLogo from '../../assets/team-52-logo.png'

function NavbarComponent() {
    return (
        <div className="top-nav">
            <div>
                <img src={teamLogo} className='team-logo' alt='Team Logo'></img>
            </div>
            <div>
                <NavLink to="/contact" className='nav-link'>Contact</NavLink>
                <NavLink to="/account" className='nav-link'>Account</NavLink>
                <NavLink to="/login" className='nav-link'>Login</NavLink>
                <NavLink to="/" className='nav-link' activeClassName="nav-link.active">Home</NavLink>
            </div>
        </div >
    );
}

export default NavbarComponent;