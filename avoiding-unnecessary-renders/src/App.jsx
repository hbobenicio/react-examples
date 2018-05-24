//@flow
import React from 'react'
import Box from './Box'

type State = {
  valueA: number,
  valueB: number
}

class App extends React.Component<{}, State> {
  state = {
    valueA: 10,
    valueB: 20
  }

  handleBoxAClick = (): void => {
    this.setState((prevState: State) => ({
      valueA: prevState.valueA + 1
    }))
  }

  handleBoxBClick = (): void => {
    this.setState((prevState: State) => ({
      valueB: prevState.valueB + 1
    }))
  }

  render() {
    console.log('[App.render]')

    return (
      <div className="App">
        <Box label="A" color="blue" value={this.state.valueA} />
        <Box label="B" color="red" value={this.state.valueB} />
        <hr/>

        <button onClick={this.handleBoxAClick}>Increment Box A (blue)</button>
        <button onClick={this.handleBoxBClick}>Increment Box B (red)</button>
      </div>
    );
  }
}

export default App;
