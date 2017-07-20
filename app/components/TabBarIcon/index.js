/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  Header
*/
'use strict';
import React, { Component } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';


import images from '../../config/Images';

class Header extends Component {
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

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 65,
  },
  title: {
    fontSize: 20,
    alignSelf: 'center',
  },
  headerRight: {
    marginTop: 30,
    position: 'absolute',
  },
  headerLeft: {

  }
});

module.exports = Header;
