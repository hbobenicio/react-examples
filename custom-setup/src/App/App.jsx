import React, { Component } from 'react'
import './App.css'

class App extends Component {
  state = {
    title: 'App'
  }

  render = () => (
    <div id="App">
      <h1>{this.state.title}</h1>
    </div>
  )
}

export default App