import React, { Component } from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  // se ho ho una modifica nella props show (quella che mostra modale e backdrop) allora vado avanti con il render
  // altrimenti non verrà fatto il re-render della modale, nè quindi del backdrop e nemmeno di OrderSummary (presente nella Modal in BurgerBuilder)
  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.show !== this.props.show) {
      return true;
    }
  }
  
  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
        <div className={classes.Modal} style={{transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: this.props.show ? '1' : '0'}}>
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;