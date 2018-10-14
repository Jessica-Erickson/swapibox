import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import './Header.css'

const Header = ({ favorites, handleNavClick, currentDisplay }) => {
  return (
    <header className="Header">
      <div className="upper-header">
        <div></div>
        <h1 className="header-title">SWApi-Box</h1>
        <Button
          label='Favorites'
          favorites={favorites}
          handleNavClick={handleNavClick}
          isActive={'Favorites' === currentDisplay}
        />
      </div>
      <nav>
        <Button
          label='People'
          handleNavClick={handleNavClick}
          isActive={'People' === currentDisplay}
        />
        <Button
          label='Planets'
          handleNavClick={handleNavClick}
          isActive={'Planets' === currentDisplay}
        />
        <Button
          label='Vehicles'
          handleNavClick={handleNavClick}
          isActive={'Vehicles' === currentDisplay}
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

export default Header;