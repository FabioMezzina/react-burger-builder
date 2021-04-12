// Questa è la sezione in cui potrò costruire il mio hamburger
// Di base ho il mio wrapper Aux che contiene le mie sezioni principale
// Una sezione in cui mostro il Burger man mano che si crea
// Un'altra sezione in cui controllo gli elementi da aggiungere all'hamburger

import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Aux from '../../hoc/Aux';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  bacon: 0.7,
  meat: 1.3,
}

class BurgerBuilder extends Component {
  state = {
    // ingredients state
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 4,
      meat: 2,
    },
    // price
    totalPrice: 4,
  }

  // aggiungo un ingrediente prendendo il vecchio numero e sommandoci uno
  addIngredientHandler = (type) => {
    // update ingredients
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    }
    updatedIngredients[type] = updateCount;

    // update price
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    });
  }

  // rimuovo un ingrediente prendendo il vecchio numero e sottraendoci uno
  removeIngredientHandler = (type) => {
    // update ingredients
    const oldCount = this.state.ingredients[type];
    if(oldCount <= 0) {
     return;
    }
    const updatedIngredients = {
      ...this.state.ingredients,
    }
    const updateCount = oldCount - 1;
    updatedIngredients[type] = updateCount;

    // update price
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    });
  }

  // render hook
  render() {    
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;