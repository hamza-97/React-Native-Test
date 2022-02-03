import React from 'react';
import {Image, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import CustomText from '../CustomText';
import styles from './style';
const CrewCard = props => {
  const crew = props.item.item;
  return (
    <View style={styles.container}>
      <Image source={{uri: crew.image}} style={{height: 400}} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 12,
        }}>
        <CustomText heading={'Name'} headingText={crew.name} />
        <CustomText heading={'Agency'} headingText={crew.agency} />
        <CustomText heading={'Status'} headingText={crew.status} />
      </View>
    </View>
  );
};
export default CrewCard;
