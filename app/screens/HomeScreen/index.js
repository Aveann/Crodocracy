/*
*/
import React, { Component } from 'react';
import {
  Image,
  Text,
  StyleSheet
} from 'react-native';

import { StackNavigator, TabNavigator } from 'react-navigation';

import IMAGES from '../../config/images';

import Header from '../../components/Header';
import TabBarIcon from '../../components/TabBarIcon';

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: <Header/>,
    tabBarIcon: ({ tintColor }) => (
      <TabBarIcon icon={IMAGES.tab.home} tintColor={tintColor}/>
    ),
  };
 render() {
   return (
     <Text>Ta maman</Text>
   );
 }
}
