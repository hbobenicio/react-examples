import React, { Component } from 'react';

import Header from './Header/Header'
import Content from './Content/Content'
import Person from './Person/Person'

class App extends Component {
  state = {
    people: [
      { name: 'Hugo', age: 30 },
      { name: 'Janaina', age: 30 },
      { name: 'Gael', age: 1 }
    ],
    showPeople: false
  }

  swapNameHandler = () => {
    //DONT DO THIS: this.state.people[0].name = 'Hugo Benicio'
    //use this.setState instead
    this.setState({
      people: [
        { name: 'Hugo Benício Miranda de Oliveira', age: 30 },
        { name: 'Janaina Meneses Lima Barbosa', age: 30 },
        { name: 'Gael', age: 1 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      people: [
        { name: event.target.value, age: 30 },
        { name: 'Janaina Meneses Lima Barbosa', age: 30 },
        { name: 'Gael', age: 1 }
      ]
    })
  }

  peopleToggledHandler = () => {
    this.setState({
      showPeople: !this.state.showPeople
    })
  }

  renderPeople = () => {
    let people = null

    if (this.state.showPeople) {
      const personTemplate = person => <Person name={person.name} age={person.age} />
      people = <div>
        { this.state.people.map(personTemplate) }
      </div>
    }

    return people
  }

  render = () => {
    // inline style, one way to scope stylings.
    // You loose css powers though. There is
    // a better way to scope css...
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      textAlign: 'center'
    }

    return (
      <div id="App">
        <Header />

        <hr />

        <Content />

        <hr />

        <div style={{textAlign: 'center'}}>
          <button type="button" style={buttonStyle}
            onClick={this.swapNameHandler}>Swap Names</button>

          <button type="button" style={buttonStyle}
            onClick={this.peopleToggledHandler}>Toggle People</button>
        </div>


        { this.renderPeople() }
      </div>
    )
  }
}

export default App;
