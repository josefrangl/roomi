import React, { useEffect } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';


function Welcome ({ navigation }) {


  return (
    <View style={{flex: 1, backgroundColor: 'white', alignContents: 'center', justifyContent: 'center'}}>
      <Text>Welcome to roomi!</Text>
      <TouchableOpacity
        style={styles.submit}
        onPress={() => navigation.navigate('Auth')}
      >
        <Text>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}


/*Home.navigationOptions = props => ({
  title: 'roomi',
  headerTitleStyle: {
    fontSize: 32,
  },
  headerRight: () => (
    <TouchableOpacity onPress={()=> props.navigation.navigate('AddListing')}>
      <Image 
        source={addImage}
        style={{ height: 22, width: 22, marginRight: 17 }}
      />
    </TouchableOpacity>
  ),
});*/

const styles = StyleSheet.create({
  submit: {
    backgroundColor: '#c0ff4a',
    marginTop: 20,
    padding: 12,
    borderRadius: 30,
    justifyContent: 'center',
    alignContent: 'center'
  },
})

export default Welcome;


