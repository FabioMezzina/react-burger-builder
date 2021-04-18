// componente di un bottone che prende come props.child la il testo del pulsante
// avrà un evento click collegato ad una funzione
// avrà uno stile con classi dinamiche attraverso props.btnType (che in questo caso sarà 'Danger' o 'Success')

import React from 'react';
import classes from './Button.css';

const button = ( props ) => (
  <button className={[classes.Button, classes[props.btnType]].join(' ')} onClick={props.clicked}>{props.children}</button>
);

export default button;