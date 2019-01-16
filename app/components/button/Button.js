import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import MindWaveMobile from 'react-native-mindwave-mobile';

import styles from './styles';
const mwm = new MindWaveMobile();
export default class Button extends Component {
  state = {
    id: ''
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

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.scan} style={styles.buttonContainer}>
          <Text style={styles.textStyle}>Scan</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.scan} style={styles.buttonContainer}>
          <Text style={styles.textStyle}>Connect</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.disconnect}
          style={styles.buttonContainer}
        >
          <Text style={styles.textStyle}>Disconnect</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
