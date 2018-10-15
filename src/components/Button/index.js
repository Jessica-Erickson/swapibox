import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

const Button = ({ label, favorites, handleNavClick, isActive }) => {
  if (favorites !== undefined) {
    const lowerLabel = label.toLowerCase()

    return (
      <button className={`Button ${lowerLabel} ${ isActive ? 'active' : '' }`}
              value={ label }
              onClick={() => handleNavClick(lowerLabel)}
      >
        Favorites
        <div className="favorites-badge">
          {favorites}
        </div>
      </button>
    )
  } else {
    const lowerLabel = label.toLowerCase()

    return (
      <input className={`Button ${lowerLabel} ${ isActive ? 'active' : '' }`}
             type="button"
             value={ label }
             onClick={() => handleNavClick(lowerLabel)}
      />
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