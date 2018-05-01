import React from 'react'
import './Char.css'

const char = (props) => (
  <div className="Char" onClick={props.removeCharHandler}>
    {props.letter}
  </div>
)

export default char
