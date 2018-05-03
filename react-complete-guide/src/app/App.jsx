import React, { Component } from 'react';
import './App.css'

import Person from './Person/Person'

class App extends Component {
  state = {
    people: [
      { id: 1, name: 'Hugo', age: 30 },
      { id: 2, name: 'Janaina', age: 30 },
      { id: 3, name: 'Gael', age: 1 }
    ],
    showPeople: false
  }

  swapNameHandler = () => {
    //DONT DO THIS: this.state.people[0].name = 'Hugo Benicio'
    //use this.setState instead
    this.setState({
      people: [
        { id: 1, name: 'Hugo Benício Miranda de Oliveira', age: 30 },
        { id: 2, name: 'Janaina Meneses Lima Barbosa', age: 30 },
        { id: 3, name: 'Gael', age: 1 }
      ]
    })
  }

  nameChangedHandler = (personId, event) => {
    const personIndex = this.state.people.findIndex(p => p.id === personId)
    const newPerson = {
      ...this.state.people[personIndex],
      name: event.target.value
    }

    const newPeople = [...this.state.people]
    newPeople[personIndex] = newPerson

    this.setState({
      people: newPeople
    })
  }

  peopleToggledHandler = () => {
    this.setState({
      showPeople: !this.state.showPeople
    })
  }

  removedPersonHandler = (id, event) => {
    const people = [...this.state.people]
    people.splice(id, 1)

    this.setState({
      people
    })
  }

  renderPeople = () => {
    let people = null

    if (this.state.showPeople) {
      people =
        <div>
          {
            this.state.people.map((person, index) =>
              <Person key={person.id}
                name={person.name} age={person.age}
                nameChangeHandler={(event) => this.nameChangedHandler(person.id, event)}
                removeHandler={(event) => this.removedPersonHandler(index, event)}/>
                //  nameChangeHandler={this.nameChangedHandler.bind(this, person.id)} />
            )
          }
        </div>
    }

    return people
  }

  render = () => {
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

    if (this.state.showPeople) {
      buttonStyle.backgroundColor = 'red'
    }

    const classes = []
    if (this.state.people.length <= 2) {
      classes.push('red')
    }
    if (this.state.people.length <= 1) {
      classes.push('bold')
    }

    return (
      <div id="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>

        <div style={{textAlign: 'center'}}>
          <button type="button"
            key='btn1' style={buttonStyle}
            onClick={this.swapNameHandler}>Swap Names</button>

          <button type="button"
            key='btn2' style={buttonStyle}
            onClick={this.peopleToggledHandler}>Toggle People</button>
        </div>

        { this.renderPeople() }
      </div>
    )
  }
}

export default App
