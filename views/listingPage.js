import React from 'react';

import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  Dimensions,
} from 'react-native'


export default function ListingPage ({navigation}) {
  const item = navigation.state.params.item
  
  const win = Dimensions.get('window');
  const height = '100%';
  const img_path = '../assets/IMG_6514.jpg';

  return(
    <View style={{}}>
      <ScrollView style={{height}}>
        {/*Gallery of images*/}
        <Image
            style={{
              flex: 1,
              width: win.width,
              height: win.width*(3/4)
            }}
            resizeMode='contain'
            source={require(img_path)}
          />
        <View style={styles.container}>
          <Text style={{fontWeight: 'bold', fontSize: 28, marginBottom: 10}}>
            Details
          </Text>
          <Text style={styles.defaultText}>{item.price} / Month</Text>
          <Text style={styles.defaultText}>
            Your friend: {item.host} is renting this apartment!
          </Text>
          <Text style={styles.defaultText}>Address: {item.address}</Text>
          <Text style={styles.defaultText}>{item.date_from}{item.date_until}</Text>
          <Text style={styles.defaultText}>{item.roommates} Roommates</Text>
          <Text style={styles.defaultText}>{item.shared_room ? 'Shared Room' : 'Private Room'}</Text>
          <Text style={{fontWeight: 'bold', fontSize: 28, marginBottom: 10}}>
            Contact {item.host}
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity onPress={()=> alert('call')}>
              <Image 
                source={require('../assets/call_icon.png')}
                style={{width: 60, height: 60}}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> alert('message')}>
              <Image 
                source={require('../assets/message_icon.png')}
                style={{width: 60, height: 60}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

ListingPage.navigationOptions = props => ({
  title: 'roomi',
  headerTitleStyle: {
    fontSize: 32,
  },
});

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  defaultText: {
    fontSize: 22,
    marginBottom: 7,
    fontFamily: 'System'
  }
})