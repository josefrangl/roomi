import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'



export default function Listing ({_id, item}) {
  
  const img_path = '../assets/IMG_6514.jpg';

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
        <Text style={styles.price} >Hello, {item._id}</Text>
      </View>
    </View>
  );
};

const height = '100%';
const width = '100%';

const styles = StyleSheet.create({
  listingCard: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    height: 300
  },
  image: {
    flex: 4.5,
    height,
    width,
  },
  box: {
    flex: 3.5,
    width,
    backgroundColor: 'lightgrey',

  },
  price: {
    fontSize: 16,
  }

})