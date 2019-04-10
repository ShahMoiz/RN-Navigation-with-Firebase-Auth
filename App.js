import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import authScreen from './src/screens/authScreen/authScreen'
export default class App extends Component{
  signIn = () => {
    authScreen('signIn', 'signUp');
  }
  signUp = () => {
    authScreen('signUp','signIn');
  }
  goToProtected = () => {
    alert("Protected page")
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
  // signUp:{
  //   width: '45%'
  // },
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