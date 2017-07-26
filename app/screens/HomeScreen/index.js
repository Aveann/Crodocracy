/*
*/
import React, { Component } from 'react';
import {
  Image,
  Text,
  StyleSheet
} from 'react-native';

import { StackNavigator, TabNavigator } from 'react-navigation';

import IMAGES from '../../config/IMAGES';

import { HeaderGeneral } from '../../config/COMPONENTS';

import TabBarIcon from '../../components/TabBarIcon';


export default class HomeScreen extends Component {
  static navigationOptions = {
    header: <HeaderGeneral />,
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
