import React, { Component } from 'react';
import Counter from './Counter';

export const CounterContext = React.createContext({
  count: 0
})

class App extends Component {
  state = {
    counter: {
      count: 0
    }
  }

  handleDecrement = () => {
    this.setState({
      counter: {
        count: this.state.counter.count - 1
      }
    })
  }

  handleIncrement = () => {
    this.setState({
      counter: {
        count: this.state.counter.count + 1
      }
    })
  }

  render() {
    return (
      <div className="App">
        <CounterContext.Provider value={this.state.counter}>
          <Counter
            onDecrement={this.handleDecrement}
            onIncrement={this.handleIncrement} />
        </CounterContext.Provider>
      </div>
    );
  }
}

export default App;
