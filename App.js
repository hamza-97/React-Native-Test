import React, {Component} from 'react';
import 'react-native-gesture-handler';

import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from './src/utils/colors';

import Rockets from './src/screens/Rockets';
import CrewMembers from './src/screens/CrewMembers';
import CrewMember from './src/screens/CrewMember';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarStyle: {height: 100},
      }}
      tabBarOptions={{
        inactiveTintColor: 'black',
        indicatorStyle: {
          width: '100%',
          left: '16%',
          height: 30,
          backgroundColor: 'white',
        },
        activeTintColor: Colors.prim1,
        labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: 'white',
          borderBottomColor: Colors.prim1,
        },
      }}>
      <BottomTab.Screen
        name="Rockets"
        component={Rockets}
        options={({route}) => ({
          tabBarLabel: 'Rockets',
          headerStyle: {
            height: 0,
            borderBottomColor: 'white',
          },
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons name="ios-location-outline" size={24} color={'black'} />
            ) : (
              <Ionicons
                name="ios-location-outline"
                size={24}
                color="lightgray"
              />
            ),
        })}
      />

      <BottomTab.Screen
        name="CrewMembers"
        component={CrewMemberStack}
        options={({route}) => ({
          tabBarLabel: 'Crew Members',
          headerStyle: {
            height: 0,
            borderBottomColor: 'white',
          },
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons
                name="ios-clipboard-outline"
                size={24}
                color={'black'}
              />
            ) : (
              <Ionicons
                name="ios-clipboard-outline"
                size={24}
                color="lightgray"
              />
            ),
        })}
      />
    </BottomTab.Navigator>
  );
};
function CrewMemberStack({navigation, route}) {
  const routeName = getFocusedRouteNameFromRoute(route);
  if (routeName !== undefined) {
    navigation.setOptions({tabBarStyle: {display: 'none'}});
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CrewMembers"
        component={CrewMembers}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CrewMember"
        component={CrewMember}
        options={{
          headerTitle: 'Crew Member',
          headerBackTitleVisible: false,
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: 'black',
            height: 120,
          },
        }}
      />
    </Stack.Navigator>
  );
}
export default class MainApp extends Component {
  render() {
    return (
      <NavigationContainer>
        <PaperProvider>
          <HomeTabs />
        </PaperProvider>
      </NavigationContainer>
    );
  }
}
