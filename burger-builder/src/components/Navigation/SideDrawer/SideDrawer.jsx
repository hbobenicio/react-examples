import React from 'react'
import Logo from '@/components/Logo/Logo'
import NavigationItems from '@/components/Navigation/NavigationItems/NavigationItems'
import classes from './SideDrawer.css'

export default (props) => {

  return (
    <div className={classes.SideDrawer}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};
