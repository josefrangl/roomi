/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Listing from './components/listing';

const App: () => React$Node = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={tempData}
        renderItem={({item}) => (
          <Listing 
            item={item}
          />)}
        keyExtractor={item => String(item._id)}
      />



      {/*<View style={{}}>
        <Text style={{color: 'blue', fontSize: 30}}>Hello World!</Text>
      </View>
      <View>
        <Button
          onPress={() => {
            alert('You tapped this button!');
          }}
          title="Try me"
          color="#841584"
        />
      </View>*/}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

const tempData = [
  {
    _id: 1,
    price: '400€',
    address: 'my house',
    host: 'bryan stark',
    date: 'from march',
    img_id: 'IMG_6514.jpg'
  },
  {
    _id: 2,
    price: '500€',
    address: 'my house',
    host: 'bryan stark',
    date: 'from march',
    img_id: 'IMG_6514.jpg'
  },
  {
    _id: 3,
    price: '600€',
    address: 'my house',
    host: 'bryan stark',
    date: 'from march',
    img_id: 'IMG_6514.jpg'
  },
  {
    _id: 4,
    price: '700€',
    address: 'my house',
    host: 'bryan stark',
    date: 'from march',
    img_id: 'IMG_6514.jpg'
  },
  {
    _id: 5,
    price: '800€',
    address: 'my house',
    host: 'bryan stark',
    date: 'from march',
    img_id: 'IMG_6514.jpg'
  },
  {
    _id: 6,
    price: '900€',
    address: 'my house',
    host: 'bryan stark',
    date: 'from march',
    img_id: 'IMG_6514.jpg'
  },
  {
    _id: 7,
    price: '1000€',
    address: 'my house',
    host: 'bryan stark',
    date: 'from march',
    img_id: 'IMG_6514.jpg'
  },
  {
    _id: 8,
    price: '1100€',
    address: 'my house',
    host: 'bryan stark',
    date: 'from march',
    img_id: 'IMG_6514.jpg'
  }
];

export default App;
