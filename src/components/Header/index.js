import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import './Header.css'

const Header = ({ favorites, handleNavClick }) => {
  return (
    <header className="Header">
      <div className="upper-header">
        <div></div>
        <h1 className="header-title">SWApi-Box</h1>
        <Button
          label='Favorites'
          favorites={favorites}
          handleNavClick={handleNavClick}
        />
      </div>
      <nav>
        <Button
          label='People' 
          handleNavClick={handleNavClick}
        />
        <Button
          label='Planets'
          handleNavClick={handleNavClick}
        />
        <Button
          label='Vehicles'
          handleNavClick={handleNavClick}
        />
      </nav>
    </header>
  )
}

Header.propTypes = {
  favorites: PropTypes.array.isRequired,
  handleNavClick: PropTypes.func.isRequired
}

export default Header;