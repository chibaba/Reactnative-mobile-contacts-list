import React from 'react'
import { Text, TextInput, View } from 'react-native';
import Container from '../Container/index';
import CustomButton from '../../Components/CustomButton/index';
import Input from '../inputs/index'

const Index =() => {
  return (
    <Container>
    <Input
    label="Username"
    // style={{height: 40, borderColor: 'brown', borderWidth: 1}}
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
       <CustomButton  primary  title="Submit"  />
  </Container>
      
    
  )
}

export default Index
