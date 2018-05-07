import React, { Component } from 'react';
import './App.css'

import Cockpit from '../components/Cockpit/Cockpit'
import People from '../components/People/People'
import WithClass from '../hoc/WithClass';
// import Person from '../components/People/Person/Person'

class App extends Component {
  state = {
    people: [
      { id: 1, name: 'Hugo', age: 30 },
      { id: 2, name: 'Janaina', age: 30 },
      { id: 3, name: 'Gael', age: 1 }
    ],
    showPeople: false,
    toggleClicked: 0
  }

  constructor(props) {
    super(props)
    console.log('[App.constructor] props:', props, 'state:', this.state)
  }

  componentWillMount() {
    console.log('[App.componentWillMount]')
  }

  componentDidMount() {
    console.log('[App.componentDidMount]')
  }

  componentWillReceiveProps(nextProps) {
    console.log('[App.componentWillReceiveProps] nextProps:', nextProps)
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
    // this.setState({
    //   showPeople: !this.state.showPeople,
    //   toggleClicked: this.state.toggleClicked + 1
    // })

    // Use the Function syntax if there is the
    // danger that this setState doesn't finish
    // before other setStates from the app.
    // Remember... this.setState({}) is async.
    // this.setState(() => ({})) is ok though.
    this.setState((prevState, props) => ({
      showPeople: !prevState.showPeople,
      toggleClicked: prevState.toggleClicked + 1
    }))
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
    console.log('[App.render]')

    let people = this.renderPeople()

    return (
      <WithClass classes="App">
        <Cockpit people={this.state.people}
          appTitle={this.props.title}
          showPeople={this.state.showPeople}
          peopleToggleHandler={this.peopleToggledHandler}
          swapNameHandler={this.swapNameHandler} />

        { people }
      </WithClass>
    )
  }
}

export default App
