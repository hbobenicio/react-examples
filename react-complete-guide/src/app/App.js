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
    ]
  }

  swapNameHandler = () => {
    //DONT DO THIS: this.state.people[0].name = 'Hugo Benicio'
    //use this.setState instead
    this.setState({
      ...this.state,
      people: [
        { name: 'Hugo Benício Miranda de Oliveira', age: 30 },
        { name: 'Janaina Meneses Lima Barbosa', age: 30 },
        { name: 'Gael', age: 1 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      ...this.state,
      people: [
        { name: event.target.value, age: 30 },
        { name: 'Janaina Meneses Lima Barbosa', age: 30 },
        { name: 'Gael', age: 1 }
      ]
    })
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

        <button type="button" style={buttonStyle}
          onClick={this.swapNameHandler}>Swap Names</button>

        <Person name={this.state.people[0].name} age={this.state.people[0].age}
          nameChangeHandler={this.nameChangedHandler}>
          <p>My hobby is programming</p>
        </Person>
        <Person name={this.state.people[1].name} age={this.state.people[1].age} />
        <Person name={this.state.people[2].name} age={this.state.people[2].age} />
      </div>
    )
  }
}

export default App;
