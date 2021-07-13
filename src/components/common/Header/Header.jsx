import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = (props) => {
  return (
    <header className="Header">
      Bootcamp Colombia
      <nav>
        {props.routes.map(route => (
          <NavLink to={route.to} exact={route.exact}>
            {route.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Header;