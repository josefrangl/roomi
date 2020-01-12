import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';

import SignIn from '../views/signIn';



const myDefaultStackOptions = {
  headerShown: false,
  cardStyle: {
    backgroundColor: 'white',
    opacity: 1,
  },
  headerStatusBarHeight: 35,
  headerTintColor: 'black',
  headerBackTitle: ' ',
}

const AuthNavigator = createStackNavigator(
  {
    'SignIn': SignIn
  },
  {
    initialRouteName: 'SignIn',
    defaultNavigationOptions: myDefaultStackOptions
  }
);



export default AuthNavigator;