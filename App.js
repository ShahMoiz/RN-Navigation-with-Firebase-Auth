

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class App extends Component{
  render(){
    return(
      <View>
        <Text>App.js Works</Text>
        <Icon name="home" sizee={30}/>
      </View>
    )
  }
}
