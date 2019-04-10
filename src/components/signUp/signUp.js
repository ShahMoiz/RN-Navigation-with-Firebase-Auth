import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
// import console = require('console');
class SignUp extends Component {
    state = {
        username: '',
        password: '',
        email: ''
    }
    signUp = () => {
        console.log(this.state.username, this.state.password, this.state.email)
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                    placeholder="Enter your Name"
                    onChangeText={val => this.setState({username: val})}
                />
                
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