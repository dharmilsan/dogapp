import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Breed from './components/Breed';
import Breeds from './components/Breeds';

export default RootStack = createStackNavigator({
    Breeds: {
      screen: Breeds
    },
    Breed: {
        screen: Breed
    }
  });
