import React, {useEffect, useContext, useState} from 'react';
import {
  Platform,
  FlatList,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Heading from '../../components/Heading';
import {observer} from 'mobx-react-lite';
import {CrewMembersStore} from '../../store/CrewMembers';
import CrewCard from '../../components/CrewCard';
import styles from './style';
import Loader from '../../components/Loader';
import {PERMISSIONS, check, request} from 'react-native-permissions';

const CrewMembers = observer(props => {
  const crew = useContext(CrewMembersStore);
  const [crewList, setCrewList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cameraGranted, setCameraGranted] = useState(false);
  const [apptrackingGranted, setApptrackingGranted] = useState(false);

  useEffect(() => {
    getData();
    handleCameraPermission();
    handleApptrackingPermission();
  }, []);
  const getData = async () => {
    let [crewList, status] = await crew.getMembers();
    if (status === false) {
      Alert.alert('Api server not working');
    }
    setCrewList(crewList);
    setLoading(false);
  };
  const handleCameraPermission = async () => {
    const res =
      Platform.OS === 'ios'
        ? await check(PERMISSIONS.IOS.CAMERA)
        : await check(PERMISSIONS.ANDROID.CAMERA);
    if (res === 'denied' || res === 'blocked') {
      const res2 =
        Platform.OS === 'ios'
          ? await request(PERMISSIONS.IOS.CAMERA)
          : await request(PERMISSIONS.ANDROID.CAMERA);
      res2 === 'granted' ? setCameraGranted(true) : setCameraGranted(false);
    } else {
      setCameraGranted(true);
    }
  };
  const handleApptrackingPermission = async () => {
    if (Platform.OS === 'ios') {
      const res = await request(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY);
      if (res === 'denied' || res === 'blocked') {
        const res2 = await request(PERMISSIONS.IOS.CAMERA);
        res2 === 'granted'
          ? setApptrackingGranted(true)
          : setApptrackingGranted(false);
      } else {
        setApptrackingGranted(true);
      }
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Heading text={'Crew Members'} />
        <FlatList
          data={crewList}
          style={{marginTop: 10}}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.id}
          renderItem={item => {
            return (
              <TouchableOpacity
                style={styles.container}
                onPress={() =>
                  apptrackingGranted &&
                  cameraGranted &&
                  props.navigation.navigate('CrewMember', {details: item})
                }>
                <CrewCard item={item} />
              </TouchableOpacity>
            );
          }}
        />
      </View>
      {loading && <Loader />}
    </SafeAreaView>
  );
});

export default CrewMembers;
