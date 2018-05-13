import React from 'react'
import NavigationItem from './NavigationItem'
import classes from './NavigationItems.css'

export default (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="#" active>Burger Builder</NavigationItem>
    <NavigationItem link="#"       >Checkout</NavigationItem>
  </ul>
);
