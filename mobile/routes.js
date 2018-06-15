import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Breed from './components/Breed';
import Breeds from './components/Breeds';
import Generic from './components/Generic';
import Icon from 'react-native-vector-icons/FontAwesome';

const commonNavigationOptions = {
  headerStyle: {
    backgroundColor: '#3d85c3'
  },
  headerTintColor: '#fff',
}

const routeNameIconMap = {'Index': 'home', 'Applications': 'sticky-note', 'Notes': 'info', 'Settings': 'cog'};

const RootStack = createStackNavigator({
  Breeds: {
    screen: Breeds
  },
  Breed: {
    screen: Breed,
  }
}, {
  navigationOptions: {...commonNavigationOptions}
});

RootStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {...commonNavigationOptions,
    tabBarVisible
  };
}

//need internal stackNavigators to display the header...

const bottomTabs = createBottomTabNavigator(
  {
    'Index': {
      screen: RootStack
    },
    'Applications': {
      screen: createStackNavigator({
        Applications: Generic
      }, {navigationOptions: {...commonNavigationOptions}}),
    },
    'Notes': {
      screen: createStackNavigator({
        Notes: Generic
      }, {navigationOptions: {...commonNavigationOptions}}),
    },
    'Settings': {
      screen: createStackNavigator({
        Settings: Generic
      }, {navigationOptions: {...commonNavigationOptions}}),
    }
  },
  {navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      return <Icon name={routeNameIconMap[routeName]} size={20} color={tintColor} />;
    },
    tabBarOptions: {
      labelStyle: {fontSize: 12},
      activeTintColor: '#3d85c3',
      inactiveTintColor: 'gray',
    }
  })},
);

export default bottomTabs;
