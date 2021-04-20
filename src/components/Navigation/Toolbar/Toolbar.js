// componente di una toolbar, avrà un logo, un pulsante per il menù ed una lista di link
// questi saranno tutti componenti

import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import classes from './Toolbar.css';

const toolbar = ( props) => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.opened} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;