import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { Navigation } from 'react-native-navigation'
// import console = require('console');
// import console = require('console');
import firebase from 'react-native-firebase'
import goHome from '../../screens/homeSreen/homeScreen';

// import console = require('console');
class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            errorMassage: ''
        }
    }
    static get options () {
        return {topBar: {title: {text: 'Screen1'}}};
    } 

    login = () => {
        const email = this.state.email;
        const pass = this.state.password;
        firebase.auth().signInWithEmailAndPassword(email, pass).then(() => {
            // goHome()
            goHome()
        }).catch(err => {
            console.log("Error Code", err.code);
            console.log("Error Message", err.message);
            this.setState({errorMassage: err.massage});
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                    placeholder="Enter your email"
                    onChangeText={email => this.setState({email})}
                />
                
                <TextInput 
                    placeholder="Enter your Password"
                    onChangeText={val => this.setState({password: val})}
                    secureTextEntry={true}
                   
                />
                <Button 
                    title="Login"
                    onPress={this.login}
                />
                <Text>{
                this.state.errorMassage
                }</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
})

export default SignIn;