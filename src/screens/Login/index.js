import React from 'react';
import { Text, TextInput, View} from 'react-native'
import Container from '../../Components/Container';



const Login = () => {
  const [value, onChangeText] =React.useState('Useless placeholder')
  return (
    <Container>
      <Text>Hi from contacts</Text>
      <TextInput
      style={{height: 40, borderColor: 'brown', borderWidth: 1}}
      onChangeText={(text) => onChangeText(text)}
      value={value}
      />
    </Container>
  );
};

export default  Login;