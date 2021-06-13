import colors from '../../assets/theme/colors'
import {StyleSheet} from 'react-native'
export default StyleSheet.create({
  wrapper:{
    height: 42,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 5,
    marginTop: 5
  },
  inputContainer: {
    paddingVertical: 12,

  },
  textInput: {
    // backgroundColor: 'red',
    flex: 1,
  },
  error: {
    color: colors.danger,
    paddingTop: 4,
    fontSize: 12,

  }

})