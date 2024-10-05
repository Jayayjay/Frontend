import axios from 'axios';

const API_URL = 'https://lp13z12n-8000.euw.devtunnels.ms/auth/login/';  // Your backend API URL

// Register a new user
export const registerUser = async (username, password, email) => {
  try {
    const response = await axios.post(`${API_URL}register/`, {
      username,
      password,
      email,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Log in and get the JWT token
export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}login/`, {
      username,
      password,
    });
    return response.data;  // This will contain the access token
  } catch (error) {
    throw error;
  }
};
