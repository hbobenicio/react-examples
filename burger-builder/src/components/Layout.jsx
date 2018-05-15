import React from 'react'
import Toolbar from '@/components/Navigation/Toolbar'
import SideDrawer from '@/components/Navigation/SideDrawer/SideDrawer'
import classes from './Layout.css'

export default class extends React.Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false})
  }

  drawerToggleClickedHandler = () => {
    this.setState((prevState) => ({
      showSideDrawer: !prevState.showSideDrawer
    }))
  }

  render(){
    return (
      <React.Fragment>
        <Toolbar drawerToggleClicked={this.drawerToggleClickedHandler} />
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
        <main className={classes.Main}>
          {this.props.children}
        </main>
      </React.Fragment>
    )
  }
}
