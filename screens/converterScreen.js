import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image, TouchableOpacity, ActivityIndicator, StatusBar } from 'react-native';
import axios from 'axios';
import CustomText from '../components/CustomText';

const portfolioData = [
  { id: '1', name: 'Bitcoin', symbol: 'BTC', amount: '2,352.321 BTC', value: '', icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png' },
  { id: '2', name: 'USDT', symbol: 'USDT', amount: '12,400,423 USDT', value: '', icon: 'https://cryptologos.cc/logos/tether-usdt-logo.png' },
  { id: '3', name: 'Ethereum', symbol: 'ETH', amount: '2,423.013 ETH', value: '', icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png' },
  { id: '4', name: 'Polygon', symbol: 'MATIC', amount: '5,423.100 MATIC', value: '', icon: 'https://cryptologos.cc/logos/polygon-matic-logo.png' },
  { id: '5', name: 'Litecoin', symbol: 'LTC', amount: '40,423.100 LTC', value: '', icon: 'https://cryptologos.cc/logos/litecoin-ltc-logo.png' },
];

const App = () => {
  const [search, setSearch] = useState('');
  const [cryptoPrices, setCryptoPrices] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCryptoData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
          headers: {
            // 'X-CMC_PRO_API_KEY': "your-api-key",
          },
          params: {
            start: '1',
            limit: '10',
            convert: 'USD',
          },
        });

        const priceData = {};
        response.data.data.forEach((coin) => {
          if (portfolioData.some((item) => item.symbol === coin.symbol)) {
            priceData[coin.symbol] = coin.quote.USD.price.toFixed(2);
          }
        });
        setCryptoPrices(priceData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data from CoinMarketCap:', error);
        setLoading(false);
      }
    };

    fetchCryptoData();
    const interval = setInterval(fetchCryptoData, 60000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#000000" />;
  }

  return (
    <View style={styles.container}>
      <StatusBar />

      <FlatList
        data={portfolioData}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={(
          <>
            {/* Business Screen Section */}
            <TouchableOpacity style={styles.backButton}>
              <Image
                source={require('../assets/images/arrow-left.png')}
                style={styles.backIcon}
              />
            </TouchableOpacity>
            <Text style={styles.headerText}>Exchange</Text>

            <View style={styles.exchangeBox}>
              <View style={styles.label}>
                <CustomText style={{ color: "#fff" }}>Bitcoin</CustomText>
              </View>
              <View style={styles.topSection}>
                <View style={styles.cryptoTypeContainer}>
                  <Text style={styles.cryptoLabel}>Bitcoin</Text>
                  <Image
                    source={require('../assets/images/bitcoin.png')}
                    style={styles.cryptoIcon}
                  />
                </View>
                <TextInput style={styles.cryptoValue} editable={true} />
              </View>
              <Text style={styles.rateText}>1 BTC = 94,150,598.37 NGN</Text>
            </View>

            <View style={styles.conversion}>
              <TouchableOpacity style={styles.swapButton}>
                <Image
                  source={require('../assets/images/transfer.png')}
                  style={styles.swapIcon}
                />
              </TouchableOpacity>
            </View>

            <View style={[styles.exchangeBox, { backgroundColor: '#32cd32' }]}>
              <View style={[styles.label, { backgroundColor: "#fff" }]}>
                <CustomText style={{ color: "#32cd32" }}>Naira</CustomText>
              </View>
              <View style={styles.topSection}>
                <View style={styles.cryptoTypeContainer}>
                  <Text style={[styles.cryptoLabel, { color: "#000" }]}>Naira</Text>
                  <Image
                    source={require('../assets/images/naira.png')}
                    style={styles.cryptoIcon}
                  />
                </View>
                <TextInput style={styles.cryptoValue} value="0,37" editable={false} />
              </View>
              <Text style={[styles.rateText, { color: "#fff" }]}>1 NGN = 14.61 ETH</Text>
            </View>

            {/* <TouchableOpacity style={styles.confirmButton}>
              <Text style={styles.confirmText}>✓</Text>
            </TouchableOpacity> */}

             
          </>
        )}
        renderItem={({ item }) => (
          <View style={styles.cryptoItem}>
            <Image source={{ uri: item.icon }} style={styles.cryptoIcon} />
            <View style={styles.cryptoDetails}>
              <Text style={styles.cryptoName}>{item.name}</Text>
              <Text style={styles.cryptoAmount}>{item.amount}</Text>
            </View>
            <Text style={styles.cryptoValue}>
              {cryptoPrices[item.symbol]
                ? `$${cryptoPrices[item.symbol]}`
                : 'Fetching...'}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 20,
    zIndex: 10,
  },
  backIcon: {
    width: 27,
    height: 27,
    tintColor: '#fff',
  },
  headerText: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  exchangeBox: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    height: 110,
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
    color: "#fff",
    backgroundColor: "#32cd32",
    width: "20%",
    alignItems: 'center',
    justifyContent: 'center',
    margin: 1,
    borderRadius: 20,
    display: "flex",
    paddingVertical: 2,
  },
  cryptoLabel: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10,
  },
  cryptoIcon: {
    width: 25,
    height: 25,
  },
  cryptoValue: {
    fontSize: 24,
    fontWeight: 'bold',
    width: 120,
    borderWidth: 1,
    borderRadius: 10,
  },
  rateText: {
    color: '#888',
    marginTop: 0,
  },
  conversion: {
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: 'center',
  },
  swapButton: {
    alignSelf: 'center',
    marginVertical: 5,
  },
  swapIcon: {
    width: 20,
    height: 20,
    tintColor: '#fff',
  },
  confirmButton: {
    backgroundColor: '#32cd32',
    borderRadius: 50,
    padding: 10,
    alignItems: 'center',
  },
  confirmText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingLeft: 10,
    height: 40,
  },
  searchIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingLeft: 10,
    height: 40,
  },
  cryptoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  cryptoDetails: {
    flex: 1,
  },
  cryptoName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cryptoAmount: {
    color: '#888',
  },
  cryptoValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
