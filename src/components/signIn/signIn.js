import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';
class SignIn extends Component {
    render() {
        return (
            <View>
                <TextInput 
                    placeholder="Enter your Name"
                />
                
                <TextInput 
                    placeholder="Enter your Password"
                />
                <Button 
                    title="Login"
                />
            </View>
        )
    }
}
export default SignIn;