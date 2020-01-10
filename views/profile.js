import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  ScrollView,
  View,
  Text,
  Button,
} from 'react-native';


export default function Profile () {
  // here goes listing card component
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 28}}>Hell 22 o world, this is my profile!</Text>
    </View>
  )
}

Profile.navigationOptions = props => ({
  title: 'your rooms',
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