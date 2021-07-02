import React, {useState} from 'react'
import { View,TouchableOpacity, Text, ActivityIndicator } from 'react-native'
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
    <View style={[styles.loaderSection]}>
    {loading && <ActivityIndicator color={primary ? colors.secondary :colors.primary}/>}

    {title && <Text style ={{color: disabled ? 'black' : colors.white, paddingLeft: loading ?  5 : 0}}>{title}</Text>}
    </View>

    </TouchableOpacity>
  )
}

export default CustomButton
