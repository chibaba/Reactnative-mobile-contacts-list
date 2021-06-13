import React, {useState} from 'react'
import { View, Text } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import colors from '../../assets/theme/colors'

import styles from './styles' 

const Input = ({onChangeText, icon, style, value, label, iconPosition, error, ...props) => {
const  [focused, setFocused] = useState(false)


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
 if(focused) {
   return colors.primary
 }

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
        <View style={[styles.wrapper,
        {    alignItems: icon ? "center": 'baseline'
}, {borderColor: getBorderColor(),
 flexirection: getFlexDirection()}]}>
    <View>{icon && icon}</View>
           <TextInput
      style={[style, style.TextInput]}
      onChangeText={onChangeText}
      value={value}
      onFocus = {() => {
        setFocused(true);
      }}
      onBlur = {() => {
        setFocused(false);
      }}
      />
    </View>
    {error && <Text style={styles.error}>{error}</Text>}
    </View>
  )
}

export default Input
