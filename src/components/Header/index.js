import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from '../Button'
import './Header.css'

const Header = ({ favorites, handleNavClick, currentDisplay }) => {
  return (
    <header className="Header">
      <div className="upper-header">
        <div></div>
        <NavLink to='/' className="header-title">
          <h1>SWApi-Box</h1>
        </NavLink>
        <Button
          label='Favorites'
          favorites={favorites}
          handleNavClick={handleNavClick}
          isActive={'favorites' === currentDisplay}
        />
      </div>
      <nav>
        <Button
          label='People'
          handleNavClick={handleNavClick}
          isActive={'people' === currentDisplay}
        />
        <Button
          label='Planets'
          handleNavClick={handleNavClick}
          isActive={'planets' === currentDisplay}
        />
        <Button
          label='Vehicles'
          handleNavClick={handleNavClick}
          isActive={'vehicles' === currentDisplay}
        />
      </nav>
    </header>
  )
}

Header.propTypes = {
  favorites: PropTypes.number.isRequired,
  handleNavClick: PropTypes.func.isRequired,
  currentDisplay: PropTypes.string.isRequired
}