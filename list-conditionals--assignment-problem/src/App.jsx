import React, { Component } from 'react';
import './App.css';

import Validation from './Validation/Validation'
import Char from './Char/Char'

class App extends Component {
  state = {
    inputValue: ''
  }

  inputChangedHandler = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  removedCharHandler = (index, event) => {
    const charList = Array.from(this.state.inputValue)

    const newCharList = [
      ...charList
    ]
    newCharList.splice(index, 1)

    const newInputValue = newCharList.join('')

    this.setState({
      inputValue: newInputValue
    })
  }

  renderCharList = () => {
    const charList = Array.from(this.state.inputValue)
    const charListView = charList.map((c, index) =>
      <Char key={index} letter={c}
        removeCharHandler={(event) => this.removedCharHandler(index, event)} />
    )

    return charListView
  }

  render = () => (
    <div id="App">
      <div>
        <input type="text"
          value={this.state.inputValue} onChange={this.inputChangedHandler}/>

        <Validation text={this.state.inputValue} />
      </div>

      <p>length: {this.state.inputValue.length}</p>

      <div>
        {this.renderCharList()}
      </div>
    </div>
  )
}

export default App;
