import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import tailwind from 'twrnc';

import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './app/navigation/StackNavigator';
import {AuthProvider} from './app/hooks/useAuth';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
