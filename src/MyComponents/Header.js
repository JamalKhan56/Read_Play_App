import React from 'react'
import PropTypes from 'prop-types'


export default function Header(props) {
  return (
    <nav className="navbar">
    <div className="logo">{props.title}</div>
    <ul className="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <button className='login'>LOGIN</button>
  </nav>
  )
}
Header.propTypes={
  title : PropTypes.string
}
