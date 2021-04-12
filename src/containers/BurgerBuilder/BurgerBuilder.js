// Questa è la sezione in cui potrò costruire il mio hamburger
// Di base ho il mio wrapper Aux che contiene le mie sezioni principale
// Una sezione in cui mostro il Burger man mano che si crea
// Un'altra sezione in cui controllo gli elementi da aggiungere all'hamburger

import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Aux from '../../hoc/Aux';

class BurgerBuilder extends Component {
  state = {
    // ingredients state
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2,
    }
  }

  // render hook
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;