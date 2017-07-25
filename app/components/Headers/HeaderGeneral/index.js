/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  Header
*/
'use strict';
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

// import { StackNavigator } from 'react-navigation';

import IMAGES from '../../../config/IMAGES';

//headers style
import styles from '../styles';

class HeaderGeneral extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedText: '',
     };
  };
  render() {
    return (
      <View style={styles.headerContainer}>
        <Button title="Search" style={styles.headerRight} />
        <Text style={styles.title}>CrodoCracy</Text>
        <Button title="Create" style={styles.headerLeft} />
      </View>
    );
  }
}



module.exports = HeaderGeneral;
