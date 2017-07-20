/*
*/
import React, { Component } from 'react';
import {
  Image,
  Text,
  StyleSheet
} from 'react-native';

import { StackNavigator, TabNavigator } from 'react-navigation';

import images from '../../config/images';

import Header from '../../components/Header';


export default class HomeScreen extends Component {
  static navigationOptions = {
    header: <Header/>,
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={images.tab.home}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
 render() {
   return (
     <Text>Ta maman</Text>
   );
 }
}


const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  }
});
