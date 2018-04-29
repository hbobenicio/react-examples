import React from 'react'

const person = (props) => {
  return (
    <div>
      <p>I'm a {props.name} and I'm {props.age} years old.</p>
      {props.children}
    </div>
  )
}

export default person
