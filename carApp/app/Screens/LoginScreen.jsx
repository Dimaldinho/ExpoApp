import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import RegisterModal from './RegisterModal';

const LoginScreen = ({ /*navigation*/ }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegisterModalVisible, setIsRegisterModalVisible] = useState(false);
  /*const handleRegister = () => {
    navigation.navigate('Register');
  };*/
  const toggleRegisterModal = () => {
    setIsRegisterModalVisible(!isRegisterModalVisible);
  };
  const handleLogin = () => {
   
    console.log('Email:', email);
    console.log('Password:', password);
  };


  return (
    <View style={styles.container}>
        
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      
      <Button title="Login" onPress={handleLogin} />
      {/*<Button title="Register" onPress={handleRegister} >/*/}
      <Button title="Register" onPress={toggleRegisterModal} />
        <RegisterModal
        visible={isRegisterModalVisible}
        onClose={toggleRegisterModal}
/>

    </View>
  );
};
{/* Your login screen UI */}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 20, // Add some space between inputs and buttons
  },
});

export default LoginScreen;
