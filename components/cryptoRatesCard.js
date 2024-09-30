import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CryptoRateCard = ({ cryptoName, rate }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cryptoName}>{cryptoName}</Text>
      <Text style={styles.rate}>${rate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 10,
    elevation: 3,
  },
  cryptoName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rate: {
    fontSize: 16,
    color: '#333',
  },
});

export default CryptoRateCard;
