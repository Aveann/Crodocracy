
import React, { Component } from 'react';
import {
  Image,
  Text
} from 'react-native';

import { StackNavigator, TabBarNavigator } from 'react-navigation';

import IMAGES from '../../config/IMAGES';

import { HeaderGeneral } from '../../GLOBALS';

class ParticipateScreen extends Component {
  static navigationOptions = {
    header: <HeaderGeneral />,
    tabBarIcon: ({ tintColor }) => (
      <TabBarIcon icon={IMAGES.tab.participate} tintColor={tintColor} />
    )
  }
  render(){
    return (
      <Text>List to participate to hot proposals</Text>
    );
  }
}


module.exports = ParticipateScreen;
