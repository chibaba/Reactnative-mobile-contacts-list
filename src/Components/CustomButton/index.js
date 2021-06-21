import React, {useState} from 'react'
import { View,TouchableOpacity, Text } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import colors from '../../assets/theme/colors'

import styles from './styles' 

const CustomButton = ({title, secondary, primary, danger, disabled, loading, onPress, }) => {
// const  [focused, setFocused] = useState(false)




  const getBgColor = () => {
    if(disabled) {
      return colors.grey
    }
 if(primary) {
   return colors.primary
 }

    if (danger) {
      return colors.danger
    }
    if (secondary) {
      return colors.danger
    }

  }
  return (
    <TouchableOpacity 

    disabled={disabled}
    onPress={onPress}
    
    style={[styles.wrapper, {backgroundColor:getBgColor()}]}>
    {title && <Text style ={{color: disabled ? 'black' : colors.white}}>{title}</Text>}

    </TouchableOpacity>
  )
}

export default CustomButton
