import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ display }) => {
  return (
    <header className={ display ? 'Header' : 'display-none'}>
      <div className='upper-header'>
        <div></div>
        <NavLink to='/' className='header-title'>
          <h1>SWApi-Box</h1>
        </NavLink>
        <NavLink to='/favorites' className='Button favorites'>
          Favorites
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
  display: PropTypes.bool.isRequired
}

export default Header;