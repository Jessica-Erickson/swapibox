import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

const Button = ({ label , favorites , handleNavClick, isActive }) => {
  if (favorites) {
    return (
      <button className={`Button ${label} ${ isActive ? 'active' : '' }`}
              value={ label }
              onClick={() => handleNavClick(label)}
      >
        Favorites
        <div className="favorites-badge">
          {favorites.length}
        </div>
      </button>
    )
  } else {
    return (
      <input className={`Button ${label} ${ isActive ? 'active' : '' }`}
             type="button"
             value={ label }
             onClick={() => handleNavClick(label)}
      />
    )
  }
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  favorites: PropTypes.array,
  handleNavClick: PropTypes.func.isRequired,
  currentDisplay: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired
}

export default Button;