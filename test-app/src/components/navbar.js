
import { Link } from 'react-router-dom';

function Nav() {
  return (
      
    <nav className='navbar'>
      <div className='navbar-container'>
         
        <Link to='/' className='navbar-logo'>
          LOGO
        </Link>
        <ul className='nav-menu'>
          <li className='nav-item'>
            <Link to='/Home' className='nav-links'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Projects' className='nav-links'>
              Projects
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Education' className='nav-links'>
              Education
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Contact' className='nav-links'>
              Contact Us
            </Link>
          </li>
        </ul>
                         
      </div>
    </nav>
           
  );
}



export default Nav;