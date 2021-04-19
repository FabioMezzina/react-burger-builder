// Componente di layout
// Avrò una barra di navigazione ed un main
// nel main uso props.children per poter riutilizzare questo layout per diversi contenuti possibili che potrò avere nel main
// il componente Aux è un HOC. Utilizzando props.children semplicemente ritorna tutto il contenuto (in questo caso il div e il main)

import React from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import classes from './Layout.css'; // importo il css module

const layout = (props) => (
  <Aux>
    {/* <div>Toolbar, SideDrawer, Backdrop</div> */}
    <SideDrawer />
    <Toolbar />
    <main className={classes.Content}>
      {props.children}
    </main>
  </Aux>
);

export default layout;