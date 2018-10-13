import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Button.css'

class Button extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    const { label } = this.props

    if (this.props.favorites) {
      return (
        <button className={`Button ${label}`}>
          Favorites
          <div className="favorites-badge">
            {this.props.favorites.length}
          </div>
        </button>
      )
    } else {
      return (
        <input className={`Button ${label}`} type="button" value={ label }/>
      )
    }
  }
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  favorites: PropTypes.array
}

export default Button;