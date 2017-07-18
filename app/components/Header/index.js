/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  Header
*/
'use strict';
import React, { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Image, Text, Button } from 'react-native';

import images from '../../config/Images';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedText: '',
     };
  }

  render() {
    return (
      <View style={styles.headerContainer}>
      <Button title='Wesh' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
    borderBottomColor: '#5d95c4',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

module.exports = Header;
