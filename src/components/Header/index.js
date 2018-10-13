import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import './Header.css'

const Header = (props) => {
  return (
    <header className="Header">
      <div className="upper-header">
        <div></div>
        <h1 className="header-title">SWApi-Box</h1>
        <Button
          label='Favorites'
          favorites={props.favorites}
        />
      </div>
      <nav>
        <Button
          label='People'
        />
        <Button
          label='Planets'
        />
        <Button
          label='Vehicles'
        />
      </nav>
    </header>
  )
}

Header.propTypes = {
  favorites: PropTypes.array.isRequired
}

export default Header;