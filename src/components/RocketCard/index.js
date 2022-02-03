import React from 'react';
import {Image, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from '../utils/Constants';
import CustomText from '../CustomText';
import styles from './style';
const RocketCard = props => {
  const rocket = props.item.item;
  return (
    <View style={styles.container}>
      <Image source={{uri: rocket.flickr_images[0]}} style={{height: 180}} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 12,
        }}>
        <CustomText heading={'Name'} headingText={rocket.name} />
        <CustomText heading={'Type'} headingText={rocket.type} />
        <CustomText heading={'Company'} headingText={rocket.company} />
      </View>
      <CustomText heading={'Description'} headingText={rocket.description} />
    </View>
  );
};
export default RocketCard;
