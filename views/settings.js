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

export default function Settings () {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 28}}>Hello world, this is my settings!</Text>
    </View>
  )
}

Settings.navigationOptions = props => ({
  title: 'settings',
  headerTitleStyle: {
    fontSize: 28,
  },
  headerStyle: {
    shadowColor: 'grey',
    borderBottomWidth: 0.1
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  }
})