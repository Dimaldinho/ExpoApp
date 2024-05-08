import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import RegisterModal from './RegisterModal';
import checkLogin_Password from '../../api/loginCheck';


const LoginScreen = ({ navigation }) => {
  const [userLogin, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');
  const [isRegisterModalVisible, setIsRegisterModalVisible] = useState(false);
  
  /*const handleRegister = () => {
    navigation.navigate('Register');
  };*/
  
  const toggleRegisterModal = () => {
    setIsRegisterModalVisible(!isRegisterModalVisible);
  };
  const handleLogin = async () => {
   
    console.log('Login:', userLogin);
    console.log('Password:', userPassword);

    if(await checkLogin_Password(userLogin,userPassword)){
      console.log("Success")
      navigation.navigate('Main');
    }
  
  };


  return (
    <View style={styles.container}>
        
      <TextInput
        style={styles.input}
        placeholder="Login"
        onChangeText={setEmail}
        value={userLogin}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={userPassword}
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
