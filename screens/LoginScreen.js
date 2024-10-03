import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity, Image } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomText from '../components/CustomText';
import {useNavigation} from '@react-navigation/native'
import { loginUser } from '../api/auth';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/auth/login/', {
        username,
        password,
      });
  
      if (response.data.token) {
        // Handle successful login, e.g., save token or navigate to another screen
        console.log('Login successful!');
      } else {
        Alert.alert('Error', 'Invalid credentials');
      }
    } catch (error) {
      Alert.alert('Error', 'Invalid credentials or server issue');
    }
  };
  const toggleCheckbox = () => {
    setIsChecked(!isChecked); // Toggle checkbox state
  };

  const Navigation = useNavigation();
  

  return (
    <View style={styles.backcover}>
    <View style={styles.container}>
      <CustomText style={styles.title}>Create Account</CustomText>
      <CustomText style={styles.subtitle}>
        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      </CustomText>
      <TextInput
        style={styles.input}
        placeholder="Email or phone number"
        placeholderTextColor="#C4C4C4"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#C4C4C4"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
     
          <TouchableOpacity onPress={() => { /* Handle password reset */ }}>
            <CustomText style={styles.forgotPassword}>Forgotten your password?</CustomText>
          </TouchableOpacity>
      {/* Custom Checkbox */}
      <View style={styles.policy}>
        <TouchableOpacity style={styles.checkboxContainer} onPress={toggleCheckbox}>
          <View style={[styles.checkbox, isChecked && styles.checkedCheckbox]}>
            {isChecked && <Text style={styles.checkmark}>✓</Text>}
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Navigation.navigate('')}>
            <Text style={styles.conditions}>Accept Terms & Conditions</Text>
        </TouchableOpacity>
      </View>
     

      

      <TouchableOpacity style={styles.button} onPress={''}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>


      <View style={styles.signInRedirect}>
        <TouchableOpacity onPress={() => Navigation.navigate('Register')}>
          <Text style={styles.createAccount}>
            Dont have an account?{' '}
          </Text>
          <Text style={styles.create}>Register</Text>
        </TouchableOpacity>
      </View>

      

      <View style={styles.linear}>
        <View style={styles.lines}></View>
        <Text style={styles.orSignInWith}>Or sign in with</Text>
        <View style={styles.lines}></View>
      </View>

      <View style={styles.socialIcons}>
        <TouchableOpacity onPress={() => { /* Handle Apple login */ }}>
          <View style={styles.circle}>
            <Image source={require('../assets/images/google.png')} style={styles.icon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { /* Handle Google login */ }}>
          <View style={styles.circle}>
            <Image source={require('../assets/images/apple.png')} style={styles.icon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { /* Handle Facebook login */ }}>
          <View style={styles.circle}>
            <Image source={require('../assets/images/facebook.png')} style={styles.icon} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  </View>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  backcover: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    // flex: 1,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  title: {
    marginTop: 80,
    fontSize: 24,
    color: '#000',
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#3A3A3A',
    marginBottom: 20,
    textAlign: 'center',
    fontWeight:'bold',
    
  },
  input: {
    backgroundColor: '#FBFBFB',
    borderRadius: 15,
    padding: 15,
    color: '#000',
    marginBottom: 15,
  },
  policy :{
    flexDirection:'row',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#aaa',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderRadius:5,
  },
  checkedCheckbox: {
    backgroundColor: '#000',
  },
  checkmark: {
    color: '#fff',
    fontSize: 10,
  },
  terms: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  conditions: {
    fontSize: 12,
    color: '#9EA1A1',
  },
  createAccount: {
    color: '#aaa',
    textAlign: 'center',
    paddingTop: 10,
    paddigBottom:10,
  },
  create: {
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color:'#aaa',
    // paddingBottom: 30,
  },
  forgotPassword: {
    color: '#aaa',
    textAlign: 'right',
    marginBottom: 40,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#111337',
    padding: 15,
    borderRadius: 15,
    marginBottom: 70,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signInRedirect:{
    padding:20,
  },
  orSignInWith: {
    color: '#aaa',
    textAlign: 'center',
  },
  linear: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  lines: {
    backgroundColor: '#000',
    height: 1,
    borderRadius: 5,
    width: 80,
    margin: 10,
  },
  circle: {
    backgroundColor: '#fff',
    borderRadius: 50,
    height: 55,
    width: 55,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom:70,
  },
  icon: {
    width: 40,
    height: 40,
  },

})
