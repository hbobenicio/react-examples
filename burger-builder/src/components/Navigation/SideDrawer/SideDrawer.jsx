import React from 'react'
import Logo from '@/components/Logo/Logo'
import NavigationItems from '@/components/Navigation/NavigationItems/NavigationItems'
import Backdrop from '@/components/UI/Backdrop/Backdrop'
import classes from './SideDrawer.css'

export default (props) => {
  const attachedClasses = [classes.SideDrawer];

  if (props.open) {
    attachedClasses.push(classes.Open)
  } else {
    attachedClasses.push(classes.Close)
  }

  return (
    <React.Fragment>
      <Backdrop show={props.open} clicked={props.closed}/>
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </React.Fragment>
  );
};
