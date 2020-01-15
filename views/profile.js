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

// REDUX
import { connect } from 'react-redux';
import { setAuthState } from '../store/actions/actions';

Profile = ({ navigation, userAuthInfo, setAuthState }) => {
  // here goes listing card component
  return (
    <View style={styles.container}>
      {console.log(userAuthInfo)}
      <Text>{userAuthInfo.firstName}{userAuthInfo.lastName}</Text>
      <Text>{userAuthInfo.email}</Text>
      <Text>{userAuthInfo.phone_number}</Text>
      <Text style={{fontSize: 28}}>Hell 22!!!!!o world, this is my profile!</Text>
    </View>
  )
};

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

const mapStateToProps = (state) => ({
  userAuthInfo: state.userAuthInfo,
});

const mapDispatchToProps = (dispatch) => ({
  setAuthState: (info) => dispatch(setAuthState(info)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);