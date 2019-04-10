import React, { Component } from 'react';
import { View, Text, Button, AsyncStorage, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Navigation } from 'react-native-navigation';
import firebase from 'react-native-firebase'
import { USER_ID } from '../../../config'
import goHome from '../../screens/mainTabs/mainTabs';
// import console = require('console');

export default class ProtectedComponent extends Component {
    state = {
        errorMesage: ''
    }
    signout = () => {
        //  await user = AsyncStorage.removeItem(USER_ID);
        firebase.auth().signOut().then(() => {
            goHome()
        }).catch(err => {
            console.log("Error Code", err.code);
            console.log("Error Message", err.message);
            this.setState({errorMesage:  err.message})
        })
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.PHomeTextContent}>
                    <Icon name="shield-home" size={95} style={styles.PHomeIcon} />
                    <Text style={styles.PHomeText} >Protected HomePage</Text>
                </View>
                <View
                        style={styles.PHomeSignOutButton}>
                    <Button 
                        title="sign Out"
                        onPress={this.signout}
                    />
                </View>
                <View>
                    <Text>
                        {
                            this.state.errorMesage
                        }
                    </Text>
                </View>
            </View>
        )
    }
}

const styles =StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    PHomeText: {
        width: '70%',
        fontSize: 45
    },
    PHomeIcon: {
        width: '30%'
    },
    PHomeTextContent: {
        flexDirection: 'row'
    },
    PHomeSignOutButton: {
        width: '70%',
        justifyContent: 'center',
        marginLeft: 60
    }
})