import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import firebase from 'react-native-firebase';
import { Navigation } from 'react-native-navigation';

import authScreen from './src/screens/authScreen/authScreen';
import ProtectedScreen from './src/screens/protectedScreen/protectedScreen';
export default class App extends Component{
  
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Home'
        },
      }
    };
  }

  signIn = () => {
    authScreen('signIn', 'signUp');
  }
  signUp = () => {
    authScreen('signUp','signIn');
  }

  goToProtected = () => {
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        ProtectedScreen()
      }
      else {
        authScreen('signUp','signIn');
      } 
    })
  }

  render(){
    return(
      <View style={styles.homeComponent}>

        <View style={styles.homeAuthButtons}>
          <View 
              style={styles.authStyle}>
            <Button 
              onPress={this.signIn}
              title="sign In"
            />
          </View>

          <View 
              style={styles.authStyle}>
            <Button 
              onPress={this.signUp}
              title="Sign Up"
              color="red"
            />
          </View>
        </View>

        <View style={styles.textContent}>
          <Icon name="home" size={75} style={styles.homeIcon}/>
          <Text style={styles.homeText}>Home Page</Text>
        </View>

        <Button 
          onPress={this.goToProtected}
          title="Go to Protected Page"
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  homeComponent: {  
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  textContent: {
    flexDirection: 'row',
  },
  homeAuthButtons: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  homeText: {
    fontSize: 50,
    width: '70%'
  },
  homeIcon: {
    width: '30%'
  },
  authStyle: {
    width: '45%',
    margin: 10
  },
})