import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import './Header.css'

const Header = (props) => {
  return (
    <header className="Header">
      <div className="upper-header">
        <div></div>
        <h1 className="header-title">SWAPI-box</h1>
        <Button favorites={props.favorites}/>
      </div>
      <nav>
        <Button />
        <Button />
        <Button />
      </nav>
    </header>
  )
}

Header.propTypes = {
  favorites: PropTypes.array.isRequired
}

export default Header;