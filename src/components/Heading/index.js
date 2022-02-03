import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from '../utils/Constants';
import styles from './style';
const Heading = props => (
  <View style={styles.headerStyle}>
    <Text style={styles.textStyle}>{props.text}</Text>
  </View>
);
export default Heading;
