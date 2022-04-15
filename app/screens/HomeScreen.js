import React from 'react';
import {Text, View, Pressable, StyleSheet} from 'react-native';

import tailwind from 'twrnc';

const HomeScreen = ({navigation}) => {
  return (
    <View style={tailwind`flex-1 justify-center items-center`}>
      <Text>HomeScreen</Text>
      <Pressable
        onPress={() => navigation.navigate('Chat')}
        style={styles.container}>
        <Text>Press me</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'cyan',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
