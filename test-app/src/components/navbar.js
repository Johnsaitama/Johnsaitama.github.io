
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className='nav'>
      <div className='nav-container'>
        <h1 className='nav-title'></h1>
        <ul className='nav-menu'>
          <li className='nav-item'>
            <Link to='/Home' className='nav-link'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Projects' className='nav-link'>
              Projects
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Education' className='nav-link'>
              Education
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Contact' className='nav-link'>
              Contact Info
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;