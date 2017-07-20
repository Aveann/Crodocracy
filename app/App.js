/*
  Author: Naëva Arnould
  Contributors:
  Description: Configures the scenes, initial scene, the store and other things...

  ohlala
*/

'use strict';
import React, { Component } from 'react';

import { TabNavigator, StackNavigator } from 'react-navigation';


import {View, Text, StyleSheet, Image, Button} from 'react-native';

//TODO : names of those files should be changed
import Images from './config/images';
import Styles from './config/styles';

import Header from './components/Header';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';


class ParticipateScreen extends Component {
  static navigationOptions = {
    headerLeft: <Button title="Search" />,
    headerRight: <Button title="Popose" />,
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={Images.tab.deadline_voting}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    )
  }
  render(){
    return (
      <Text>List to participate to hot proposals</Text>
    );
  }
}

class NotificationScreen extends Component {
  static navigationOptions = {
    title: 'Notifications',
    //Right button
    headerRight: <Button title="All Notifications" />,
    tabBarIcon: ({ tintColor }) => (
      <Image source={Images.tab.notification}
        style={[styles.icon, {tintColor: tintColor}]}/>
    ),
  };
  render(){
    return  (
      <Text>Here goes various notifications about the proposals.</Text>
    )
  }
}



const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

//See below to costumize styles and behavior:
//https://reactnavigation.org/docs/navigators/tab#TabNavigator
const TabNav = TabNavigator({
  Home: { screen: HomeScreen },
  Participate: { screen: ParticipateScreen },
  Notification : { screen: NotificationScreen },
  Profile: {screen: ProfileScreen },
}, {
  initialRouteName: 'Home',
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  order: ['Home', 'Participate', 'Notification', 'Profile' ],
  tabBarOptions: {
    showIcon: true,
    activeTintColor: Styles.colors.activeTintColor,
    inactiveTintColor: Styles.colors.inactiveTintColor,
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

const App = StackNavigator({
  Root: {
    screen: TabNav
  }

});

module.exports = App;
