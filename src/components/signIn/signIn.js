import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { Navigation } from 'react-native-navigation'
// import console = require('console');
// import console = require('console');
class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            usernmae: '',
            password: ''
        }
    }
    
    login = (user) => {
        console.log("Hello Wrold Login")
        alert("Console Run" +  user)
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                    placeholder="Enter your Name"
                    onChangeText={username => this.setState({username})}
                />
                
                <TextInput 
                    placeholder="Enter your Password"
                    onChangeText={val => this.setState({password: val})}
                    secureTextEntry={true}
                   
                />
                <Button 
                    title="Login"
                    onPress={() => this.login(this.state.username)}
                />
                <Text>{
                this.state.username
                }</Text>
                <Text>{
                this.state.password
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