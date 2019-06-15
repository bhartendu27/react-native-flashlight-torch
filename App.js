/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, ImageBackground} from 'react-native';
import Torch from 'react-native-torch';



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



type Props = {};
export default class App extends Component<Props> {

  state = {
    torchStatus: false
  }

  torchSwitch = () => {
    Torch.switchState(!this.state.torchStatus);
    console.log(this.state.torchStatus);
    this.setState({ torchStatus: !this.state.torchStatus});
  }

  componentDidMount() {
    this.torchSwitch
  }

  // buttonTitle = () => {
  //   retrun this.state
  // }


  render() {
    return (
      <ImageBackground source={this.state.torchStatus ? require('./assets/torchon.png') : require('./assets/torchoff.png')} style={{width: '100%', height: '100%' }} >
      <View style={styles.container}>

        <Button onPress={this.torchSwitch} style={{width: '100', height: '100', fontSize: 50}} title={this.state.torchStatus ? "Turn OFF" : "Turn ON"} />

      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 50
    // backgroundColor: '#F5FCFF',
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
});
