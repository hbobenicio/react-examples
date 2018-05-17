import React from 'react'
import {CounterContext} from './App'

export default function(props) {
  return (
    <CounterContext.Consumer>{ counter => (
      <div className="Counter">
        <button onClick={props.onDecrement}>[-]</button>
        <span>{counter.count}</span>    
        <button onClick={props.onIncrement}>[+]</button>
      </div>
    )}</CounterContext.Consumer>
  )
}
