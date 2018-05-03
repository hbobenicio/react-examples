import React from 'react'
import './Cockpit.css'

const cockpit = (props) => {
  // inline style, one way to scope stylings.
  // You loose css powers though (like pseudo selectors).
  // There is a better way to scope css...
  const buttonStyle = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    margin: '8px',
    cursor: 'pointer',
    textAlign: 'center'
  }

  if (props.showPeople) {
    buttonStyle.backgroundColor = 'red'
  }

  const classes = []
  if (props.people.length <= 2) {
    classes.push('red')
  }
  if (props.people.length <= 1) {
    classes.push('bold')
  }

  return (
    <div className="Cockpit">
      <h1>Hi, I'm a React App</h1>
      <p className={classes.join(' ')}>This is really working!</p>

      <div style={{textAlign: 'center'}}>
        <button type="button"
          key='btn1' style={buttonStyle}
          onClick={props.swapNameHandler}>Swap Names</button>

        <button type="button"
          key='btn2' style={buttonStyle}
          onClick={props.peopleToggleHandler}>Toggle People</button>
      </div>
    </div>
  )
}

export default cockpit