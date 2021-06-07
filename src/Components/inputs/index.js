import React from 'react'
import { View, Text } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const Input = ({onChangeText, style, value}) => {
  return (
    <View>
           <TextInput
      style={[style, style.TextInput]}
      onChangeText={onChangeText}
      value={value}
      />
    </View>
  )
}

export default Input
