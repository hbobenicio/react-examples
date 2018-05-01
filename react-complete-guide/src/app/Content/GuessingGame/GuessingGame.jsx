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

  toggleCheatBoxClickedHandler = () => {
    this.setState({
      showCheatBox: !this.state.showCheatBox
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

  renderCheatBox = () => {
    let cheatbox = null

    if (this.state.showCheatBox) {
      cheatbox = <span>The magic number is: { this.state.magicNumber }</span>
    }

    return cheatbox
  }

  render = () => (
    <div className="guessing-game">
      <div className="guessing-game-cheatbox">
        <button type="text" onClick={this.toggleCheatBoxClickedHandler}>Toggle Cheat Box</button>
        { this.renderCheatBox() }
      </div>
      
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
