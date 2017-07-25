'use strict';
import React, { Component } from 'react';

import { View, Button } from 'react-native';

//Headers' style
import styles from '../styles';

function HeaderNotifications(){
  return (
    <View style={styles.headerContainer}>
      <Button title="Filter" style={styles.headerLeft} />
    </View>
  )
}

module.exports = HeaderNotifications
