import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import  firebase from 'react-native-firebase';
import authScreen from '../../screens/authScreen/authScreen';
// import console = require('console');
class SignUp extends Component {
    state = {
        errorMassage: '',
        password: '',
        email: ''
    }
    signUp = () => {
        const email = this.state.email;
        const pass = this.state.password;
        console.log("email", email)
        console.log("password", pass)
        firebase.auth().createUserWithEmailAndPassword(email, pass).then(() => {
            authScreen('signIn', 'signUp')
        }).catch(err => {
            console.log("SignUp Error Code", err.code);
            console.log("SignUp Error Name", err.message);
            this.setState({errorMassage: err.message})
        })
        // console.log(this.state.username, this.state.password, this.state.email)
    }
    render() {
        return (
            <View style={styles.container}>
                
                <TextInput 
                    placeholder="Enter your email"
                    onChangeText={val => this.setState({email: val})}
                />
                <TextInput 
                    placeholder="Enter your Password"
                    onChangeText={val => this.setState({password: val})}
                    secureTextEntry={true}
                />
                <Button 
                    title="Sign Up"
                    onPress={this.signUp}
                />
                <View>
                    <Text>
                    {this.state.errorMassage}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})
export default SignUp;