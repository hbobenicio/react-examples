import React from 'react'
import classes from './Layout.css'

const Layout = (props) => (
  <React.Fragment>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Main}>
      {props.children}
    </main>
  </React.Fragment>
)

export default Layout