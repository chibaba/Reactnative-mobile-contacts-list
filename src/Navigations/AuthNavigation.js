import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Text, View} from 'react-native';

const Login = () => {
  return (
    <View>
      <Text>Hi from contacts</Text>
    </View>
  );
};

const Signup = () => {
  return (
    <View>
      <Text>Hi from contact detail</Text>
    </View>
  );
};

const AuthNavigator = () => {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={Login}></AuthStack.Screen>
      <AuthStack.Screen name="Register" component={Signup}></AuthStack.Screen>
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
