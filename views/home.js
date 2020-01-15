import React, { useEffect } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

import { connect } from 'react-redux'; 
import { updateListingsState } from '../store/actions/actions';

import ListingCard from '../components/listingCard';

import { fetchListings } from '../utils/apiClientService';

const addImage = require('../assets/add_png.png');



const API_URL = 'https://roomi-end.herokuapp.com';


Home = ({ navigation, listings, updateListingsState }) => {

  getListings = async () => {
    
    if(listings.length) return // avoid duplication on reload app
    fetchListings()
      .then(res => {
        updateListingsState(res.data);
      })
      .catch(e => {
        console.log('error in getting listings:', e);
      });
  }

  useEffect(() => {
    getListings();
  }, []);


  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {listings.length ? 
        <FlatList
          data={listings}
          renderItem={({item}) => (
            <ListingCard 
              navigation={navigation}
              item={item}
            />)}
          keyExtractor={item => String(item._id)}
        />
      :
        <View style={{flex: 1, alignContents: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size='large' color='grey' />
        </View>
      }
    </View>
  );
}


Home.navigationOptions = props => ({
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
});


const mapStateToProps = (state) => ({
  listings: state.listings,
});

const mapDispatchToProps = (dispatch) => ({
  updateListingsState: (listings) => dispatch(updateListingsState(listings)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
