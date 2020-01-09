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
  Image,
  TouchableOpacity
} from 'react-native';

import ListingCard from './components/listingCard';

const addImage = require('./assets/add_png.png');

export default function Home ({navigation}) {

  return (
    <View style={{flex: 1}}>
      
      <FlatList
        data={tempData}
        renderItem={({item}) => (
          <ListingCard 
            navigation={navigation}
            item={item}
          />)}
        keyExtractor={item => String(item._id)}
      />
      <Button 
        title='See my profile'
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}



const height = '100%';
const width = '100%';

Home.navigationOptions = {
  title: 'roomi',
  headerTitleStyle: {
    fontSize: 32,
  },
   headerRight: () => (
      <TouchableOpacity
        onPress={()=> alert('test')}
      >
        <Image 
          source={addImage}
          style={{ height: 22, width: 22, marginRight: 17 }}
        />
      </TouchableOpacity>
    ),
}


const tempData = [
  {
    _id: 1,
    price: '400€',
    address: 'my house',
    host: 'bryan stark',
    connection: 1,
    second: '',
    shared_room: false,
    roommates: 3,
    date_from: 'from march',
    date_until: '',
    img_id: 'IMG_6514.jpg'
  },
  {
    _id: 2,
    price: '500€',
    address: 'my house',
    host: 'bryan stark',
    connection: 1,
    second: '',
    shared_room: false,
    roommates: 3,
    date_from: 'from march',
    date_until: 'until july',
    img_id: 'IMG_6514.jpg'
  },
  {
    _id: 3,
    price: '600€',
    address: 'my house',
    host: 'bryan stark',
    connection: 1,
    second: '',
    shared_room: false,
    roommates: 3,
    date_from: 'from march',
    date_until: '',
    img_id: 'IMG_6514.jpg'
  },
  {
    _id: 4,
    price: '700€',
    address: 'my house',
    host: 'bryan stark',
    connection: 1,
    second: '',
    shared_room: false,
    roommates: 3,
    date_from: 'from march',
    date_until: '',
    img_id: 'IMG_6514.jpg'
  },
  {
    _id: 5,
    price: '800€',
    address: 'my house',
    host: 'bryan stark',
    connection: 1,
    second: '',
    shared_room: false,
    roommates: 3,
    date_from: 'from march',
    date_until: '',
    img_id: 'IMG_6514.jpg'
  },
  {
    _id: 6,
    price: '900€',
    address: 'my house',
    host: 'bryan stark',
    connection: 1,
    second: '',
    shared_room: false,
    roommates: 3,
    date_from: 'from march',
    date_until: '',
    img_id: 'IMG_6514.jpg'
  },
  {
    _id: 7,
    price: '1000€',
    address: 'my house',
    host: 'bryan stark',
    connection: 1,
    second: '',
    shared_room: false,
    roommates: 3,
    date_from: 'from march',
    date_until: '',
    img_id: 'IMG_6514.jpg'
  },
  {
    _id: 8,
    price: '1100€',
    address: 'my house',
    host: 'bryan stark',
    connection: 1,
    second: '',
    shared_room: false,
    roommates: 3,
    date_from: 'from march',
    date_until: '',
    img_id: 'IMG_6514.jpg'
  }
];