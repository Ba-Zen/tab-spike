import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

import { createAppContainer } from 'react-navigation';
import AppNavigator from './src/lib/router';

import { Avatar, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

import Profile from './src/pages/home/profile';

const AppIndex = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
      <ScrollView>
        <Profile />
        <View style={styles.container}>
          <AppIndex />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
    //alignItems: 'center',
    //justifyContent: 'center'
  }
});

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {}
});
