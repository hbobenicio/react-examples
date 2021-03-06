import React from 'react'
import Button from '@/components/UI/Button/Button'

export default class extends React.Component {
  /**
   * This could be a functional component, doesn't have to be a class.
   */
  componentWillUpdate() {
    console.log('[OrderSummary.componentWillUpdate]')
  }

  render() {
    const ingredientSummary = Object.entries(this.props.ingredients)
      .map(([key, value]) =>
        <li key={key}>
          <span style={{textTransform: 'capitalize'}}>{key}</span>: {value}
        </li>
      );
    // <li>Salad: 1</li>

    return (
      <React.Fragment>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        <Button type="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
        <Button type="Success" clicked={this.props.purchaseContinued}>Continue</Button>
      </React.Fragment>
    );
  }
}
