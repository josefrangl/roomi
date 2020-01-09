import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native'



export default function ListingCard ({navigation, _id, item}) {
  
  const img_path = '../assets/IMG_6514.jpg';

  return (
    <TouchableOpacity 
      onPress={()=> navigation.navigate('ListingPage', {item})}
      style={{activeOpacity:0}}
      >

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
    </TouchableOpacity>
  );
};

const height = '100%';
const width = '100%';

const styles = StyleSheet.create({
  listingCard: {
    flex: 1,
    
    backgroundColor: 'white',
    /*overflow: 'hidden',*/
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginBottom: 20,
    height: 300,
    borderColor: '#e8e9eb',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 7,
    borderRadius: 20,
  },
  image: {
    borderTopRightRadius: 7,
    borderTopLeftRadius: 7,
    overflow: 'hidden',
    flex: 4.5,
    height,
    width,

  },
  box: {
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    flex: 3.5,
    width,
    backgroundColor: 'white',

  },
  price: {
    fontSize: 16,
  },
  defaultText: {
    marginLeft: 5,
    fontSize: 18,
    fontFamily: 'System'
  }

})