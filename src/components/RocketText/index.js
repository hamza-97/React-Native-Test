import React from 'react';
import {Image, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from '../utils/Constants';
import styles from './style.js';
const CustomText = props => (
  <View>
    <Text style={styles.Heading}>{props.heading}</Text>
    <Text style={styles.headingText}>{props.headingText} </Text>
  </View>
);
export default CustomText;
