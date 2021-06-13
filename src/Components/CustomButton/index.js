import React, {useState} from 'react'
import { View,TouchableOpacity, Text } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import colors from '../../assets/theme/colors'

import styles from './styles' 

const CustomButton = ({title, secondary, primary, danger, disabled, loading, ...props}) => {
const  [focused, setFocused] = useState(false)




  const getBgColor = () => {
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
    
    style={[styles.inputContainer, {backgroundColor:getBgColor()}]}>
    {title && <Text>{title}</Text>}

    </TouchableOpacity>
  )
}

export default CustomButton
