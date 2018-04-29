import React, { Component } from 'react'
import { randomInRange } from '../../util/random.util'

class GuessingGame extends Component {
  constructor(props) {
    super(props)

    this.state = {
      magicNumber: randomInRange(1, 100),
      showCheatBox: false
    }
  }

  render = () => (
    <p className="guessing-game-cheatbox">
      The magic number is: { this.state.magicNumber }
    </p>
  )
}

export default GuessingGame
