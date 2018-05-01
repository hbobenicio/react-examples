import React, { Component } from 'react';

import Header from './Header/Header'
import Content from './Content/Content'
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

  nameChangedHandler = (id, event) => {
    const personIndex = this.state.people.findIndex(p => p.id === id)
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

  renderPeople = () => {
    let people = null

    if (this.state.showPeople) {
      const personTemplate = person =>
        <Person key={person.id}
          name={person.name} age={person.age}
          nameChangeHandler={(event) => this.nameChangedHandler(person.id, event)} />
      // const personTemplate = person =>
      //   <Person key={person.id}
      //     name={person.name} age={person.age}
      //     nameChangeHandler={this.nameChangedHandler.bind(this, person.id)} />
        
      people = <div>{
        this.state.people.map(personTemplate)
      }</div>
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
