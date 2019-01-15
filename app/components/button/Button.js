import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import MindWaveMobile from 'react-native-mindwave-mobile';

import styles from './styles';

export default class Button extends Component {
  componentDidMount() {
    const mwm = new MindWaveMobile();
    mwm.scan();
    mwm.onFoundDevice(device => {
      console.log(device);
    });
  }
  render() {
    return (
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.textStyle}>Connect</Text>
      </TouchableOpacity>
    );
  }
}
