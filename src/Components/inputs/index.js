import React from 'react'
import { View, Text } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import colors from '../../assets/theme/colors'

import styles from './styles'

const Input = ({onChangeText, icon, style, value, label, iconPosition, error}) => {

  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if(iconPosition === 'left' ) {
        return 'row'
      } else  if(iconPosition === 'right') {
        return 'row-reverse'
      }
    }
  };

  const getBorderColor = () => {
    if (error) {
      return colors.danger
    }
    else {
      return colors.grey
    }
  }
  return (
    <View style={styles.inputContainer}>
    {label && <Text>{label}</Text>}
        <View style={[styles.wrapper, {borderColor: getBorderColor(), flexirection: getFlexDirection()}]}>
    <View>{icon && icon}</View>
           <TextInput
      style={[style, style.TextInput]}
      onChangeText={onChangeText}
      value={value}
      />
    </View>
    </View>
  )
}

export default Input
