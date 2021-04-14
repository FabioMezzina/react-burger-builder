// Questa è la sezione in cui potrò costruire il mio hamburger
// Di base ho il mio wrapper Aux che contiene le mie sezioni principale
// Una sezione in cui mostro il Burger man mano che si crea
// Un'altra sezione in cui controllo gli elementi da aggiungere all'hamburger

import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
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
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    // price
    totalPrice: 4,
    // purchasable (per attivare il bottone ORDER NOW)
    purchasable: false,
    // purchasing (per attivare il componente Modal)
    purchasing: false,
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

    this.updatePurchaseState(updatedIngredients);
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
    this.updatePurchaseState(updatedIngredients);
  }

  // imposto la proprietà purchasable dello state per decidere se il mio bottone per l'ordine sarà o meno cliccabile
  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients).map(igKey => {
      return ingredients[igKey];
    }).reduce((s, c) => {
        return s + c;
      }, 0);
    
    this.setState({ purchasable: sum > 0 });
  }

  // imposto la proprietà purchasing dello state a true per mostrare il componente Modal
  purchaseHandler = () => {
    this.setState({purchasing: true});
  }

  // imposto la proprietà purchasing dello state a false per nascondere il componente Modal
  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  }

  // render hook
  render() {    
    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          <OrderSummary ingredients={this.state.ingredients}/>
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
          purchasable={this.state.purchasable}
          price={this.state.totalPrice}
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;