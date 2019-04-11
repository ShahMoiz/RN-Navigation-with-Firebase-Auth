import React, { Component } from 'react';
import firebase from 'react-native-firebase';
import { View, Text, StyleSheet } from 'react-native';
// import goHome from '../../screens/homeSreen/homeScreen';
import goHome from '../../screens/homeSreen/homeScreen';
import authScreen from '../../screens/authScreen/authScreen';
import ProtectedScreen from '../../screens/protectedScreen/protectedScreen';



export default class InitializeComponent extends Component {
    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                ProtectedScreen()
            }
            else {
                goHome()
            }
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Loading...!
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
})