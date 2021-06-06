import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'

import {Text, View} from 'react-native'
import { CONTACT_CREATE, CONTACT_DETAIL, CONTACT_LIST, SETTINGS } from '../constants/routeNames';
import Contacts from '../screens/Contacts';
import ContactDetail from '../screens/ContactDetails';
import CreateContact from '../screens/CreateContacts';
import Settings from '../screens/Settings';







const HomeNavigator = () => {
  const HomeStack=createStackNavigator()
  return (
    <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
    <HomeStack.Screen name={CONTACT_LIST} component={Contacts}></HomeStack.Screen>
    <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetail}></HomeStack.Screen>
    <HomeStack.Screen name={CONTACT_CREATE} component={CreateContact}></HomeStack.Screen>
    <HomeStack.Screen name={SETTINGS} component={Settings}></HomeStack.Screen>

       </HomeStack.Navigator>
  )
}

export default HomeNavigator;