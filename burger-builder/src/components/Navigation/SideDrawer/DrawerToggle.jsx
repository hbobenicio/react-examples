import React from 'react'
import classes from './DrawerToggle.css'

export default (props) => (
  <div className={classes.DrawerToggle} onClick={props.clicked}>
    {/* Hamburger Lines */}
    <div></div>
    <div></div>
    <div></div>
  </div>
)
