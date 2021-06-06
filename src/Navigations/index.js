import React, {useContext} from 'react';

import {NavigationContainer} from '@react-navigation/native'
import {Text} from 'react-native'
import AuthNavigator from './AuthNavigation';
import DrawerNavigator from './DrawerNavigator';
import { GlobalContext } from '../context/reducers/Provider';

const AppNavContainer = () => {

  const {
    authState: {isLoggedIn},
  }= useContext(GlobalContext)

  console.log('isLoggedIn  :>> ', isLoggedIn)
  return (
    <NavigationContainer >
    {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
       </NavigationContainer>
  )
}

export default AppNavContainer;