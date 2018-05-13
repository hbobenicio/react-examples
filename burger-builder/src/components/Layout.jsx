import React from 'react'
import Toolbar from '@/components/Navigation/Toolbar'
import SideDrawer from '@/components/Navigation/SideDrawer/SideDrawer'
import classes from './Layout.css'

const Layout = (props) => (
  <React.Fragment>
    {/* <div>Backdrop</div> */}
    <Toolbar />
    <SideDrawer />
    <main className={classes.Main}>
      {props.children}
    </main>
  </React.Fragment>
)

export default Layout
