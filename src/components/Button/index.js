import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Button.css'

class Button extends Component {
  constructor() {
    super()
    this.state = {
      isActive: false
    }
  }

  render() {
    const { label , favorites , handleNavClick } = this.props

    if (favorites) {
      return (
        <button className={`Button ${label}`}
                onClick={() => {handleNavClick(label)}} 
        >
          Favorites
          <div className="favorites-badge">
            {favorites.length}
          </div>
        </button>
      )
    } else {
      return (
        <input className={`Button ${label}`} 
               type="button" 
               value={ label }
               onClick={() => {handleNavClick(label)}} 
        />
      )
    }
  }
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  favorites: PropTypes.array
}

export default Button;