import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.textStyle}>Connect</Text>
      </TouchableOpacity>
    );
  }
}
