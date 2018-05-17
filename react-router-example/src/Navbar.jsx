import React from 'react'
import {withRouter} from 'react-router-dom'
import NavbarItem from './Navbar/NavbarItem'

function Navbar(props) {
  return (
    <nav className="navbar navbar-light bg-light">
      <ul className="nav flex-column">
        <NavbarItem path="/" text="Homepage" active={props.location.pathname === '/'} />
        <NavbarItem path="/users" text="Users" active={props.location.pathname === '/users'} />
      </ul>
    </nav>
  )
}

export default withRouter(Navbar)