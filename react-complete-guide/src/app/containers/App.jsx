import React, { Component } from 'react';
import './App.css'

import Cockpit from '../components/Cockpit/Cockpit'
import People from '../components/People/People'
// import Person from '../components/People/Person/Person'

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
    if (this.state.showPeople) {
      return <div>
        <People people={this.state.people}
          nameChangeHandler={this.nameChangedHandler}
          removeHandler={this.removedPersonHandler} />
      </div>
    }

    return null
  }

  render() {
    return (
      <div className="App">
        <Cockpit people={this.state.people}
          appTitle={this.props.title}
          showPeople={this.state.showPeople}
          peopleToggleHandler={this.peopleToggledHandler}
          swapNameHandler={this.swapNameHandler} />

        { this.renderPeople() }
      </div>
    )
  }
}

export default App
