import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E9DEFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  image: {
    height: 280,
    width: 360,
    padding: 10,
  },
  primary_button: {
      padding: 10,
      backgroundColor: '#E8E8E8',
  },
  text_box: {
      height: 40,
      width: 200,
      borderColor: 'black',
      borderWidth: 1,
  },
  password_box:{
      height: 40,
      width: 200,
      borderColor: 'black',
      borderWidth: 1,
  },
});

module.exports = styles
