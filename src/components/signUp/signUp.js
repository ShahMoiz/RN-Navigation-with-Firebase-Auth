import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';
class SignUp extends Component {
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
                    title="Sign Up"
                />
            </View>
        )
    }
}
export default SignUp;