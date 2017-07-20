/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  Header
*/
'use strict';
import React, { Component } from 'react';
import { StyleSheet, Image} from 'react-native';

/**
  Returns an icon for the tab bar.
  @params icon <idontknowthetype> the image to display.

  Can use images from app/config/images.js
*/
function TabBarIcon(props){
  const icon = props.icon;
  return (
    <Image source={icon} style={styles.icon} />
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  },
});


module.exports = TabBarIcon;
