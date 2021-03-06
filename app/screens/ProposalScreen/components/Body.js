/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti
  Body of VotingScreen, contains 3 tabs (Articles, Disscussion, Statistics) 4
  and VotingAnimation
*/
'use strict';
// Android element elevation defined for middle voting image
import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import _ from 'underscore';

import Tabs from 'react-native-tabs';
import Articles from './Articles.js';
import Statistics from './Statistics.js';
import Disscussion from './Disscussion.js';
import VotingAnimation from './VotingAnimation.js';


class Body extends Component {

  constructor(props) {
      super(props);
      this.state = {
        page: 'disscussion',
      };
  }

  render() {
    return (
      <View style={styles.container}>
      {/* Voting Section Appears when its not voted*/}
      {_.isUndefined(this.props.voted) && <VotingAnimation proposalId={this.props.proposalId} />}
      {/* Articles / Disscussion Tab Section */}
      <View style={styles.tabContainer}>
        {this._renderTabs()}
      </View>
      {/* Articles / Comments / Statistics body Section */}
      <View style={styles.bodyContainer}>
        {this._renderTabContent()}
      </View>

      </View>
    );
  }

  _renderTabContent() {
    switch (this.state.page) {
      case 'articles':
        return (
          <Articles />
        );
      case 'disscussion':
      return (
        <Disscussion proposalId={this.props.proposalId} />
      );
      case 'statistics':
      return (
        <Statistics />
      );
      default:

    }
  }

  _renderTabs() {
    // without statistics
    return (
      <Tabs selected={this.state.page}
          onSelect={el => this.onSelectedTab(el)}
          style={styles.tabs}
      >
          <Text name="articles" style={styles.textStyle}
                selectedStyle={styles.tabsSelected}
                selectedIconStyle={styles.tabsIconSelected}
          >Articles</Text>
          <Text name="disscussion" style={styles.textStyle}
                selectedStyle={styles.tabsSelected}
                selectedIconStyle={styles.tabsIconSelected}
          >Disscussion</Text>

          {!_.isUndefined(this.props.voted) &&
          <Text name="statistics" style={styles.textStyle}
                selectedStyle={styles.tabsSelected}
                selectedIconStyle={styles.tabsIconSelected}
          >Statistics</Text>
          }
      </Tabs>
    );
  }

  onSelectedTab(el) {
    this.setState({ page: el.props.name });
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 5,
  },
  bodyContainer: {
    flex: 10,
    backgroundColor: 'white',
  },
  tabContainer: {
    height: Dimensions.get('window').height / 14,
    backgroundColor: 'white'
  },
  tabs: {
    backgroundColor: 'rgba(26, 105, 178, 0.49)',
  },
  textStyle: {
    fontSize: 23,
    color: '#D2EEFF'
  },
  tabsSelected: {
    color: 'rgba(37, 36, 51, 0.3)',
  },
  tabsIconSelected: {
    backgroundColor: 'rgb(237, 244, 252)'
  }
});

module.exports = Body;
