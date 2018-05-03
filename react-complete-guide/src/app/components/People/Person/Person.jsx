import React from 'react'
import './Person.css'

/**
 * Person Component.
 * 
 * @param {function(event: Event)} props.removeHandler - Called when the remove button is clicked
 * @param {function(event: Event)} props.nameChangeHandler - Called when the persons name change
 */
const person = (props) => {

  return (
    <div className="Person">
      <div className="action-bar">
        <button type="text" onClick={props.removeHandler}>X</button>
      </div>

      <p>I'm a {props.name} and I'm {props.age} years old.</p>
      {props.children}
      <input type="text" onChange={props.nameChangeHandler} />
    </div>
  )
}

export default person
