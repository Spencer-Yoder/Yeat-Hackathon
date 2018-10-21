import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native';
import {createDrawerNavigator, DrawerItems} from 'react-navigation';

import ResHome from './components/screens/ResHome.js';
import RegScreen from './components/screens/RegScreen.js';
import BankHome from './components/screens/bankHome.js';

export default class App extends React.Component {
  render() {
    return (
      <AppDrawerNav />
    );
  }
}

const DrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1, }}>
    <View style={{ height: 250, backgroundColor: '#fffff', flex: 1, }}>
      <Image source={require('./components/images/logosmall.png')} />
    </View>
    <ScrollView>
      <DrawerItems {...props}/>
    </ScrollView>
  </SafeAreaView>
)

const AppDrawerNav = createDrawerNavigator({
  'Restaurant Home': ResHome,
  'Bank Home' : BankHome,
  Register:RegScreen,
},{
  contentComponent: DrawerItems,
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ce93d8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
