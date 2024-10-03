import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomText from '../../components/CustomText';



const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false); // State for checkbox


  const route = 'http://192.168.5.174:8001/api/user/register/';
  const handleRegister = () => {
    if (password === confirmPassword) {
      console.log(`Sending request to ${route}`);
      api.post(route, {
        username: username,
        password: password,

      }).then(response => {
        navigation.navigate('Login');
        console.log("Sign", response.data);
        
      }).catch(error => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
      })

    } else {
      console.error('Passwords do not match');
    }
  };

  const Navigation = useNavigation();

  const toggleCheckbox = () => {
    setIsChecked(!isChecked); // Toggle checkbox state
  };

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
          <TextInput
            style={styles.input}
            placeholder="Confirm password"
            placeholderTextColor="#C4C4C4"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
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
         

          

          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>


          <View style={styles.signInRedirect}>
            <TouchableOpacity onPress={() => Navigation.navigate('Login')}>
              <Text style={styles.createAccount}>
                Don't have an account?{' '}
              </Text>
              <Text style={styles.create}>Sign In</Text>
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
                <Image source={require('../../assets/images/apple.png')} style={styles.icon} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { /* Handle Google login */ }}>
              <View style={styles.circle}>
                <Image source={require('../../assets/images/google.png')} style={styles.icon} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { /* Handle Facebook login */ }}>
              <View style={styles.circle}>
                <Image source={require('../../assets/images/facebook.png')} style={styles.icon} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
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
    marginBottom: 10,
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
    marginBottom:50,
  },
  icon: {
    width: 40,
    height: 40,
  },
});

export default RegisterScreen;
