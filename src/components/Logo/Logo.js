import React from 'react';
// rende consapevole webpack che stiamo prendendo un img. Avrò una stringa al path
// in produzione un path statico non funzionerebbe, in quanto i miei file compilati non sarebbero più in src!!
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = ( props ) => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="BurgerBuilder"></img>
  </div>
);

export default logo;