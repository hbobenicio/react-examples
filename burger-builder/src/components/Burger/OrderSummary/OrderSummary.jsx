import React from 'react'
import Button from '@/components/UI/Button/Button'

const OrderSummary = (props) => {
  const ingredientSummary = Object.entries(props.ingredients)
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
      <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button type="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
      <Button type="Success" clicked={props.purchaseContinued}>Continue</Button>
    </React.Fragment>
  );
};

export default OrderSummary;