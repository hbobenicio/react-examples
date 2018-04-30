import React, { Component } from 'react'
import { randomInRange } from '../../util/random.util'

class GuessingGame extends Component {
  state = {
    magicNumber: randomInRange(1, 100),
    showCheatBox: false,
    guessInput: ''
  }

  guessChangedHandler = (event) => {
    this.setState({
      guessInput: event.target.value
    })
  }

  checkGuess = () => {
    const guessNumber = parseInt(this.state.guessInput, 10)

    if (guessNumber === this.state.magicNumber) {
      console.log('You guessed it right!')
    } else {
      console.log('You guessed it wrong!')
    }
  }

  render = () => (
    <div className="guessing-game">
      <p className="guessing-game-cheatbox">
        The magic number is: { this.state.magicNumber }
      </p>
      <div>
        <label htmlFor="guessNumber">Enter your guess:</label>
        <input id="guessNumber"
          type="text"
          value={this.state.guessInput} onChange={this.guessChangedHandler} />

        <button type="button" onClick={this.checkGuess}>Check Guess</button>
      </div>
    </div>
  )
}

export default GuessingGame
