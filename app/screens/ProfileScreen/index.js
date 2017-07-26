import React, { Component } from 'react';

import { Image, Text } from 'react-native';

import { HeaderGeneral } from '../../config/COMPONENTS';

import TabBarIcon from '../../components/TabBarIcon';

import IMAGES from '../../config/IMAGES';

export default class ProfileScreen extends Component {
  static navigationOptions = {
    header : <HeaderGeneral />,
    tabBarIcon: ({ tintColor }) => (
      <TabBarIcon icon={IMAGES.tab.profile} tintColor={tintColor}/>
    ),
  };
  render() {
    return (
      <Text>Here we will see our profile (the user s profile) and we will be able
      to modify it.
      </Text>
    );

  }
}
