import React from 'react';
import { AuthProvider } from './context/authContext';
import AppNavigator from './Navigation/appNavigation';

const App = () => {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
};

export default App;
