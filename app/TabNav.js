/*
  Author: Naëva Arnould
  Contributors:
  Description: Configures the scenes, initial scene, the store and other things...

  ohlala
*/

'use strict';
import React, { Component } from 'react';

import { TabNavigator } from 'react-navigation';

//CONSTS
import COLORS from './config/COLORS';

//SCREENS
import HomeScreen from './screens/HomeScreen';
import ParticipateScreen from './screens/ParticipateScreen';
import ProfileScreen from './screens/ProfileScreen';
import NotificationScreen from './screens/NotificationScreen';

//See below to costumize styles and behavior:
//https://reactnavigation.org/docs/navigators/tab#TabNavigator
const TabNav = TabNavigator({
  Home: { screen: HomeScreen },
  Participate: { screen: ParticipateScreen },
  Notification : { screen: NotificationScreen },
  Profile: {screen: ProfileScreen },
}, {
  initialRouteName: 'Home',
  order: ['Home', 'Participate', 'Notification', 'Profile' ],
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  tabBarOptions: {
    showIcon: true,
    activeTintColor: COLORS.activeTintColor,
    inactiveTintColor: COLORS.inactiveTintColor,
    upperCaseLabel: false,
    pressColor: 'red',
    indicatorStyle: {
      opacity: 0,
    },
    style: {
      backgroundColor: 'white',
      padding: 0,
      margin: 0
    },
    tabStyle: {
      padding: 0,
      margin: 0,
      height: 55
    },
    labelStyle: {
      fontSize: 10,
    },
  },
});

module.exports = TabNav;
