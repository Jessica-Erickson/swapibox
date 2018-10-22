import React from 'react';
import { NavLink , Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ display , favorites }) => {
  return (
    <header className={ display ? 'Header' : 'display-none'}>
      <div className='upper-header'>
        <div></div>
        <Link to='/' className='header-title'>
          <h1>SWApi-Box</h1>
        </Link>
        <NavLink to='/favorites' className='Button favorites'>
          Favorites
          <div className="favorites-badge">
            {favorites}
          </div>
        </NavLink>
      </div>
      <nav>
        <NavLink to='/people' className='Button people'>
          People
        </NavLink>
        <NavLink to='/planets' className='Button planets'>
          Planets
        </NavLink>
        <NavLink to='/vehicles' className='Button vehicles'>
          Vehicles
        </NavLink>
      </nav>
    </header>
  )
}

Header.propTypes = {
  display: PropTypes.bool.isRequired,
  favorites: PropTypes.number.isRequired
}

export default Header;