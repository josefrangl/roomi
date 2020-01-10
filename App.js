/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

// Navigation
// import { createAppContainer } from 'react-navigation';
// import AppNavigator from './navigation/appNavigation';

import RootNavigator from './navigation/rootNavigation';

// const AppContainer = createAppContainer(AppNavigator);


const App: () => React$Node = () => {
  return (
    <RootNavigator />
  );
};

export default App;

{/*<AppContainer style={{ backgroundColor: 'white' }}/>*/}