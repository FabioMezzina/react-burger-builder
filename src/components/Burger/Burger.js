// Questo è il componente dell'hamburger creato
// Farà un return degli ingredienti che si saranno scelti per comporlo (il componente BurgerIngredient)

// dal componente Burger arriva un oggetto -ingredients- che trasfomro in un array per fare il .map()

import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const burger = ( props ) => {
  /**
   * Creo un array con le key (stringhe ingrediente) dell'oggetto ingredients e faccio il map per creare un array di n elementi
   * dove n è uguale al value corrispettivo alla key in ingredients. Faccio il map su questo array per avere n return di BurgerIngredient!
   */
  let ingredientsArr = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])]
        .map((_, i) => {
          return <BurgerIngredient key={igKey + i} type={igKey}/>;
        });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    });
  
  if(ingredientsArr.length === 0) {
    ingredientsArr = <p>Please start adding ingredients!</p>
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredientsArr}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default burger;