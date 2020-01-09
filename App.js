/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';


import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Home from './views/home';
import Profile from './views/profile';
import ListingPage from './views/listingPage';


const App: () => React$Node = () => {
  return (
    <AppContainer style={{ backgroundColor: 'white' }}/>
  );
};

/*function LogoTitle () {
  return (
    <View>
      <Text 
        style={{fontSize: 32, fontWeight: '500', textAlign: 'left', }}
       >
         roomi
      </Text>
    </View>
  )
}*/


const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Profile: {
      screen: Profile
    },
    ListingPage: {
      screen: ListingPage
    }
  },
  { 
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'white',
        shadowColor: 'transparent',
      },
      cardStyle: {
        backgroundColor: 'white',
      },
      headerStatusBarHeight: 35,
      headerTintColor: 'black',
      headerBackTitle: ' ',
      /*headerTitleStyle: {
        marginTop: 0,
        justifyContent: 'center',
      }*/
      /*headerTitle: () => <LogoTitle />,*/
    },
  },
)

const AppContainer = createAppContainer(AppNavigator);



export default App;
