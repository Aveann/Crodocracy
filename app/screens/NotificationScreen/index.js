import React, { Component } from 'react';
import {
  Image,
  Text,
  Button
} from 'react-native';

import { StackNavigator, TabBarNavigator } from 'react-navigation';

import IMAGES from '../../config/IMAGES';

import HeaderNotifications from '../../config/COMPONENTS';
import TabBarIcon from '../../config/COMPONENTS';

class NotificationScreen extends Component {
  static navigationOptions = {
    title: 'Notifications',
    //Right button
    headerRight: <HeaderNotifications />,
    tabBarIcon: ({ tintColor }) => (
      <TabBarIcon icon={IMAGES.tab.notification} tintColor={tintColor} />
    ),
  };
  render(){
    return  (
      <Text>Here goes various notifications about the proposals.</Text>
    )
  }
}

module.exports = NotificationScreen;
