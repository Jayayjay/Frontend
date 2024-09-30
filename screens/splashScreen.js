import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, StatusBar} from 'react-native';
import React,{useState, useContex} from 'react'
import { useNavigation } from '@react-navigation/native';

const splashScreen = () => {
   
  const Navigation = useNavigation

  return (
    <View>
      <Text>splashScreen</Text>
    </View>
  )
}

export default splashScreen

const styles = StyleSheet.create({})