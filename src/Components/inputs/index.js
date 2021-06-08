import React from 'react'
import { View, Text } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

import styles from './styles'

const Input = ({onChangeText, icon, style, value, label}) => {
  return (
    <View>

    {label && <Text>{label}</Text>}

    <View>{icon && icon}</View>

           <TextInput
      style={[style, style.TextInput]}
      onChangeText={onChangeText}
      value={value}
      />
    </View>
  )
}

export default Input
