
'use strict';
import React, { Component } from 'react';

import { StyleSheet, Image} from 'react-native';

import styles from './styles';
/**
  Returns an icon for the tab bar.
  @params icon <idontknowthetype> the image to display.

  Can use images from app/config/images.js
*/
export default function TabBarIcon(props){
  const icon = props.icon;
  return (
    <Image source={icon} style={styles.icon} />
  )
}
