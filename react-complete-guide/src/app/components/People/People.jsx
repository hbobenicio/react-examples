import React from 'react'

import Person from './Person/Person'

/**
 * People Component.
 * 
 * Renders a list of Person
 * 
 * @param {Array<Person>} props.people The list of Person to be rendered
 * @param {function(event: Event)} props.removeHandler Called when the remove button is clicked
 * @param {function(event: Event)} props.nameChangeHandler Called when the persons name change
 */
const people = (props) => (
  props.people.map((person, index) =>
    <Person key={person.id}
      name={person.name} age={person.age}
      nameChangeHandler={event => props.nameChangeHandler(person.id, event)}
      removeHandler={props.removeHandler.bind(this, index)}/>
  )
)

export default people