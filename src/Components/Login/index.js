import React from 'react'
import { Text, TextInput, View, Image, TextInputBase, TouchableOpacity} from 'react-native';
import Container from '../Container/index';
import CustomButton from '../../Components/CustomButton/index';
import Input from '../inputs/index'
import styles from './styles';

const LoginComponent =() => {
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
       <View>Need a new Account?</View>
       <TouchableOpacity>
         <Text>Register</Text>
       </TouchableOpacity>
    </View>
  </Container>
      
    
  )
}

export default LoginComponent
