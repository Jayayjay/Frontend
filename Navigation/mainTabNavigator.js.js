import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';  // Import icons for tabs

// Import your screens
import CryptoConverterScreen from '../screens/converterScreen';
import transactionHistoryScreen from '../screens/transactionHistoryScreen';
import profileScreen from '../screens/profileScreen';

const Tab = createBottomTabNavigator();

// Main Tab Navigator
const MainTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === 'Converter') {
          iconName = 'swap-horizontal';  // Icon for converter tab
        } else if (route.name === 'History') {
          iconName = 'history';  // Icon for history tab
        } else if (route.name === 'Profile') {
          iconName = 'person';  // Icon for profile tab
        }
        return <Icon name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen name="Converter" component={CryptoConverterScreen} />
    <Tab.Screen name="History" component={transactionHistoryScreen } />
    <Tab.Screen name="Profile" component={profileScreen} />
  </Tab.Navigator>
);

export default MainTabNavigator;
