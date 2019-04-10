import React, { Component } from 'react';
import { View, Text, Button, AsyncStorage, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Navigation } from 'react-native-navigation';

import { USER_ID } from '../../../config'

export default class ProtectedComponent extends Component {
    signout = () => {
        //  await user = AsyncStorage.removeItem(USER_ID);
        alert('signOut')
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