import React, { useState } from 'react';
import { View, TextInput, Button, Modal, StyleSheet } from 'react-native';
import registerNewUser from '../../api/registerNewUser.js';

const RegisterModal = ({ visible, onClose }) => {
  const [new_userLogin, setEmail] = useState('');
  const [new_userPassword, setPassword] = useState('');
  const [new_userPassword_Check, setPassword2] = useState('');

  const handleRegister = async () => {
    // Handle registration logic here
    console.log('Login:', new_userLogin);
    console.log('Password:', new_userPassword);
    console.log('Password2:', new_userPassword_Check);
    
    if(new_userPassword == new_userPassword_Check){
      try {
        const userData = await registerNewUser(new_userLogin, new_userPassword);
        console.log('User registered:', userData);
        // Handle success
      } catch (error) {
        // Handle error
        console.error('Error registering user:', error);
      }
    }

    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Login"
          onChangeText={setEmail}
          value={new_userLogin}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={setPassword}
          value={new_userPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Password2"
          onChangeText={setPassword2}
          value={new_userPassword_Check}
          secureTextEntry
        />
        <Button title="Register" onPress={handleRegister} />
        <Button title="Close" onPress={onClose} />
      </View>
    </Modal>
  );
};

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
});

export default RegisterModal;
