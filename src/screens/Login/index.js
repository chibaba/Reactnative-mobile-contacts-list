import React from 'react';
import { Text, TextInput, View} from 'react-native'
import Container from '../../Components/Container';
import Input from '../../Components/inputs';



const Login = () => {
  const [value, onChangeText] =React.useState('Useless placeholder')
  return (
    <Container>
      <Input
      label="Username"
      style={{height: 40, borderColor: 'brown', borderWidth: 1}}
      onChangeText={(text) => onChangeText(text)}
      value={value}
      iconPosition = "right"
      error= {'this is field is required'}
      />

<Input
      label="Password"
      style={{height: 40, borderColor: 'brown', borderWidth: 1}}
      onChangeText={(text) => onChangeText(text)}
      value={value}
      icon={<Text>HIDE</Text>}
      iconPosition = "right"
      />
    </Container>
  );
};

export default  Login;