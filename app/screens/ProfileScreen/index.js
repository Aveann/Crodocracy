import React, { Component } from 'react';

import { Image, Text } from 'react-native';

import Header from '../../components/Header';

import TabBarIcon from '../../components/TabBarIcon';

import STYLES from '../../config/styles';

export default class ProfileScreen extends Component {
  static navigationOptions = {
    header : <Header />,
    tabBarIcon: ({ tintColor }) => (
      <TabBarIcon tintColor={tintColor}/>
    ),
  };
  render() {
    return (
      <Text>Here we will see our profile (the user s profile) and we will be able
      to modify it.</Text>
    );

  }
}
