import colors from '../../assets/theme/colors'
import {StyleSheet} from 'react-native'
export default StyleSheet.create({
  wrapper:{
    height: 42,
     paddingHorizontal: 5,
     borderRadius: 4,
     alignItems: "center",
     justifyContent: "space-evenly"
  },
  loaderSection: {
    flexDirection: 'row'
  },
  textInput: {
    // backgroundColor: 'red',
    flex: 1,
    width: '100%'
  },
  error: {
    color: colors.danger,
    paddingTop: 4,
    fontSize: 12,

  }

})