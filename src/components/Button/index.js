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

  handleClick = (event) => {
    const { value } = event.target

    this.props.handleNavClick(value)
    this.setState({ isActive: true })
  }

  render() {
    const { label , favorites , handleNavClick } = this.props
    const { isActive } = this.state

    if (favorites) {
      return (
        <button className={`Button ${label} ${ isActive ? 'active' : '' }`}
                value={ label }
                onClick={this.handleClick}
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
               onClick={this.handleClick}
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