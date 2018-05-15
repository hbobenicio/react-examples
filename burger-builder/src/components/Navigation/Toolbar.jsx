import React from 'react'
import Logo from '@/components/Logo/Logo'
import NavigationItems from './NavigationItems/NavigationItems'
import DrawerToggle from './SideDrawer/DrawerToggle'
import classes from './Toolbar.css'

const Toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div>
      <DrawerToggle clicked={props.drawerToggleClicked} />
    </div>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;
