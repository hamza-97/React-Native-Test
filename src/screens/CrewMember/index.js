import React, {useState} from 'react';
import {FlatList, View, SafeAreaView} from 'react-native';
import Heading from '../../components/Heading';
import {observer} from 'mobx-react-lite';
import CrewCard from '../../components/CrewCard';
import styles from './style';

const CrewMember = observer(props => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <CrewCard item={props.route.params.details} />
      </View>
    </SafeAreaView>
  );
});

export default CrewMember;
