/* @flow */

import React from 'react';

import { Platform, StyleSheet, Text, View } from 'react-native';

const Banner = () => (
  <View style={styles.banner}>
    <Text style={styles.title}>React Native Web Fiber Boilerplate</Text>
  </View>
);

export default Banner;

const styles = StyleSheet.create({
  banner: {
    backgroundColor: '#673ab7',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '200',
    color: '#fff',
    margin: 8,
  },
});
