import React from 'react'
import Logo from '@/components/Logo/Logo'
import NavigationItems from './NavigationItems/NavigationItems'
import classes from './Toolbar.css'

const Toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;
