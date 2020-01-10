import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

export default function Profile () {
  // here goes listing card component
  return (
    <View>
      <Icon name='home' size={22} color={'black'} />
      <Text>Hell 22 o world, this is my profile!</Text>
    </View>
  )
}