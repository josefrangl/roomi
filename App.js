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
import { createBottomTabNavigator} from 'react-navigation-tabs';


import Home from './views/home';
import Profile from './views/profile';
import ListingPage from './views/listingPage';
import Settings from './views/settings';
import AddListing from './views/addListingModal';


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

const myDefaultStackOptions = {
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
}


const homeStack = createStackNavigator({
    Home: Home,
    ListingPage: ListingPage,
  },
  {   
    initialRouteName: 'Home',
    defaultNavigationOptions: myDefaultStackOptions
  }
)

const rootHomeStack = createStackNavigator(
{
  Main: {
    screen: homeStack,
  },
  AddListing: {
    screen: AddListing
  }
},
{
  mode: 'modal',
  headerMode: 'none',
  defaultNavigationOptions: myDefaultStackOptions,
}
);


const profileStack = createStackNavigator({
    Profile: Profile,
  },
  {
    initialRouteName: 'Profile',
    defaultNavigationOptions: myDefaultStackOptions
  }
);

const settingsStack = createStackNavigator({
    Settings: Settings,
  },
  {
    initialRouteName: 'Settings',
    defaultNavigationOptions: myDefaultStackOptions
  }
);

const AppNavigatorTab = createBottomTabNavigator({
  Home: rootHomeStack,
  Profile: profileStack,
  Settings: settingsStack,
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions: ({navigation}) => ({
  }),
  tabBarOptions: {
    activeTintColor: 'black',
    labelStyle: {
      fontSize: 20,
    },
    style: {

      backgroundColor: 'white',
    },
  }
});


const AppContainer = createAppContainer(AppNavigatorTab);



export default App;
