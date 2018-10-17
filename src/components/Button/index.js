import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Button.css'

const Button = ({ label, favorites, handleNavClick, isActive }) => {
  if (favorites !== undefined) {
    const lowerLabel = label.toLowerCase()

    return (
      <NavLink to={`/${lowerLabel}`}
               className={`Button ${lowerLabel}`}
               onClick={() => handleNavClick(lowerLabel)}
      >
        Favorites
        <div className="favorites-badge">
          {favorites}
        </div>
      </NavLink>
    )
  } else {
    const lowerLabel = label.toLowerCase()

    return (
      <NavLink to={`/${lowerLabel}`}
               className={`Button ${lowerLabel}`}
               onClick={() => handleNavClick(lowerLabel)}>
        {label}
      </NavLink>

    )
  }
}

Button.defaultProps = { isActive: false }

Button.propTypes = {
  label: PropTypes.string.isRequired,
  favorites: PropTypes.number,
  handleNavClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired
}

export default Button;