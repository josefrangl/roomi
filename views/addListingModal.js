import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Text,
} from 'react-native';

export default function AddListing ({navigation}) {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text>My Modal!</Text>
      <View style={styles.buttonContainer}>
        <Button
          title='Cancel'
          style={styles.buttonCancel}
          onPress={() => navigation.goBack()}
        />
        <Button
          title='Add'
          style={styles.buttonAdd}
          onPress={() => {
            alert('Added');
            navigation.goBack();
          }}
        />

      </View>
    </SafeAreaView>
  )
}

const height = '100%';
const width = '100%';

const styles = StyleSheet.create({
  mainContainer: {
    height, 
    width,
    flex: 1,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  },
  buttonCancel: {
    flex: 2,
    backgroundColor: 'lightgrey',
  },
  buttonAdd: {
    flex: 2,
    backgroundColor: 'grey',
  }
})