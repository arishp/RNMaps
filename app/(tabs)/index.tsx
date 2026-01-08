import { StyleSheet } from 'react-native';
import { Text } from 'react-native';


import React from 'react';
import { View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default function HomeScreen() {
  return (
      <View style={styles.container}>
        <Text>Home</Text>
        <MapView style={StyleSheet.absoluteFill} provider={PROVIDER_GOOGLE} />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
