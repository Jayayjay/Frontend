import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton'; 
import CustomText from '../components/CustomText';// Make sure this is the correct path

const VerifyOTPScreen = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const Navigation = useNavigation();

  const handleOTPChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
  };

  return (
    <ImageBackground
      // source={require('../../assets/images/background.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Verify with OTP</Text>
        <CustomText style={styles.subtitle}>
          is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        </CustomText>

        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.otpInput}
              value={digit}
              onChangeText={(text) => handleOTPChange(text, index)}
              keyboardType="numeric"
              maxLength={1}
            />
          ))}
        </View>

        <TouchableOpacity>
          <Text style={styles.resendCode}>Didn't Receive OTP? Resend Code</Text>
        </TouchableOpacity>

        <CustomButton
          title="Verify"
          onPress={() => Navigation.navigate('FaceAuth')}
          style={styles.verifyButton}
          textStyle={styles.verifyButtonText}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: '',
  },
  title: {
    fontSize: 24,
    color: '#000',
    paddingTop:120, 
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#3A3A3A',
    marginBottom: 20,
    textAlign: 'center',
    paddingBottom: 30,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent:  'space-evenly',
    marginBottom: 20,
  },
  otpInput: {
    backgroundColor: '#FBFBFB',
    borderRadius: 15,
    padding: 20,
    textAlign: 'center',
    fontSize: 18,
    width: 70,
    height: 70,
    borderColor:'#000000',
  },
  resendCode: {
    color: '#000',
    textAlign: 'center',
    marginBottom: 40,
    fontWeight: 'bold',
  },
  verifyButton: {
    backgroundColor: '#111337',
    padding: 15,
    borderRadius: 15,
  },
  verifyButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default VerifyOTPScreen;
