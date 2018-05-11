import React from 'react'

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.css'

const Burger = (props) => {

  const renderBurgersByType = (type, quantity) => Array.apply(null, {length:  quantity})
    .map((_, i) => <BurgerIngredient key={type + i} type={type} />)

  const reduceByConcat = (arr, el) => arr.concat(el);

  const transformedIngredients = Object.keys(props.ingredients)
    .map(key => renderBurgersByType(key, props.ingredients[key]))
    .reduce(reduceByConcat, [])
  
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;