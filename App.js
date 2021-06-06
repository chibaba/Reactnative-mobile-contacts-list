/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
import React from 'react';
import AppNavContainer from './src/Navigations';
import GlobalProviders from './src/context/reducers/Provider';



const App = () => {
return 
   <GlobalProviders>
   <AppNavContainer />
   </GlobalProviders>
  
}



export default App;
