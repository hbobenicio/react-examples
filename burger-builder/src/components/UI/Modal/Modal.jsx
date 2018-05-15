import React from 'react'
import classes from './Modal.css'
import Backdrop from '@/components/UI/Backdrop/Backdrop'

export default class extends React.Component {

  /**
   * This component must not update when props.show did not changed.
   * 
   * @param {*} nextProps 
   * @param {*} nextState 
   */
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show
  }

  componentWillUpdate() {
    console.log('[Modal.componentWillUpdate]')
  }

  render() {
    return (
      <React.Fragment>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}>
          
          {this.props.children}
        </div>
      </React.Fragment>
    )
  }
}
