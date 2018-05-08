import React from 'react'
import PropTypes from 'prop-types'
import { AuthContext } from '../../../containers/App'
import './Person.css'

/**
 * Person Component.
 */
class Person extends React.Component {

  constructor(props) {
    super(props)

    console.log('[Person.constructor]')

    // React 16.3 Way:
    this.inputElementRef = React.createRef()
  }

  componentDidMount() {
    // Reference to elements are only accessible after rendering (like componentDidMount)
    console.log('[Person.componentDidMount] myInputRef:', this.inputElementRef)
    if (this.props.position === 0) {

      // Old way:
      //   this.inputElementRef.focus()
      // React 16.3 way:
      this.inputElementRef.current.focus()
    }
  }

  /**
   * The render function.
   * 
   * @param {function(event: Event)} props.removeHandler - Called when the remove button is clicked
   * @param {function(event: Event)} props.nameChangeHandler - Called when the persons name change
   */
  render() {
    return (
      <div className="Person">
        <div className="action-bar">
          <AuthContext.Consumer>
            {
              // Old Way
              // this.props.isAuthenticated ? <span className="red">Authenticated</span> : null

              // React 16.3 way (consuming contexts)
              auth => auth ? <span className="red">Authenticated</span> : null
            }
          </AuthContext.Consumer>

          <button type="text" onClick={this.props.removeHandler}>X</button>
        </div>

        <p>I'm a {this.props.name} and I'm {this.props.age} years old.</p>
        {this.props.children}
        <input type="text"

          // Old way:
          // ref={(el) => {this.inputElementRef = el}}
          // React 16.3 way:
          ref={this.inputElementRef}

          onChange={this.props.nameChangeHandler} />
      </div>
    )
  }
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  position: PropTypes.number,
  removeHandler: PropTypes.func,
  nameChangeHandler: PropTypes.func,
}

export default Person
