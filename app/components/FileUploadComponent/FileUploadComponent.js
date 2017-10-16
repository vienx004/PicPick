import React, { Component } from 'react';
import styles from '../../styles';
import { TouchableHighlight, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import renderIf from 'render-if';

import {
    AppRegistry,
    View,
    Image,
    Text
} from 'react-native';

import Meteor, { createContainer, FSCollection, connectMeteor } from 'react-native-meteor';

const SERVER_URL ='ws://192.168.1.14:3000/websocket';

//options parameter for ImagePicker
var options = {
    title: 'Select Pic',
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

//touch image to upload and display image
class FileUploadComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            picSource: null
        };
        this.handleAddItem = this.handleAddItem.bind(this);
    }
    
    componentWillMount() {
        Meteor.connect(SERVER_URL);
    }

    handleAddItem() {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
        if (response.didCancel) {
            console.log('User cancelled image picker');
        }
        else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        }
        else if (response.customButtons) {
            console.log('User tapped custom button: ', response.customButtons);
        }
        else {
            let source = { uri: response.uri};
            this.setState({
                picSource: source
            });
   
            Meteor.call('Images.addOne', { source }, (err, res) => {
                console.log('Images.addOne', err, res);
            });
        }
    });
    }

//render function and return react html
render() {
    return (
        <View style={styles.container}>
                <Text style={styles.welcome}>
                    Name: {this.props.count}
                </Text>
            <TouchableHighlight  underlayColor={"#E8E8E8"} onPress={this.onPress}>
                <Image 
                style={{width: 50, height: 50}}
                source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}>
                </Image>
            </TouchableHighlight>
            <TouchableOpacity style={styles.primary_button} onPress={this.handleAddItem}>
                <Text>Add Item</Text>
            </TouchableOpacity>
             <View>
                {this.state.picSource?<Image source={this.state.picSource} style={styles.image}></Image>:null}
            </View>
        </View>
    );
    }
}

export default createContainer(() => {
    Meteor.subscribe('images');
    return {
        count: Meteor.collection('images').find().length,
    };
}, FileUploadComponent);


AppRegistry.registerComponent('FileUploadComponent', () => FileUploadComponent);




