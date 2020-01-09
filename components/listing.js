import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  Button
} from 'react-native'



export default function Listing ({_id, item}) {
  
  const img_path = '../assets/IMG_6514.jpg';
  const base_path = '../assets/';
  const img_path2 = `../assets/${item.img_id}`;
  console.log(img_path, img_path2);
  console.log('hello');

  return (
    <View style={styles.listingCard}>
      <View style={styles.image}>
        <Image
          style={{
            height,
            width
          }}
          resizeMode='center'
          source={require(img_path)}
        />
      </View>
      <View style={styles.box}>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <Text style={styles.defaultText}>{item.price}</Text>
          <Text style={styles.defaultText}>{item.roommates} RM</Text>
          <Text style={styles.defaultText}>Your friend: {item.host} is renting this room.</Text>
        </View>
        <View>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <Text style={styles.defaultText}>Address: {item.address}</Text>  
            <Text style={styles.defaultText}>{item.date_from}</Text>
            <Text style={styles.defaultText}>{item.date_until ? item.date_until : ''}</Text>
            <Button title={`call: ${item.host}`} onPress={()=> alert('Calling host')} />
          </View>
        </View>
      </View>
    </View>
  );
};

const height = '100%';
const width = '100%';

const styles = StyleSheet.create({
  listingCard: {
    flex: 1,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    height: 300,
  },
  image: {
    flex: 4.5,
    height,
    width,
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
  },
  box: {
    flex: 3.5,
    width,
    backgroundColor: 'lightgrey',

  },
  price: {
    fontSize: 16,
  },
  defaultText: {
    marginLeft: 5,
    fontSize: 18,
  }

})