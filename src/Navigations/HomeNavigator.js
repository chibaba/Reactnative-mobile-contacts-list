import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'

import {Text, View} from 'react-native'

const Contacts = () => {
  return (<View>
    <Text>Hi from contacts</Text>
  </View>)
}

const ContactDetail = () => {
  return (<View>
    <Text>Hi from contact detail</Text>
  </View>)
}
const CreateContacts = () => {
  return (<View>
    <Text>Hi from create contacts</Text>
  </View>)
}

const Settings = () => {
  return (<View>
    <Text>Hi from contact settings</Text>
  </View>)
}

const HomeNavigator = () => {
  const HomeStack=createStackNavigator()
  return (
    <HomeStack.Navigator>
    <HomeStack.Screen name="Contacts" component={Contacts}></HomeStack.Screen>
    <HomeStack.Screen name="Contact Detail" component={ContactDetail}></HomeStack.Screen>
    <HomeStack.Screen name="Create Contact" component={CreateContacts}></HomeStack.Screen>
    <HomeStack.Screen name="Settings" component={Settings}></HomeStack.Screen>

       </HomeStack.Navigator>
  )
}

export default HomeNavigator;