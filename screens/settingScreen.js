import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CustomComponent = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        {/* <Image
          source={require('../assets/arrow-left.png')} // Replace with your image path
          style={styles.backIcon}
        /> */}
      </TouchableOpacity>

      <Text style={styles.headerText}>Exchange</Text>

      <View style={styles.exchangeBox}>
        <View style={styles.label}>
          <Text style={{ color: "#fff" }}>Bitcoin</Text>
        </View>
        <View style={styles.topSection}>
          <View style={styles.cryptoTypeContainer}>
            <Text style={styles.cryptoLabel}>Bitcoin</Text>
            {/* <Image
              source={require('../assets/bitcoin.png')} // Replace with Bitcoin image path
              style={styles.cryptoIcon}
            /> */}
          </View>
          <Text style={styles.cryptoValue}>$94,150,598.37 NGN</Text>
        </View>
        <Text style={styles.rateText}>1 BTC = 14.61 ETH</Text>
      </View>

      <TouchableOpacity style={styles.swapButton}>
        {/* <Image
          source={require('../assets/transfer.png')} // Replace with your swap image path
          style={styles.swapIcon}
        /> */}
      </TouchableOpacity>

      <View style={[styles.exchangeBox, { backgroundColor: '#32cd32' }]}>
        <View style={[styles.label, { backgroundColor: "#fff" }]}>
          <Text style={{ color: "#32cd32" }}>Naira</Text>
        </View>
        <View style={styles.topSection}>
          <View style={styles.cryptoTypeContainer}>
            <Text style={[styles.cryptoLabel, { color: "#000" }]}>Naira</Text>
            {/* <Image
              source={require('../assets/naira.png')} // Replace with Naira image path
              style={styles.cryptoIcon}
            /> */}
          </View>
          <Text style={[styles.cryptoValue, { color: "#fff" }]}>0.37</Text>
        </View>
        <Text style={styles.rateText}>1 NGN = 94,150,598.37 NGN</Text>
      </View>

      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmText}>✓</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
  },
  backIcon: {
    width: 35,
    height: 35,
    tintColor: '#fff',
  },
  headerText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  exchangeBox: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginVertical: 5,
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cryptoTypeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    backgroundColor: "#32cd32",
    width: "20%",
    alignItems: 'center',
    justifyContent: 'center',
    margin: 1,
    borderRadius: 20,
    paddingVertical: 2,
  },
  cryptoLabel: {
    fontSize: 35,
    fontWeight: 'bold',
    marginRight: 10,
  },
  cryptoIcon: {
    width: 40,
    height: 40,
  },
  cryptoValue: {
    fontSize: 24,
    fontWeight: 'bold',
    width: 120,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  rateText: {
    color: '#888',
    marginTop: 10,
  },
  swapButton: {
    alignSelf: 'center',
    marginVertical: 10,
  },
  swapIcon: {
    width: 40,
    height: 40,
    tintColor: '#fff',
  },
  confirmButton: {
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 10,
    alignSelf: 'center',
    marginTop: 50,
  },
  confirmText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default CustomComponent;
