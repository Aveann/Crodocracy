/*
  Author: Naëva Arnould
  Contributors:
  Description: Configures the scenes, initial scene, the store and other things...

  ohlala
*/

'use strict';
import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation';

import TabNav from './TabNav';

const App = StackNavigator({
  Root: {
    screen: TabNav
  }

});

module.exports = App;
