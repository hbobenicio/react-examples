import React, { Component } from 'react';
import './App.css'

import Cockpit from '../components/Cockpit/Cockpit'
import People from '../components/People/People'
import WithClass from '../hoc/WithClass';
// import Person from '../components/People/Person/Person'

// React 16.3 way:
export const AuthContext = React.createContext(false)
// PS.: Providers vs Consumers

class App extends Component {
  state = {
    people: [
      { id: 1, name: 'Hugo', age: 30 },
      { id: 2, name: 'Janaina', age: 30 },
      { id: 3, name: 'Gael', age: 1 }
    ],
    showPeople: false,
    toggleClicked: 0,
    authenticated: false
  }

  constructor(props) {
    super(props)
    console.log('[App.constructor] props:', props, 'state:', this.state)
  }

  // Old Way (deprecated):
  // componentWillMount() {
  //   console.log('[App.componentWillMount]')
  // }

  // Old Way (deprecated):
  // componentDidMount() {
  //   console.log('[App.componentDidMount]')
  // }

  // Old Way (deprecated):
  // componentWillReceiveProps(nextProps) {
  //   console.log('[App.componentWillReceiveProps] nextProps:', nextProps)
  // }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('[App.getDerivedStateFromProps] nextProps:', nextProps, 'prevState:', prevState)
    return prevState
  }

  componentDidUpdate() {
    console.log('[App.componentDidUpdate]')
  }

  getSnapshotBeforeUpdate() {
    console.log('[App.getSnapshotBeforeUpdate]')
  }

  // PS.: Some lifecycle hooks are now deprecated (since 16.3)
  // Check the docs to see which to avoid.

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
          removeHandler={this.removedPersonHandler}

          // Old way:
          // isAuthenticated={this.state.authenticated}
          />
      </div>
    }

    return null
  }

  loginHandler = () => {
    this.setState({authenticated: true})
  }

  render() {
    console.log('[App.render]')

    let people = this.renderPeople()

    return (
      <WithClass classes="App">
        <Cockpit people={this.state.people}
          appTitle={this.props.title}
          showPeople={this.state.showPeople}
          login={this.loginHandler}
          peopleToggleHandler={this.peopleToggledHandler}
          swapNameHandler={this.swapNameHandler} />

        <AuthContext.Provider value={this.state.authenticated}>
          { people }
        </AuthContext.Provider>
      </WithClass>
    )
  }
}

export default App
