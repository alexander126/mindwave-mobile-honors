import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import styles from './styles';
export default class Button extends Component {
  render() {
    const { onPress, label } = this.props;
    return (
      <View>
        <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
          <Text style={styles.textStyle}>{label}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
