import React, { Component } from 'react';
import styles from '../../styles';
import { TouchableHighlight, TouchableOpacity } from 'react-native';

import {
    AppRegistry,
    View,
    Image,
    Text
} from 'react-native';

import Meteor, { createContainer } from 'react-native-meteor';

//const SERVER_URL ='ws://192.168.1.14:3000/websocket';
const SERVER_URL ='ws://10.126.212.102:3000/websocket';


//touch image to upload and display image
export default class HomeComponent extends Component {
    componentWillMount() {
        Meteor.connect(SERVER_URL);
    }

    navigate = () => {
        const { navigate } = this.props.navigation
        navigate('FileUploadComponent')
    }

//render function and return react html
render() {
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
            Welcome to React Native!
            </Text>
            <TouchableOpacity  style={styles.primary_button} title='File Upload' onPress={this.navigate}>
                <Text>File Upload</Text>
            </TouchableOpacity>
        </View>
    );
    }
}


AppRegistry.registerComponent('HomeComponent', () => HomeComponent);




