import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { getCryptoRates, convertCrypto } from '../api/crypto';
import CryptoRateCard from '../components/cryptoRatesCard';

const CryptoConverterScreen = () => {
  const [cryptoRates, setCryptoRates] = useState({});
  const [fromCurrency, setFromCurrency] = useState('BTC');
  const [toCurrency, setToCurrency] = useState('USD');
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const rates = await getCryptoRates();
        setCryptoRates(rates);
      } catch (error) {
        Alert.alert('Error', 'Failed to fetch crypto rates.');
      }
    };
    fetchRates();
  }, []);

  const handleConvert = async () => {
    try {
      const result = await convertCrypto(fromCurrency, toCurrency, amount);
      setConvertedAmount(result.converted_amount);
    } catch (error) {
      Alert.alert('Error', 'Failed to convert currency.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crypto Converter</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <Button title="Convert" onPress={handleConvert} />

      {convertedAmount && (
        <Text style={styles.result}>Converted Amount: {convertedAmount} {toCurrency}</Text>
      )}

      <View>
        {Object.keys(cryptoRates).map((key) => (
          <CryptoRateCard key={key} cryptoName={key} rate={cryptoRates[key]} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default CryptoConverterScreen;
