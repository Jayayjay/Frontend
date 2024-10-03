import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from '../context/authContext';

// Import screens and navigators
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import MainTabNavigator from './mainTabNavigator.js';

const Stack = createStackNavigator();

// Auth Stack (Login/Registration)
const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);

// Main App Navigator
const AppNavigator = () => {
  const { user } = useContext(AuthContext);  // Get the user authentication state

  return (
    <NavigationContainer>
      {user ? (
        <MainTabNavigator />  // If user is logged in, show main tabs
      ) : (
        <AuthStack />  // Otherwise, show the login/registration flow
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
