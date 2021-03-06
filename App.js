/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Header from './src/component/header';
import Login from './login/login'; 

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <Header/>
      <Login/>
        {/* <Text style={styles.welcome}>Welcome to Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text> 
    */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     
    justifyContent : 'center',
    
      fontSize: 20,
      fontWeight: 'bold',
    
    backgroundColor: '#4286f4',
  },
  /* welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }, */
});
