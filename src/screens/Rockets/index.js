import React, {useEffect, useContext, useState} from 'react';
import {
  Alert,
  FlatList,
  View,
  SafeAreaView,
  NetInfo,
  Platform,
} from 'react-native';
import Heading from '../../components/Heading';
import {observer} from 'mobx-react-lite';
import {RocketsStore} from '../../store/Rockets';
import RocketCard from '../../components/RocketCard';
import styles from './style';
import Loader from '../../components/Loader';

const Rockets = observer(props => {
  const rockets = useContext(RocketsStore);
  const [rocketList, setRocketList] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
    CheckConnectivity;
  }, []);
  const CheckConnectivity = () => {
    if (Platform.OS === 'android') {
      NetInfo.isConnected.fetch().then(isConnected => {
        if (!isConnected) {
          Alert.alert('You are offline!');
        }
      });
    } else {
      NetInfo.isConnected.addEventListener(
        'connectionChange',
        handleFirstConnectivityChange(),
      );
    }
  };
  const handleFirstConnectivityChange = isConnected => {
    NetInfo.isConnected.removeEventListener(
      'connectionChange',
      this.handleFirstConnectivityChange,
    );

    if (isConnected === false) {
      Alert.alert('You are offline!');
    }
  };
  const getData = async () => {
    let [rocketList, status] = await rockets.getRockets();
    console.log('My status is ', status);
    if (status === false) {
      Alert.alert('Api server not working');
    }
    setRocketList(rocketList);
    setLoading(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Heading text={'Rockets'} />

        <FlatList
          data={rocketList}
          style={{marginTop: 10}}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.id}
          renderItem={item => {
            return <RocketCard item={item} />;
          }}
        />
      </View>
      {loading && <Loader />}
    </SafeAreaView>
  );
});

export default Rockets;
