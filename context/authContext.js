import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import API from '../api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

  // Login function
  const login = async (username, password) => {
    try {
      const response = await API.post('/token/', { username, password });

      // Save access and refresh tokens
      await AsyncStorage.setItem('accessToken', response.data.access);
      await AsyncStorage.setItem('refreshToken', response.data.refresh);

      // Set state
      setAccessToken(response.data.access);
      setRefreshToken(response.data.refresh);
      setUser(username);
    } catch (error) {
      throw error;
    }
  };

  // Logout function
  const logout = async () => {
    await AsyncStorage.removeItem('accessToken');
    await AsyncStorage.removeItem('refreshToken');
    setAccessToken(null);
    setRefreshToken(null);
    setUser(null);
  };

  // Function to refresh the access token using the refresh token
  const refreshAccessToken = async () => {
    try {
      const refresh = await AsyncStorage.getItem('refreshToken');

      if (refresh) {
        const response = await API.post('/token/refresh/', { refresh });

        const newAccessToken = response.data.access;

        // Update the access token in AsyncStorage and state
        await AsyncStorage.setItem('accessToken', newAccessToken);
        setAccessToken(newAccessToken);
      } else {
        logout(); // If no valid refresh token, log out
      }
    } catch (error) {
      console.error('Failed to refresh access token', error);
      logout(); // Log out if refreshing fails
    }
  };

  // Automatically load tokens when the component mounts
  useEffect(() => {
    const loadTokens = async () => {
      const savedAccessToken = await AsyncStorage.getItem('accessToken');
      const savedRefreshToken = await AsyncStorage.getItem('refreshToken');

      if (savedAccessToken) setAccessToken(savedAccessToken);
      if (savedRefreshToken) setRefreshToken(savedRefreshToken);
    };

    loadTokens();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, accessToken, refreshAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
};
