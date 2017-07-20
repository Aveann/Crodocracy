/*
  Author: Naëva Arnould
  Contributors:
  Description: Configures the scenes, initial scene, the store and other things...
*/

'use strict';
import React, { Component } from 'react';

import { TabNavigator, StackNavigator } from 'react-navigation';


import {View, Text, StyleSheet, Image, Button} from 'react-native';

//TODO : names of those files should be changed
import Images from './config/images';
import Styles from './config/styles';

//COMPONENTS
import Header from './components/Header';

//SCREENS
import HomeScreen from './screens/HomeScreen';


class Filter1 extends Component {
  render(){
    return(
      <Text>Filter1</Text>
    );
  }
}

class Filter2 extends Component {
  render(){
    return(
      <Text>Filter2</Text>
    );
  }
}

const FilterTabNav = TabNavigator({
  Filter1: {screen: Filter1},
  Filter2: {screen: Filter2},
}, {
  initialRouteName: 'Filter1',
  tabBarPosition: 'top',
  swipeEnabled: true,
});


class ParticipateScreen extends Component {
  static navigationOptions = {
    header: <Header />,
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

class ProfileScreen extends Component {
  static navigationOptions = {
    header: <Header />,
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={Images.tab.profile}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
  render() {
    return (
      <View>
        {/*Profile pic, name and Description*/}
        <View style={styles.profileInfoContainer}>
        </View>
        {/*Last Consulted proposals*/}
        <View style={styles.historic}>
        </View>
        {/*Own comments, answers, liked topics*/}
        <View style={styles.activity}>
        </View>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
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
