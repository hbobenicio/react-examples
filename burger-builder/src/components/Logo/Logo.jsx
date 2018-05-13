import React from 'react'
import classes from './Logo.css'
import logoUrl from '@/assets/images/burger-logo.png'

const Logo = (props) => (
  <div className={classes.Logo}>
    <img src={logoUrl} alt="Burger Logo" />
  </div>
);

export default Logo;
