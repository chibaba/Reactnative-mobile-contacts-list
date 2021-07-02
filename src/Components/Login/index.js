import React from 'react'
import { Text, TextInput, View, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Container from '../Container/index';
import CustomButton from '../../Components/CustomButton/index';
import Input from '../inputs/index'
import styles from './styles';

const LoginComponent =() => {
  const {navigate}= useNavigation();
  return (
    <Container>
    <Image height={70} width={70} source={require('../../assets/images/logo.jpeg')} style={styles.logoImage}/>
    <View>
     <Text style={styles.title}>Welcome to Our Mobile contact lists</Text>
     <Text style={styles.subTitle}>Please Login here</Text>
   <View style={styles.form}>

       <Input
    label="Username"
    iconPosition = "right"
    placeholder= "Enter username"
    // error= {'this is field is required'}
    />

<Input
    label="Password"
    // style={{height: 40, borderColor: 'brown', borderWidth: 1}}
        icon={<Text>Show</Text>}
    iconPosition = "right"
    secureTextEntry={true}
    placeholder='enter password'
    />
   </View>
       <CustomButton  primary  title="Submit"  />
       <View style={styles.createSection}>
       <Text style={styles.infoText}> Need a New Account ?</Text>
       </View>
       <TouchableOpacity onPress{() =>{navigate(REGISTER)}}>
         <Text style={styles.linkBtn}>Register</Text>
       </TouchableOpacity>
    </View>
  </Container>
      
    
  )
}

export default LoginComponent
