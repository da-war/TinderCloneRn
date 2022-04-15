import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import tailwind from 'twrnc';

import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './app/navigation/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
