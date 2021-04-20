// Componente di layout
// Avrò una barra di navigazione ed un main
// nel main uso props.children per poter riutilizzare questo layout per diversi contenuti possibili che potrò avere nel main
// il componente Aux è un HOC. Utilizzando props.children semplicemente ritorna tutto il contenuto (in questo caso il div e il main)

import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import classes from './Layout.css'; // importo il css module

class Layout extends Component { 
  state = {
    showSideDrawer: false,
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: true};
    });
  }

  render() {
    return (
      <Aux>
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
        <Toolbar opened={this.sideDrawerToggleHandler} />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    );
  }
  
  
}
export default Layout;