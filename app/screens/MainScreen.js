import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, TextInput } from 'react-native';
import MindWaveMobile from 'react-native-mindwave-mobile';
import Tts from 'react-native-tts';

import Button from '../components/button/Button';

const mwm = new MindWaveMobile();

const { width } = Dimensions.get('window');
export default class MainScreen extends Component {
  state = {
    value: ''
  };
  scan = () => {
    mwm.scan();
    mwm.onFoundDevice(device => console.log(device));
  };
  connect = () => {
    mwm.onFoundDevice(device => mwm.connect(device.id));
    console.log('connecting');
    mwm.onConnect(console.log('what'));
  };

  disconnect = () => {
    mwm.disconnect();
    mwm.onDisconnect(console.log('Disconnected'));
  };
  talk = () => {
    const { value } = this.state;
    Tts.speak(value);
  };

  render() {
    const { value } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textContainer}
          value={value}
          onChangeText={value => this.setState({ value })}
        />
        <Button label="Scan" onPress={this.scan} />
        <Button label="Connect" onPress={this.connect} />
        <Button label="Disconnect" onPress={this.disconnect} />
        <Button label="Talk" onPress={this.talk} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  textContainer: {
    width: width - 30,
    height: 30,
    borderWidth: 1
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
